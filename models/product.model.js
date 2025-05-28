const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    status: String,
    position: Number,
    deleted: Boolean
});
const Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;