"use strict";


angular.module("vi.services")
    .factory("douban$", function ($http) {
        var doubanApi = "http://api.douban.com/people/iissnan/collection";
        var params = {
            callback: "JSON_CALLBACK", // REQUIRED for AngularJS JSONP call

            alt: "xd",
            cat: "book",
            status: "reading",
            "max-result": 10
        };

        function get() {
            $http({method: "jsonp", url: doubanApi, params: params})
                .success(function (response, status) {
                    var data = [];
                    if (response && response.entry) {
                        for (var i = 0; i < response.entry.length; i ++) {
                            var entry = response.entry[i]["db:subject"];
                            data.push({
                                href: entry["link"][1]["@href"],
                                title: entry.title["$t"]
                            });
                        }
                    }

                    return {
                        status: 0,
                        data: data
                    };
                })

                .error(function (data, status) {
                    return {
                        status: 1,
                        data: data
                    };
                });
        }
        
        return {
            get: get
        };
    });
