var parkingApp = angular.module('parkingApp', []);
parkingApp.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http) {
    console.log("Hello from Ctrl");

    $http.get('/api/cars').then(function successCallback(response) {
      console.log('I got data I requested');
      $scope.carList = response.data;
    }, function errorCallback(response) {
      console.log('GET request is failed');
    });

  }]);
