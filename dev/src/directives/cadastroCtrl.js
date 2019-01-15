angular.module("reportsApp").directive("register", function(){
    return {
        templateUrl: "cadastro.html",
        replace: true,
        restrict: "AE"
    };
});