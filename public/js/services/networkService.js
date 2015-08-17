'use strict';

app.service('networkService', ['$http', function($http) {

	this.getProducts = function() {
		return $http.get('/api/products').
		  then(function(response) {
		  	console.log(response);
		  	return response.data;
		  }, function(err) {
			console.log('Error: ', err);
		  });
	};

	this.addProduct = function(body) {
		return $http.post('/api/products', body).
		  then(function(response) {
			console.log(response);
			return response.data;
		  }, function(err) {
			console.log('Error: ', err);
		  });
	};

}]);