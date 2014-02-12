'use strict';

describe('Controller: LabCtrl', function () {

  // load the controller's module
  beforeEach(module('homePageApp'));

  var LabCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LabCtrl = $controller('LabCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
