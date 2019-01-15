angular.module("reportsApp").directive("cadastro", function(){
    return {
        templateUrl: "src/directives/cadastro.html",
        replace: true,
        restrict: "AE"
    };
});