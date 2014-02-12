'use strict';

describe('Controller: DeviceCtrl', function () {

  // load the controller's module
  beforeEach(module('homePageApp'));

  var DeviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeviceCtrl = $controller('DeviceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
