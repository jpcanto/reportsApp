
var app = angular.module("reportsApp", []);
app.controller("reportsObjCtrl", function($scope, $http){

    $http.get('data/daily.json').then(function(response){
        $scope.daily = response.data;
    })

});
// function reportsObjCtrl($scope, $http) {
//     $http.get('data/daily.json').then(function(response){
//         $scope.result = response.data;
//     })
// }