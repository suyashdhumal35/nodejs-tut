const express = require('express')
require('./config')
const Product = require('./product')


const app = eexpres()

app.post('/create', (req, resp) => {
    resp.send('done');
})


app.listen(5000)

console.log('Server running at http://127.0.0.1:5000/');