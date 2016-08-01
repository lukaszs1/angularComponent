(function () {
	var x = angular.module("mov");
	x.component("movieApp", {
		templateUrl: "ps-movies/movie-app.component.html",
		$routeConfig:[
			{path: "/list", component:"movl", name: "List"},
			{path: "/about", component: "appAbout", nome:"About"},
			{path: "/**", redirectTo:["List"]}
		]
	});


})();