'use strict';

/**
 * @ngdoc service
 * @name TestApp.ModelService
 * @description
 * # ModelServic
 * Service in the TestApp.
 */
angular.module('TestApp')
  .service('ModelService', function ($q, $http) {

  this.get = function(url) {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: url
    })
    .then(
      function(response) {
        deferred.resolve(response);
      },
      function(response) {
        deferred.reject(response);
      }
    );

    return deferred.promise;
  };

});
