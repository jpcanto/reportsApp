var app;(app=angular.module("reportsApp",[])).controller("reportsObjCtrl",function(a,t){t.get("data/daily.json").then(function(t){a.daily=t.data}),a.cadastraRelatorio=function(t){a.daily.push(angular.copy(t))}}),(app=angular.module("reportsApp",[])).controller("reportsObjCtrl",function(a,t){t.get("data/daily.json").then(function(t){a.daily=t.data}),a.cadastraRelatorio=function(t){a.daily.push(angular.copy(t))}}),(app=angular.module("reportsApp",[])).controller("reportsObjCtrl",function(a,t){t.get("data/daily.json").then(function(t){a.daily=t.data}),a.cadastraRelatorio=function(t){a.daily.push(angular.copy(t))}});
var app=angular.module("reportsApp",[]);app.controller("reportsObjCtrl",function(a,t){t.get("data/daily.json").then(function(t){a.daily=t.data}),a.cadastraRelatorio=function(t){a.daily.push(angular.copy(t))}});

var app = angular.module("reportsApp", []);
app.controller("reportsObjCtrl", function($scope, $http){

    $http.get('data/daily.json').then(function(response){
        $scope.daily = response.data;
    });

    $scope.cadastraRelatorio = function(daily) {
        $scope.daily.push(angular.copy(daily));
    };

});

var app = angular.module("reportsApp", []);
app.controller("reportsObjCtrl", function($scope, $http){

    $http.get('data/daily.json').then(function(response){
        $scope.daily = response.data;
    });

    $scope.cadastraRelatorio = function(daily) {
        debugger;
        $scope.daily.push(angular.copy(daily));
    };

});

var app = angular.module("reportsApp", []);
app.controller("reportsObjCtrl", function($scope, $http){

    $http.get('data/daily.json').then(function(response){
        $scope.dailyArray = response.data;
    });

    $scope.cadastraRelatorio = function(daily) {
        debugger;
        $scope.dailyArray.push(angular.copy(daily));
    };

});