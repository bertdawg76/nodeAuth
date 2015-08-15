'use strict';

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema ({
  article: { type: String, unique: true, lowercase: true, required: true, index: true },
  category: { type: String, lowercase: true, required: true },
  brand: { type: String, lowercase: true, required: true },
  description: { type: String, lowercase: true, required: true},
  price: { type: Number, min: 0 }
});

module.exports = mongoose.model('products', productSchema);