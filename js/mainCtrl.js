angular.module('quoteBook')
	.controller('mainCtrl', function ($scope, dataService) {
		
		$scope.quotes = dataService.getData();
		






















	});