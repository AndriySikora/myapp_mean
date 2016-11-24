var parkingApp = angular.module('parkingApp', []);
parkingApp.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http) {

  var refresh = function() {
      $http.get('/api/cars').then(function successCallback(response) {
        console.log('I got data I requested');
        $scope.carList = response.data;
        $scope.car = "";
      }, function errorCallback(response) {
        console.log('GET request is failed');
      });
  };

  refresh();

    $scope.addCar = function() {
      console.log($scope.car);
      $http.post('/api/cars', $scope.car).then(function successCallback(response) {
        console.log(response);
        refresh();
      }, function errorCallback(response) {
        console.log('POST request is failed');
      });
    };

    $scope.removeCar = function(id) {
      console.log(id);
      $http.delete('/api/cars/' + id).then(function successCallback(response) {
        refresh();
      }, function errorCallback(response) {
        console.log('DELETE request is failed');
      });;
    };

    $scope.editCar = function(id) {
      console.log(id);
      $http.get('/api/cars/' + id).then(function successCallback(response) {
        $scope.car = response.data;
      }, function errorCallback(response) {
        console.log('GET request is failed');
      });
    };

    $scope.update = function() {
      $http.put('/api/cars/' + $scope.car._id, $scope.car).then(function successCallback(response) {
        refresh();
      }, function errorCallback(response) {
        console.log('PUT request is failed');
      });
    };

    $scope.deselect = function() {
      $scope.car = "";
    }
  }]);
