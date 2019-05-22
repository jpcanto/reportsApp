(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("tutorialController", tutorialController)

    function tutorialController() {

        var vm = this;
        
        vm.showContent = function () {
            let getPath = document.getElementById('tutorial-menu');
            getPath.classList.toggle('active');
            let getPath2 = document.getElementById('manual');
            getPath2.classList.toggle('active');
        };

        vm.showContentScrum = function () {
            let getPath = document.getElementById('conteudo-scrum');
            getPath.classList.toggle('active');
        };
        vm.showContentDaki = function () {
            let getPath = document.getElementById('conteudo-daki');
            getPath.classList.toggle('active');
        };
        vm.showContentSquad = function () {
            let getPath = document.getElementById('conteudo-squad');
            getPath.classList.toggle('active');
        };

    };

})();