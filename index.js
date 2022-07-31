const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const app = express();
const Product = require('./models/product');

//Connect to MongoDB and create a db called farmStand
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error connecting to Mongodb')
        console.log('Error:', err.message);
    })

//Set the path to the views folder
//Set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Get all products in the database
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

//Get the form page to add a product
app.get('/products/new', (req, res) => {
    res.render('products/new')
})

//Create a new product
app.post('/products', async (req, res) => {
    const newProduct = await new Product(req.body)
    await newProduct.save()
    res.redirect(`/products/${newProduct._id}`)
})

//Get a single product
app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/show', { product })
})

//Get the form to Find and edit a product
app.get('/products/:id/edit', async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.render('products/edit', { product })
})

//Update a product using a put request
app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${updatedProduct._id}`) 
})




















//Start the server
app.listen(process.env.PORT || 3200, () => {
    console.log(`Server running on localhost:${process.env.PORT || 3200}`);
})