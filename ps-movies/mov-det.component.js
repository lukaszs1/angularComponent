(function(){
	"use strict";
	var x = angular.module("mov");
	x.component("movDet",{
		templateUrl:"ps-movies/mov-det.component.html",
	/*	$canActivate:function($timeout){
			return $timeout(function(){
				return true;
			},2000)
		},*/
		controller: function(){
			var t = this;
			t.$routerOnActivate = function(next, previous){
				console.log(next);
				t.id = next.params.id;
				
			};
		}
	});

})();