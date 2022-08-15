var app = angular.module('myApp', []);
app.controller('locationCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});

app.controller('httpCtrl', function ($scope, $http) {
    $http.get("welcome.htm").then(function (response) {
        $scope.myWelcome = response.data;
    });
});

app.controller('timeoutCtrl', function($scope, $timeout) {
    $scope.myHeader = "Hello World!";

    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);
});

app.controller('intervalCtrl', function($scope, $interval) {
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
});

app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

app.controller('hexafyCtrl', function($scope, hexafy) {
    $scope.hexNumber = 252;
    $scope.hex = hexafy.myFunc($scope.hexNumber);
});

app.filter('myFormat',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);

app.controller('countsCtrl', function($scope) {
    $scope.counts = [255, 251, 200];
});