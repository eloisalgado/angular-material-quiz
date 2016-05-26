'use strict';

/**
 * @ngdoc overview
 * @name TestApp
 * @description
 * # TestApp
 *
 * Main module of the application.
 */
angular
  .module('TestApp', [
    'ngRoute',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdIconProvider) {
    
    $mdIconProvider.fontSet('md', 'material-icons');

    $routeProvider
    .when('/page/1', {
      templateUrl: 'views/page-1.html',
      controller: 'Page1Ctrl'
    })
    .when('/page/2', {
      templateUrl: 'views/page-2.html',
      controller: 'Page2Ctrl'
    })
    .when('/page/3', {
      templateUrl: 'views/page-3.html',
      controller: 'Page3Ctrl'
    })
    .when('/page/4', {
      templateUrl: 'views/page-4.html',
      controller: 'Page4Ctrl'
    })
    .when('/', {
      templateUrl: 'views/page-1.html',
      controller: 'Page1Ctrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}).run(function($rootScope) {
  $rootScope.formData = {};
  $rootScope.formData2 = {};
});
