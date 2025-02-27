const dbConnect = require('./mongodb')
dbConnect().then((resp) => {
    resp.find().toArray().then((data) => {
        // console.warn(data)
    })
})
// dbConnect()

const main = async () => {
    let data = await dbConnect()
    data = await data.find().toArray()
    // console.warn(data);
}
main()