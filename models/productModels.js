const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name:           { type: String, required: true, unique: true },
//   category:       { type: String, required: true },
//   image:          { type: String, required: true },
//   price:          { type: Number, required: true },
//   countInStock:   { type: Number, required: true },
//   brand:          { type: String, required: true },
//   rating:         { type: Number, required: true },
//   numReviews:     { type: Number, required: true },
//   description:    { type: String, required: true }
// }, { collection: 'Product' })

const userSchema = new mongoose.Schema({
  name:           { type: String, required: false },
  category:       { type: String, required: false },
  image:          { type: String, required: false },
  price:          { type: Number, required: false },
  countInStock:   { type: Number, required: false },
  brand:          { type: String, required: false },
  rating:         { type: Number, required: false },
  numReviews:     { type: Number, required: false },
  description:    { type: String, required: false }
}, { collection: 'Product' })

const Product = mongoose.model('Product', userSchema);
module.exports = Product;