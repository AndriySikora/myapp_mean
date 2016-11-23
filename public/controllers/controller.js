var parkingApp = angular.module('parkingApp', []);
parkingApp.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http) {
    console.log("Hello from Ctrl");

    car1 = {
      id:3467,
      make:"Volvo",
      owner:"Petro Schevcev",
      phone:"+38050934533",
      arriveDate: '2016-10-13',
      departureDate: '2016-10-14'
    }
    car2 = {
      id:6781,
      make:"VW",
      owner:"Sergiy Fedotov",
      phone:"+380504259388",
      arriveDate: '2016-10-16',
      departureDate: '2016-10-21'
    }
    car3 = {
      id:3359,
      make:"Mazda",
      owner:"Fedor Yuriiv",
      phone:"+380664259324",
      arriveDate: '2016-11-02',
      departureDate: '2016-11-04'
    }
    car4 = {
      id:8412,
      make:"Renault",
      owner:"Vasiliy Ivanov",
      phone:"+380974258373",
      arriveDate: '2016-11-05',
      departureDate: '2016-11-07'
    }
    car5 = {
      id:2349,
      make:"Lada",
      owner:"Andrii Slovian",
      phone:"+380994338374",
      arriveDate: '2016-11-06',
      departureDate: '2016-11-07'
    }

    var carList = [car1, car2, car3, car4, car5];

    $scope.carList = carList;
  }]);
