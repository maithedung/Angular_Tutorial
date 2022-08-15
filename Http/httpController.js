var app = angular.module('myApp', []);
app.controller('httpCtrl', function($scope, $http) {
    $scope.test = 1;
    $http.get("https://www.w3schools.com/angular/customers.php")
        .then(function(response) {
            $scope.myData = response.data.records;
            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statusText;
        });
});