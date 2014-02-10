

mainModule.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                controller: "ProfileController",
                templateUrl: "/views/profile.html"
            })
            .when("/lab", {
                controller: "LabController",
                templateUrl: "/views/lab.html"
            })
            .when("/read", {
                controller: "ReadController",
                templateUrl: "/views/read.html"
            })
            .when("/equip", {
                controller: "EquipController",
                templateUrl: "/views/equip.html"
            })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.hashPrefix("!");
    })
    .run(function () {
        $(".loading").hide();
    });

// Bootstrap the application.
$(document).ready(function () {
    angular.bootstrap(document, [APP_NAME]);
});
