angular.module('quoteBook')
	.controller('mainCtrl', function ($scope, dataService) {



		$scope.quotes = dataService.getData();

		$scope.closeButtonsAdd = function () {
			$scope.toggleRemove = false;
			$scope.toggleFilter = false;
		};

		$scope.closeButtonsRemove = function () {
			$scope.toggleAdd = false;
			$scope.toggleFilter = false;
		};

		$scope.closeButtonsFilter = function () {
			$scope.toggleAdd = false;
			$scope.toggleRemove = false;
		};


		$scope.addQuote = function () {

			var emptyObj = {};
			emptyObj.text = $scope.quoteData;
			emptyObj.author = $scope.authorData;

			dataService.addData(emptyObj);
			$scope.quoteData = '';
			$scope.authorData = '';
			$scope.toggleAdd = false;
		};


		$scope.removeQuote = function () {
			dataService.removeData($scope.old)
			$scope.old = '';
			$scope.toggleRemove = false;
		};

























	});