const mongoose = require('mongoose');

//Product Schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: [String],
        tolowerCase: true,
        enums: ['Vegetables', 'Fruits', 'Dairy', 'Meat', 'Drinks']
    }
})

//Product Model
const Product = mongoose.model('Product', productSchema);

//Export Product Model for use in other files
module.exports = Product;