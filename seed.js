const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error connecting to Mongodb')
        console.log('Error:', err.message);
    })

// const p = new Product({
//     name: 'Cucumber',
//     price: 1.99,
//     category: 'Vegetables'
// })

// p.save().then(() => {
//     console.log('Product saved');
// }).catch(err => {
//     console.log('Error:', err.message);
// })
const products = [
    { name: "Fairy Eggplant", price: 1.0, category: "vegetables" }, { name: "Organic Melon", price: 4.99, category: "fruit" }, { name: "Organic Mini Seedless Water Melon", price: 3.99, category: "fruit" }, { name: "Celery", price: 1.50, category: "vegetable" },{name:"Chocolate Whole Milk",price:2.69,category:"dairy"}
]

Product.insertMany(products).then(() => {
    console.log('Products saved');
})
.catch(err => {
    console.log('Error:', err.message);
})