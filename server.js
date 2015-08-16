'use strict';

//#####################################################
//Dependencies:
//#####################################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//#####################################################
//Controllers:
//#####################################################
var productCtrl = require('./controllers/productCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

//#####################################################
//Express:
//#####################################################
var app = express();

//#####################################################
//Express Server Port:
//#####################################################
var port = process.argv[2] || 3000;

//#####################################################
//Middelware:
//#####################################################
app.use('/', bodyParser.json());
app.use('/', cors());

/* Middelware to render all of our public files. Any files of
the public folder will be renderd if you use them*/
app.use(express.static(__dirname + '/public'));

//#####################################################
//Routes:
//#####################################################
/* Products */
app.post('/api/product', productCtrl.create);
app.get('/api/product/', productCtrl.read);
app.put('/api/product/:productId', productCtrl.update);
app.delete('/api/product/:productId', productCtrl.remove);
/* Users */
app.post('/api/users', userCtrl.create);
app.post('/api/users/:userId/products', userCtrl.add);
app.get('/api/users/', userCtrl.read);
app.put('/api/users/:userId', userCtrl.update);
app.delete('/api/users/:userId', userCtrl.remove);

//#####################################################
//Starting server:
//#####################################################
app.listen(port, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Listening on port: ' + port);
	}
});

//#####################################################
//Connection to database:
//#####################################################
var mongoUri = 'mongodb://localhost:27017/ecommerce';
mongoose.connect(mongoUri, function(err) {
	if (err) {
		console.log('Connection to MongoDB failed');
	} else {
		console.log('Connected to MongoDB at: ', mongoUri);
	}
}); 