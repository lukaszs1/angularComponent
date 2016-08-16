(function () {
	var x = angular.module("mov");
	x.component("movieApp", {
		templateUrl: "ps-movies/movie-app.component.html",
		$routeConfig:[
			{path: "/home", component:"movl", name: "List"},
			{path: "/about", component: "appAbout", name:"About"},
			{path:"/detail/:id", component: "movDet", name:"Det"},
			{path: "/**", redirectTo:["List"]}
		]
	});
})();