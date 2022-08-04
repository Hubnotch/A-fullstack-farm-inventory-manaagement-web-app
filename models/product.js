const mongoose = require('mongoose');
const Farm = require('./farm');
const {Schema} = mongoose;
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
    },
    farm:{
        type: Schema.Types.ObjectId,
        ref:'Farm'
    }
})

//Product Model
const Product = mongoose.model('Product', productSchema);

//Export Product Model for use in other files
module.exports = Product;