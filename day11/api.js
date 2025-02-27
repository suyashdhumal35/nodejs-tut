const express = require('express')
const dbConnect = require('./mongodb')
const app = express()

app.use(express.json())

app.get('/', async (req, resp) => {

    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)
});

app.post('/', async (req, resp) => {

    let data = await dbConnect();
    let result = await data.insertOne(req.body)

    resp.send(req.body)
})

app.put('/:name', async (req, resp) => {
    // app.put('/', async (req, resp) => {

    let data = await dbConnect();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    resp.send(req.body)
})

// delete code not right 
app.delete('/:id', async (req, resp) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    resp.send(result)
})


app.listen(5000)

console.log('Server running at http://127.0.0.1:5000/');

