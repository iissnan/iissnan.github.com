'use strict';

/**
 * @ngdoc function
 * @name homePageApp.controller:LabCtrl
 * @description
 * # LabCtrl
 * Controller of the homePageApp
 */
angular.module("controllers")
  .controller('LabCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
