"user strict";

angular.module("vi.controllers")
    .controller("MenuController", function ($scope, $location, $route) {
        var menuItems = [
            {name: "profile", path: "/",       icon: "person"},
            {name: "social",  path: "/social", icon: "earth"},
            {name: "lab",     path: "/lab",    icon: "beaker"},
            {name: "read",    path: "/read",   icon: "bookmark"},
            {name: "equip",   path: "/equip",  icon: "monitor"}
        ];
        var routes = $route.routes;

        $scope.items = menuItems;
        $scope.go = function (path, event) {
            $location.path(routes[path] ? path : "/404");
            $(".menu-item").removeClass("active");
            $(event.target).parent().addClass("active");
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
