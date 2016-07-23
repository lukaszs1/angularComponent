(function () {
	 "use strict"
	 var module = angular.module("mov");	

	 function controller ($http) {
	 		 var model = this;
	 		 //var movies = [];
	 		 model.$onInit = function(){
		 		 $http.get('movies.json')
		 	 	.then(function (response) {
		 		 		model.movies = response.data;
		 		 		return model.movies;
		 		 	});
	 		 }
	 		 model.up = function (movie) {
	 		 	 if (movie.rating < 5){
	 		 	 	movie.rating++;
	 		 	 }
	 		 	 
	 		 }
	 		 model.down = function (movie) {
	 		 	 if (movie.rating > 1) {
	 		 	 	movie.rating--;
	 		 	 };
	 		 }
	}


	 module.component("movl", {
	 	templateUrl:"ps-movies/ps-movies.html",
	 	controllerAs: "model",
	 	controller: ['$http',controller]
	 });
})();