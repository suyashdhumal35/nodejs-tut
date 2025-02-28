const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max suyash",
        price: 20000,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}

const updateInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        { name: "max suyash" },
        {
            $set: { price: 20000, name: 'max yash' }
        }
    )
    console.log(data)
}

const deleteInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({ name: 'max yash' })
    console.log(data);
}
const findInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({ name: 'max pro 611' })
    console.log(data);
}

// findInDB();
// saveInDB()
// updateInDB()
// deleteInDB()