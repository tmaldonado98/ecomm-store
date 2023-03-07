'use strict';
require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

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
// app.use(bodyparser.urlencoded({extended: true}))

// const readBuffer =  multer({storage: multer.memoryStorage()});

app.get('/data', (req, res) => {  
    // .then(console.log(rows)).then(response => rows.push(response))   , { rowAsArray: false })
    const fetch = 'SELECT * FROM inventory';
    db.query(fetch, (err, result) => {
        if (err) {console.log(err)};
        res.json(result);

    })
})

app.post('/checkout-session', async (req, res) => {
    const itemsInCart = req.body;
    console.log(itemsInCart)

    const keyArray = [];
    const prodkey = itemsInCart.forEach(element => {
        keyArray.push(element.item.product.prodkey)
        
    });
    console.log(keyArray)

    await stripe.products.list()
    .then(item => {
        const productToUpd = item.data.find(prod => prod.metadata.prodkey === prodkey)
        productId = productToUpd.id;
        console.log(productId);
    })

    stripe.prices.list()
    .then(curIt => {
        const priceItem = curIt.data.find(price => price.product === itemsInCart.item.product)
    })
    // const session = await stripe.checkout.sessions.create({
    //     success_url: 'http://localhost:3000/success',
    //     line_items: [
    //       {price: 'price_H5ggYwtDq4fbrJ', quantity: itemsInCart.quantity}, /// retrieve price id and quantity in cart
    //     ],
    //     mode: 'payment',
    //   });


    // const cartMap = new Map([]);
    // itemsInCart.map(curIt => {
    //     cartMap.set(curIt.item.product, curIt.quantity)
    // })
    // // cartMap.set(itemsInCart)
    // console.log(cartMap);

})

app.post('/orderData', (request, response) => {
    const insert = 'INSERT INTO vea_orders () VALUES (?, )';
    
    db.query(insert, [], (error, result) => {
        if (error) {console.log(error)};
        // res.json(result);

    })

})
 
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

