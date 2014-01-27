"user strict";

angular.module("vi.controllers")
    .controller("MenuController", function ($scope, $location, $route) {
        var menuItems = [
            {name: "profile", path: "/"},
            {name: "social",  path: "/social"},
            {name: "lab",     path: "/lab"},
            {name: "read",    path: "/read"},
            {name: "equip",   path: "/equip"}
        ];
        var routes = $route.routes;

        $scope.items = menuItems;
        $scope.go = function (path, event) {
            $location.path(routes[path] ? path : "/404");
            event.preventDefault();
        };
    })

    .controller("ProfileController", function ($scope) {
        return function () {};
    })
    .controller("SocialController", function () {})
    .controller("LabController", function () {})
    .controller("ReadController", function () {})
    .controller("EquipController", function () {})
    ;
