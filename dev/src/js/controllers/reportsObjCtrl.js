(function(){
    'use strict';

    
var app = angular.module("reportsApp", ['firebase']);
app.controller("reportsObjCtrl", function($scope, $firebaseArray, apostilaService){

     $scope.cadastraRelatorio = function() {
         var ref = firebase.database().ref("dailyObject");
         $firebaseArray(ref).$add($scope.daily).then(
             function(ref){
                 $scope.daily.sprint = "";
                 $scope.daily.apostila = "";
                 $scope.daily.feito = "";
                 $scope.daily.falta = "";
                 $scope.daily.impedimentos = "";
                 $scope.daily.situacao = "";
             },
             function(error){
                 console.log(error);
             }
         )
     };
     
     $scope.getApostila = function(){
        apostilaService.getApostila().then(
            function(){
                Response.data = apostilaArray;
            }
        )
     }

});

})();