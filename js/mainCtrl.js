angular.module('quoteBook')
	.controller('mainCtrl', function ($scope, dataService) {
		
		// GET QUOTE DATA //

		$scope.quotes = dataService.getData();
		
		// $scope.quotes = localStorage.getItem("text", "author");

		
		// SHOW/HIDE BUTTONS //

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
		
		// ADD NEW QUOTE //

		$scope.addQuote = function () {

			var emptyObj = {};
			emptyObj.text = $scope.quoteData;
			emptyObj.author = $scope.authorData;

			dataService.addData(emptyObj);

			$scope.quotes = dataService.getData();

			$scope.quoteData = '';
			$scope.authorData = '';
			$scope.toggleAdd = false;
		};
		
		// REMOVE QUOTE //


		$scope.removeQuote = function () {
			dataService.removeData($scope.old)
			$scope.old = '';
			$scope.toggleRemove = false;
			$scope.quotes = dataService.getData();

		};






	});