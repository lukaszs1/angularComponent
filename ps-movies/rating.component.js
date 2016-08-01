(function () {
	"use strict"
	var x = angular.module("mov");
	x.component("rating",{
		templateUrl: "ps-movies/rating.component.html",
		bindings:{
			value:"<"
		},
		controller: function () {
			this.$onInit = function () {
				this.entries = [];
				for (var i = 1; i <= this.value; i++) {
					this.entries.push(i);	
				}

			} 
			this.$onChanges = function(){
				this.entries = [];
				for (var i = 1; i <= this.value; i++) {
					this.entries.push(i);	
				}
				
				console.log(this.entries);
			}
		}
	});

})();