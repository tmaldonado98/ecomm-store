'use strict';
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const multer = require('multer');
const fs = require('fs');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'singapore123',
    database: 'veacollections',
    port: '3306'
})

app.use(cors());
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

