(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("estudoController", estudoController)

    function estudoController() {

        var vm = this;

        vm.ativaMenuEstudos = () => {
            vm.activateMenu = !vm.activateMenu;
            console.log(vm.activateMenu);
        };

    };


})();