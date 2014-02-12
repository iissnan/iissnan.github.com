'use strict';

describe('Controller: ReadCtrl', function () {

  // load the controller's module
  beforeEach(module('homePageApp'));

  var ReadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReadCtrl = $controller('ReadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
