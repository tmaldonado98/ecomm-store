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
    port: '3306'
})

app.use(cors());
app.use(express.static('public'));
app.use(express.json());


app.get('/data', (req, res) => {  
    const fetch = 'SELECT * FROM inventory';
    db.query(fetch, (err, result) => {
        if (err) {console.log(err)};
        res.json(result);

    })
})

app.post('/checkout-session', async (req, res) => {
    
    const cartItems = req.body;
    // console.log(cartItems)
    // console.log(cartItems[0].item);

    // const cartMap = new Map([]);
    // cartItems.map(currentObj => {
    //     cartMap.set({prodkey: currentObj.item.product.prodkey, price: currentObj.item.product.price, name: currentObj.item.product.name}, {quantity: currentObj.quantity})
    // });
    // console.log(cartMap);

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
    // + currentObj.quantity


    const stripeProdArr = [];
    const stripeProdId = [];

    await stripe.products.list()
    // .then(item => console.log(item.data[0].metadata))
    .then(item => { 
        for (let i = 0; i < cartArr.length; i++) {
            stripeProdArr.push(item.data.find(prod => prod.metadata.prodkey === cartArr[i].prodkey))
            // stripeProdId.push(stripeProdArr.id)
            //  = product.id;
            
        }
        // const stripeProdSet = new Set(stripeProdArr)

        console.log(stripeProdArr)
        // console.log(stripeProdSet.length)
        // console.log(stripeProdId)
        
     })
    .catch(error => console.log(error))

    const priceArr = [];
    // const priceArrId = [];
    // const priceIdArr = [];
    const forLineItems = [];

    await stripe.prices.list()
    .then(curIt => {
        for (let i = 0; i < cartArr.length; i++) {
            priceArr.push(curIt.data.find(price => price.product === stripeProdArr[i].id));

            forLineItems.push({price: priceArr[i].id, quantity: prodQuant[i]})
        }
        // priceId = price.id;
        // console.log(priceArrItems);
        console.log(priceArr);    
        console.log(forLineItems);    

    })
    .then()
    .catch(error => console.log(error))



    const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
            // allowed_countries: ['US', 'CA', 'CN'],
            // required: true,
          },
        payment_method_types: ['card', 'cashapp'],
        success_url: `http://localhost:3000/Success`,
        // ?session_id=${session.id}  ---> make unique route for each checkout session  ,
        cancel_url: 'http://localhost:3000/Products',
        line_items: forLineItems,
        mode: 'payment',
    })

      
    console.log(session);

    res.json({ url: session.url });

    //   .then(console.log(res.json()))
    //   .then(res.json({ url }))
})


app.post('/contact', (req, res) => {
    const messageData = req.body;
    console.log(process.env.SENDGRID_KEY);
    console.log(messageData)
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const msg = {
        // CHANGE TO VEA COLLECTIONS EMAIL ADDRESS
      to: 'tmaldonadotrs@gmail.com',
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
    
    // const itemsInCart = req.body;
    // console.log(itemsInCart)

    // const keyArray = [];
    // const prodkey = itemsInCart.forEach(element => {
    //     keyArray.push(element.item.product.prodkey)
        
    // });
    // console.log(keyArray)

    // await stripe.products.list()
    // .then(item => {
    //     const productToUpd = item.data.find(prod => prod.metadata.prodkey === prodkey)
    //     productId = productToUpd.id;
    //     console.log(productId);
    // })

    // stripe.prices.list()
    // .then(curIt => {
    //     const priceItem = curIt.data.find(price => price.product === itemsInCart.item.product)
    // })


    // const cartMap = new Map([]);
    // itemsInCart.map(curIt => {
    //     cartMap.set(curIt.item.product, curIt.quantity)
    // })
    // // cartMap.set(itemsInCart)
    // console.log(cartMap);

// })

// app.post('/orderData', (request, response) => {
//     const insert = 'INSERT INTO vea_orders () VALUES (?, )';
    
//     db.query(insert, [], (error, result) => {
//         if (error) {console.log(error)};
//         // res.json(result);

//     })

// })
 
const port = 3001;

app.listen(port, () => {
    console.log('running on port ' + port)
    db.connect( function (err){
        if(err) throw err;
        console.log('database connected')
    })
})

    // "devStart": "nodemon index.js", 
    // "start": "CHOKIDAR_USEPOLLING=true react-scripts start",   <--for react on package.json

