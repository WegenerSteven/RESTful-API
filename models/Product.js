const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});
const product = mongoose.model("product", ProductSchema);

module.exports = product;