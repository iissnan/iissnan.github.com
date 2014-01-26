"user strict";

angular.module("vi.controllers")
    .controller("MenuController", function ($scope, $location, $route) {
        var menuItems = {
            "profile": "/",
            "social": "social",
            "lab": "lab",
            "reading": "reading",
            "equip": "equip"
        };

        $scope.go = function (path, event) {
            if (menuItems[path]) {
                $location.path(menuItems[path]);
            } else{
                $location.path("/");
            }

            event.preventDefault();
        };
    })
    .controller("ProfileController", function ($scope) {
        return function () {};
    })
    .controller("SocialController", function () {})
    .controller("LabController", function () {})
    .controller("ReadingController", function () {})
    .controller("EquipController", function () {})
    ;
