(function () {
    'use strict';

    angular
        .module("reportsApp", ['firebase', 'ngAnimate', 'ngRoute'])
        .config(function ($routeProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: "views/home.html",
                    controller: "homeController",
                    controllerAs: 'vm'
                })

                .when('/relatorios', {
                    templateUrl: "views/relatorios.html"
                })

                .when('/erros', {
                    templateUrl: "views/academico-erros.html"
                })

                .when('/regras', {
                    templateUrl: "views/academico-regras.html"
                })

                .when('/treinamento', {
                    templateUrl: "views/treinamento.html"
                })

                .when('/tutorial', {
                    templateUrl: "views/tutorial.html"
                })

                .when('/videos', {
                    templateUrl: "views/videos.html",
                    controller: "videosController",
                    controllerAs: 'vm'
                })

                .otherwise({ redirectTo: '/' });

        });

})();