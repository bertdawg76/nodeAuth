'use strict';

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema ({
  title: { type: String, unique: true, lowercase: true, required: true, index: true },
  brand: { type: String, lowercase: true, required: true },
  description: { type: String, lowercase: true, required: true},
  price: { type: Number, min: 0 }
});

module.exports = mongoose.model('products', productSchema);