
var app = angular.module("reportsApp", []);
app.controller("reportsObjCtrl", function($scope, $http){

    $http.get('data/daily.json').then(function(response){
        $scope.dailyArray = response.data;
    });

    $scope.cadastraRelatorio = function(daily) {
        $scope.dailyArray.push(angular.copy(daily));
    };

});