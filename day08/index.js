
const express = require("express");
const reqFilter = require("./middlewaare");
const app = express()
const route = express.Router
// app.use(reqFilter)

route.use(reqFilter)
app.get('/', (req, resp) => {
    resp.send('Welcome to the Home page')
})

app.get('/users', (req, resp) => {
    resp.send('Welcome to the User page')
})
route.get('/about', (req, resp) => {
    resp.send('Welcome to the about page')
})
route.get('/contact', (req, resp) => {
    resp.send('Welcome to the Contact page')
})
app.use('/', route)

app.listen(5000)

console.log('Server running at http://127.0.0.1:5000/');

