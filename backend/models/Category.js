const mongoose = require('mongoose');

const Category = mongoose.Schema({
    category_name: { type: String, requied: true },
    category_description: { type: String, required: true } 
})

module.exports = mongoose.model('Category', Products);