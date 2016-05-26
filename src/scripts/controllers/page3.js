'use strict';

/**
 * @ngdoc function
 * @name TestApp.controller:Page3Ctrl
 * @description
 * # Page3Ctrl
 * Controller of the TestApp
 */
angular.module('TestApp')
  .controller('Page3Ctrl', function ($rootScope) {

    $rootScope.pageId = 3;
    $rootScope.disableInputs = true;
});
