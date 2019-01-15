
var app = angular.module("reportsApp", []);
app.controller("reportsObjCtrl", function($scope){

    $scope.cadastraRelatorio = function(daily) {
        $scope.dailyArray.push(angular.copy(daily));
    };

    getDailyJson();

});