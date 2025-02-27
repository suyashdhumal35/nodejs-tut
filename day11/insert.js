const dbConnect = require('./mongodb')

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            { name: 'max 11', brand: 'vivo', price: 3400, category: 'mobile' },
            { name: 'max 12', brand: 'vivo', price: 3600, category: 'mobile' },
            { name: 'max 20', brand: 'vivo', price: 3800, category: 'mobile' },
        ]
    )
    if (result.acknowledged) {
        console.log("data inserted");
    }
}
insert()