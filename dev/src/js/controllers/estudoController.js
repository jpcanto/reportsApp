(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("estudoController", estudoController)

    function estudoController() {

        var vm = this;

        vm.indiceMsg = 'Abrir Índice';
        vm.arrow = 'arrow_forward';

        vm.ativaMenuEstudos = () => {
            vm.activateMenu = !vm.activateMenu;
            if(vm.activateMenu == true) {
                vm.indiceMsg = 'Fechar Índice';
                vm.arrow = 'arrow_back';
            } else {
                vm.indiceMsg = 'Abrir Índice';
                vm.arrow = 'arrow_forward';
            }
        };

    };


})();