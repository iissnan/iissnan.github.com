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
    })

    .controller("ProfileController", function ($scope) {
        return function () {};
    })
    .controller("SocialController", function () {})
    .controller("LabController", function () {})
    .controller("ReadController", function ($scope, douban$) {
        douban$.get().then(function (response){
            $scope.readingBooks = response.data;
        }, function (response) {
            $scope.readingBooks = [];
        });
    })
    .controller("EquipController", function () {})
    ;
