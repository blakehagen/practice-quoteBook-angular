angular.module('quoteBook')
	.service('dataService', function () {

		var quotes = [
			{ text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse' },
			{ text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill' },
			{ text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' },
			{ text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost' },
			{ text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart' },
			{ text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon' },
			{ text: 'What even is a jQuery?', author: 'Tyler S. McGinnis' }
		];
		
		// GET QUOTES //

		this.getData = function () {

			if (!localStorage.quotes) {
				return quotes;
			}
			return JSON.parse(localStorage.quotes);
		};
		
		// REMOVE QUOTE //

		this.removeData = function (text) {

			for (var i = 0; i < quotes.length; i++) {
				if (quotes[i].text === text) {
					quotes.splice(i, 1);
				}
			}
			console.log(quotes);
			localStorage.setItem("quotes", JSON.stringify(quotes));
			// remove quote from localStorage //
			// localStorage.quotes = JSON.parse(localStorage.quotes);
			// console.log(localStorage.quotes);
			// for (var j = 0; j < localStorage.quotes.length; j++) {
			// 	if (localStorage.quotes[j].text === text) {
			// 		localStorage.quotes.splice(j, 1);
			// 	}
			// }
		};
		
		// ADD TO LOCAL STORAGE //

		this.addData = function (obj) {
			quotes.push(obj);
			localStorage.setItem("quotes", JSON.stringify(quotes));
			
		};




	});