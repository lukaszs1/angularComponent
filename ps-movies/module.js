(function() {
    "use strict";

    var x = angular.module("mov", ["ngComponentRouter"]);
    x.value("$routerRootComponent","movieApp");

    x.component("appAbout", {
    	template:"About page..."
    });

}());