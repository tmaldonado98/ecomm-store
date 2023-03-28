require('dotenv').config();
const functions = require("firebase-functions");
const express = require('express');
const app = express();
// const bodyparser = require('body-parser');
// 
const cors = require('cors');
const mysql = require('mysql2/promise');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const sgMail = require('@sendgrid/mail')

const db = mysql.createPool({
    // host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    socketPath: process.env.INSTANCE_UNIX_SOCKET,
    port: process.env.DB_PORT,
    // connectionLimit: 5,
    // connectTimeout: 10000,
})




// const allowedOrigins = ['https://us-central1-vea-collections-b5045.cloudfunctions.net', 'https://vea-collections-b5045.web.app'];
// const corsOptions = {
//   origin: function(origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };


// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//         return;
//     }
//     console.log('Database connection established');
// });
app.use(cors());
// app.use(cors);
app.use(express.static('functions')); ///build?
app.use(express.json());

    app.get('/data', async (req, resu) => {  


        const fetch = 'SELECT * FROM inventory_table;';
        console.log(fetch);
        try {
          const sel = await db.query(fetch);
          resu.json(sel[0]);
          console.log(sel[0]);
        } catch (error) {
          console.error(error);
          resu.status(500).json({ error: 'Failed to fetch data from database' });
        }
    
    })



app.post('/checkout-session', async (req, resu) => {
    
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
        console.log(priceArr);    
        console.log(forLineItems);    

    })
    .catch(error => console.log(error))



    const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
            // allowed_countries: ['US', 'CA', 'CN'],
            // required: true,
          },
        payment_method_types: ['card', 'cashapp'],
        success_url: `https://vea-collections-b5045.firebaseapp.com/Success`,
        // ?session_id=${session.id}  ---> make unique route for each checkout session  ,
        cancel_url: 'https://vea-collections-b5045.firebaseapp.com/Products',
        line_items: forLineItems,
        mode: 'payment',
    })
      
    resu.json({ url: session.url });
})


app.post('/contact', (req, resu) => {

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

    resu.json();
})

// app.listen(process.env.LISTEN_PORT, () => {
//     console.log('running on port ' + process.env.LISTEN_PORT)
//     db.connect( function (err){
//         if(err) throw err;
//         console.log('database connected')
//     })
// })

exports.app = functions.https.onRequest(app);

// exports.helloWorld = (req, res) => {
//     let message = req.query.message || req.body.message || 'Hello World!';
//     res.status(200).send(message);
//   };