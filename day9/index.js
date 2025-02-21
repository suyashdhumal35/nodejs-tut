
const express = require("express");
const reqFilter = require("./middlewaare");
const app = express()

// app.use(reqFilter)

app.get('/', (req, resp) => {
    resp.send('Welcome to the Home page')
})

app.get('/users', reqFilter, (req, resp) => {
    resp.send('Welcome to the User page')
})
app.get('/about', reqFilter, (req, resp) => {
    resp.send('Welcome to the about page')
})

app.listen(5000)

console.log('Server running at http://127.0.0.1:5000/');

