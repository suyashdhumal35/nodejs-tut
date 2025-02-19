
const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, 'public')

// app.use(express.static(publicPath))
app.get('', (req, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/home', (req, resp) => {
    resp.sendFile(`${publicPath}/home.html`)
})
app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('*', (req, resp) => {
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5000)

console.log('Server running at http://127.0.0.1:5000/');