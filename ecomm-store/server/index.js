'use strict';
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'singapore123',
    database: 'veacollections',
    port: '3306'
})

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}))


app.get('/api/insert', (req, res) => {

    // const name = res.body.name; 
    // const size = res.body.size;  
    // const medium = res.body.medium;  
    // const price = res.body.price;  
    // const blob = res.body.blob;  
    // const key = res.body.prodkey;  
    // const test = 'test';
    // (name, size, medium, price, imgsrc, prodkey) VALUES (?, ?, ?, ?, ?, ?)
    //[name, size, medium, price, blob, key],
    const fetch = 'SELECT * FROM inventory';
    db.query(fetch, (err, result) => {
        if (err) {console.log(err)}
        console.log(result);
        // res.send(insert);
    })
})
 

app.listen(3001, () => {
    console.log('running on port 3001')
    db.connect( function (err){
        if(err) throw err;
        console.log('database connected')
    })
})

    // "devStart": "nodemon index.js", 
    // "start": "CHOKIDAR_USEPOLLING=true react-scripts start",   <--for react on package.json

