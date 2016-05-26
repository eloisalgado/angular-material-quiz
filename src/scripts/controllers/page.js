'use strict';

/**
 * @ngdoc function
 * @name TestApp.controller:PageCtrl
 * @description
 * # PageCtrl
 * Controller of the TestApp
 */
angular.module('TestApp')
  .controller('PageCtrl', function ($scope, $rootScope, $location, $mdToast) {

    $rootScope.pageId = 1;

    function init() {
      $location.path('/');
    }

    function checkPageForm(pageForm) {
      return pageForm.length === 0 || !pageForm.hasClass('ng-invalid');
    }

    init();

    $scope.movePage = function(pageIncrement, $event) {
      var pageForm = $('form');

      if($event && !checkPageForm(pageForm)) {
        $event.preventDefault();

        pageForm.find('input').trigger('blur');
        pageForm.find('.ng-invalid:first').focus();
        $mdToast.showSimple('Invalid form! Please check the fields.');
      }
      else {
        $rootScope.pageId += pageIncrement;
        $location.path('/page/' + $rootScope.pageId);
      }
    };
});
