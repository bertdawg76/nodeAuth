'use strict';

var Product = require('../models/products.js');

var create = function(req, res) {
  Product.create(req.body, function(err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};

var read = function(req, res) {
  Product.find(req.query, function(err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};

var update = function(req, res) {
  Product.update(req.query, req.body, function(err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result);
    } 
  });
};

var remove = function(req, res) {
  Sighting.remove(req.query, function(err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result);
    } 
  });
};

module.exports = {
  create: create,
  read: read,
  update: update,
  remove: remove
};