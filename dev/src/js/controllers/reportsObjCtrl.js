
var app = angular.module("reportsApp", []);
app.controller("reportsObjCtrl", function($scope, $http){

    $http.get('data/daily.json').then(function(response){
        $scope.daily = response.data;
    });

    $scope.cadastraRelatorio = function(daily) {
        $scope.daily.push(angular.copy(daily));
    };

});