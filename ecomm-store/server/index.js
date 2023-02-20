const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'veacollections'
})

app.use(cors);
app.use(express.json());

app.get('/', (req, res) => {
    const sqlinsert = 'INSERT INTO veacollections.inventory (id, name, price) VALUES (2, "kingofhowdydoovillage", "5000");'
    db.query(sqlinsert, (err, result) => {
        console.log('err')
        res.send(sqlinsert)
    })
    
}) 

app.listen(3001, () => {
    console.log('running on port 3001')
})


    // "devStart": "nodemon index.js",
