'use strict';

/**
 * @ngdoc function
 * @name homePageApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the homePageApp
 */
angular.module("controllers")
    .controller('MenuCtrl', function ($scope, $location, $route) {
        var menuItems = [
            {name: "profile", path: "/",       icon: "person"},
            {name: "lab",     path: "/lab",    icon: "beaker"},
            {name: "read",    path: "/read",   icon: "bookmark"},
            {name: "device",  path: "/device", icon: "monitor"}
        ];
        var routes = $route.routes;

        $scope.items = menuItems;
        $scope.activeItem = getActiveItem();

        $scope.go = function (path, event) {
            $location.path(routes[path] ? path : "/404");
            $scope.activeItem = getActiveItem();
            event.preventDefault();
        };

        function getActiveItem() {
            for (var i = 0; i < menuItems.length; i++) {
                if ($location.path() === menuItems[i].path) {
                    return menuItems[i];
                }
            }
            return {name: ""};
        }
    });
