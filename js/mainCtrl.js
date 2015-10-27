angular.module('quoteBook')
	.controller('mainCtrl', function ($scope, dataService) {

		$scope.quotes = dataService.getData();


		$scope.addQuote = function () {
			var emptyObj = {};
			emptyObj.text = $scope.quoteData;
			emptyObj.author = $scope.authorData;

			dataService.addData(emptyObj);
			$scope.quoteData = '';
			$scope.authorData = '';
		};


		$scope.removeQuote = function () {
			dataService.removeData($scope.old)
			$scope.old = '';
		};

		$scope.filter = function () {

		}























	});