'use strict';

/**
 * @ngdoc function
 * @name homePageApp.controller:DeviceCtrl
 * @description
 * # DeviceCtrl
 * Controller of the homePageApp
 */
angular.module("controllers")
  .controller('DeviceCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
