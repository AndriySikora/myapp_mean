var parkingApp = angular.module('parkingApp', []);
parkingApp.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http) {
    console.log("Hello from Ctrl");
  }]);
