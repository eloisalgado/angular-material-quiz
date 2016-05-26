'use strict';

/**
 * @ngdoc function
 * @name TestApp.controller:Page2Ctrl
 * @description
 * # Page2Ctrl
 * Controller of the TestApp
 */
angular.module('TestApp')
  .controller('Page2Ctrl', function ($rootScope, $scope, ModelService) {

    $rootScope.pageId = 2;

    $scope.options = [];

    function init() {
      ModelService.get('data/options.json')
      .then(
        function (response) {
          if(typeof response.data !== 'undefined') {
            $scope.options = response.data.options;
          }
        },
        function (response) {
          console.log(response);
        }
      );
    }

    init();

    $scope.selectOption = function(option) {
      $rootScope.foodType = option;
    };

});
