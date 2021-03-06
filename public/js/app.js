'use strict';

var app = angular.module('nodeAuth', ['ngRoute']);

app.config(function($routeProvider) {

  	$routeProvider
		.when('/', {
			templateUrl: './views/home.html',
		  	controller: 'homeCtrl' 
		})
	    .when('/login', {
	  		templateUrl: './views/login.html',
	  		controller: 'authCtrl'
	  	})
	    .when('/register', {
	  		templateUrl: './views/register.html',
	  		controller: 'authCtrl'
	  	})
	  	.when('/products', {
	  		templateUrl: './views/products.html',
	  		controller: 'productsCtrl',
	  		resolve: {
	  			products: function(networkService) {
	  				return networkService.getProducts();
	  			}
	  		}
	  	})
	  	.otherwise({
	    	redirectTo: '/'
		});

});