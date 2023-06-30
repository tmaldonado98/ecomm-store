require('dotenv').config();
const express = require('express');
// const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const sgMail = require('@sendgrid/mail')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

app.use(cors());
app.use(express.static('public'));
app.use(express.json());


app.get('/data', (req, res) => {  
    const fetch = 'SELECT * FROM inventory_table';
    console.log(fetch);
    db.query(fetch, (err, result) => {
        if (err) {console.log(err)};
        res.json(result);
        console.log(result)
    })
})

app.post('/checkout-session', async (req, res) => {
    
    const cartItems = req.body;

    const cartArr = [];
    cartItems.map(currentObj => {
        cartArr.push(currentObj.item.product)
    });
    console.log(cartArr);
    const prodQuant = [];
    cartItems.map(curr => {
        prodQuant.push(curr.quantity)
    })
    console.log(prodQuant)

    const stripeProdArr = [];
    const stripeProdId = [];

    await stripe.products.list()
    // .then(item => console.log(item.data[0].metadata))
    .then(item => { 
        for (let i = 0; i < cartArr.length; i++) {
            stripeProdArr.push(item.data.find(prod => prod.metadata.prodkey === cartArr[i].prodkey))
            
        }

        console.log(stripeProdArr)
        // console.log(stripeProdSet.length)
        
     })
    .catch(error => console.log(error))

    const priceArr = [];
    const forLineItems = [];

    await stripe.prices.list()
    .then(curIt => {
        for (let i = 0; i < cartArr.length; i++) {
            priceArr.push(curIt.data.find(price => price.product === stripeProdArr[i].id));

            forLineItems.push({price: priceArr[i].id, quantity: prodQuant[i]})
        }
        // priceId = price.id;
        // console.log(priceArrItems);
        // console.log(priceArr);    
        // console.log(forLineItems);    

    })
    .catch(error => console.log(error))



    const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
            // allowed_countries: ['US', 'CA', 'CN'],
            // required: true,
          },
        payment_method_types: ['card', 'cashapp'],
        success_url: `https://vea-collections.com/Success`,
        // ?session_id=${session.id}  ---> make unique route for each checkout session  ,
        cancel_url: 'https://vea-collections.com/Products',
        line_items: forLineItems,
        mode: 'payment',
    })
      
    res.json({ url: session.url });
})


app.post('/contact', (req, res) => {
    const messageData = req.body;
    console.log(process.env.SENDGRID_KEY);
    console.log(messageData)
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const msg = {
      to: process.env.SG_ADDRESS,
      from: messageData.user,
      subject: 'Vea Collections: Message from ' + messageData.name,
      text: 'Message body: ' + messageData.message,
    };

    const customerCopy = {
        to: messageData.user,
        from: messageData.user,
        subject: 'Copy of your message to the Vea Collections team',
        text: 'Message body: ' + messageData.message,
    };

    sgMail.send(msg)
    .then(sgMail.send(customerCopy))
    .then(() => console.log('Email and customer copy sent successfully!'))
    .catch((error) => console.error(error));

    res.json();
})
 
const port = 3001;

app.listen(port, () => {
    console.log('running on port ' + port)
    db.connect( function (err){
        if(err) throw err;
        console.log('database connected')
    })
})