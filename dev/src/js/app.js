(function () {
    'use strict';

    angular
        .module("reportsApp", ['firebase', 'ngAnimate', 'ngRoute'])
        .config(function ($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: "views/home.html"
                })

                .when('/relatorios', {
                    templateUrl: "views/relatorios.html"
                })

                .otherwise({ redirectTo: '/' });

        });

})();