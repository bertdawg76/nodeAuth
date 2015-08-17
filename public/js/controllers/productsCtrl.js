'use strict';

app.controller('productsCtrl', ['$scope', 'products', 'networkService', function($scope, products) {

	$scope.products = products;

	var getProducts = function() {
		networkService.getProducts().then(function(data) {
			$scope.products = products;
		});
	};

}]);