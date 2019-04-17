(function () {
    'use strict';

    angular
        .module("reportsApp", ['firebase', 'ngAnimate', 'ngRoute'])
        .config(function ($routeProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: "views/home.html"
                })

                .when('/relatorios', {
                    templateUrl: "views/relatorios.html"
                })

                .when('/academico', {
                    templateUrl: "views/academico.html"
                })

                .when('/documentacao', {
                    templateUrl: "views/documentacao.html"
                })

                .otherwise({ redirectTo: '/' });

        });

})();