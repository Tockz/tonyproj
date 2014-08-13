'use strict';

angular.module('tonyprojApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
