
const express = require('express')
const app = express()

app.get('', (req, resp) => {
    resp.send(`
        <h1>Welcome, THis is Home Page</h1>
        <a href="/about">About</a><br/>
        <a href="/help">Help</a>
        `)
});

app.get('/about', (req, resp) => {
    resp.send(`
        <input type = "text" name = "" id = "" placeholder = "enter the" value="${req.query.name}" />
    <button> Sumbit</button>
    <br/><br/>
        <a href="/">Home</a>
        `)
});

app.get('/help', (req, resp) => {
    resp.send(
        [
            {
                name: "Suaysh",
                email: "suayshdhumal@gmail.com"
            },
            {
                name: "Suaysh",
                email: "suayshdhumal@gmail.com"
            },
        ]
    )
});

app.listen(5000);


console.log('Server running at http://127.0.0.1:5000/');