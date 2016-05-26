'use strict';

/**
 * @ngdoc function
 * @name TestApp.controller:Page1Ctrl
 * @description
 * # Page1Ctrl
 * Controller of the TestApp
 */
angular.module('TestApp')
  .controller('Page1Ctrl', function ($rootScope) {
    $rootScope.pageId = 1;
    $rootScope.disableInputs = false;
});
