const mongoose = require('mongoose');

const Products = mongoose.Schema({
    product_name: { type: String, required: true },
    product_descriptions: { type: String, required: true },
    product_price: { type: String, required: true },
    product_category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    product_offer: { type: Number, default: 0 },
    product_images: [ { type: String } ],
    product_videos: { type: String },
    product_ratings: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Ratings' } ],
    product_comments: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Comments' } ],
    product_combo: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Combo' } ],
    product_favourites: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Favourites' } ]
});

module.exports = mongoose.model('Products', Products);