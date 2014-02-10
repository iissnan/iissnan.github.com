"use strict";

angular.module("vi.controllers", []);
angular.module("vi.directives", []);
angular.module("vi.services", []);
angular.module("vi.filters", []);

var APP_NAME = "iissnan";
var mainModule = angular.module(APP_NAME, [
    "ngRoute",
    "vi.controllers",
    "vi.directives",
    "vi.services",
    "vi.filters"
]);


