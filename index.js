const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.log('Error connecting to Mongodb')
    console.log('Error:', err.message);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view enigne', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Hello')
})



app.listen(process.env.PORT || 3200, ()=>{
    console.log(`Server running on localhost:${process.env.PORT || 3200}`);
})