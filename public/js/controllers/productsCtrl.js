'use strict';

app.controller('productsCtrl', ['$scope', 'products', 'networkService', function($scope, products, networkService) {

	$scope.products = products;

	var getProducts = function() {
		networkService.getProducts().then(function(data) {
			$scope.products = products;
		});
	};

	$scope.addProduct = function() {
		networkService.addProduct($scope.product).then(function(newProduct) {
			$scope.product = {};
			$scope.products.push(newProduct);
		});
	};

}]);