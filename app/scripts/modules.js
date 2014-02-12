"use strict";

angular.module("controllers", []);
angular.module("directives", []);
angular.module("services", []);
angular.module("filters", []);

var APP_NAME = "iissnan";
var mainModule = angular.module(APP_NAME, [
    "ngRoute",
    "controllers",
    "directives",
    "services",
    "filters"
]);


