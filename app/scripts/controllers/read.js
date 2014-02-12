'use strict';

/**
 * @ngdoc function
 * @name homePageApp.controller:ReadCtrl
 * @description
 * # ReadCtrl
 * Controller of the homePageApp
 */
angular.module("controllers")
    .controller('ReadCtrl', function ($scope, douban$) {
        douban$.get().then(function (response) {
            $scope.readingBooks = response.data;
        }, function (response) {
            $scope.readingBooks = [];
        });
    });
