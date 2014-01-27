(function () {
    require.config({
        baseUrl: "../",
        paths: {
            "jquery": "bower_components/jquery/jquery",
            "angular": "bower_components/angular/angular",
            "angular.route": "bower_components/angular-route/angular-route",
            "modules": "scripts/modules",
            "controllers": "scripts/controllers",
            "directives": "scripts/directives",
            "services": "scripts/services",
            "filters": "scripts/filters",
        },
        shim: {
            "angular": {
                deps: ["jquery"],
                exports: "angular"
            },
            "angular.route": {
                deps: ["angular"]
            },
            "controllers": {
                deps: ["modules"]
            },
            "directives": {
                deps: ["modules"]
            },
            "services": {
                deps: ["modules"]
            },
            "filters": {
                deps: ["modules"]
            },
        }
    });

    require([
        "jquery",
        "angular",
        "angular.route",
        "modules",
        "controllers",
        "directives",
        "services",
        "filters"
    ], function($, angular) {
        var APP_NAME = "iissnan";

        angular.module(APP_NAME, [
            "ngRoute",
            "vi.controllers",
            "vi.directives",
            "vi.services",
            "vi.filters"
        ])
            .config(function ($routeProvider, $locationProvider) {
                $routeProvider
                    .when("/", {
                        controller: "ProfileController", 
                        templateUrl: "/views/profile.html"
                    })
                    .when("/social", {
                        controller: "SocialController", 
                        templateUrl: "/views/social.html"
                    })
                    .when("/lab", {
                        controller: "LabController", 
                        templateUrl: "/views/lab.html"
                    })
                    .when("/reading", {
                        controller: "ReadingController", 
                        templateUrl: "/views/read.html"
                    })
                    .when("/equip", {
                        controller: "EquipController", 
                        templateUrl: "/views/equip.html"
                    })
                    .otherwise({
                        redirecTo: "/"
                    });

                $locationProvider.hashPrefix("!");
            })
            .run(function () {
                $(".loading").hide();
            });
            ;

        // Bootstrap the application.
        $(document).ready(function () {
            angular.bootstrap(document, [APP_NAME]);
        });
    });

}());
