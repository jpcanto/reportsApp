(function(){
    'use strict';

    angular
        .module("reportsApp")
        .controller("cadastroController", cadastroController)
        .component("cadastro", {
            templateUrl: 'src/components/cadastro/cadastro.component.html',
            controller: cadastroController,
            controllerAs: 'vm'
        });

    cadastroController.$inject = ['$firebaseArray'];

    function cadastroController($firebaseArray) {

        var vm = this;

        vm.cadastraRelatorio = function() {
            var ref = firebase.database().ref("apostilaObject");
            $firebaseArray(ref).$add(vm.apostila).then(
                function(ref){
                    vm.apostila.sprint = "";
                    vm.apostila.apostila = "";
                    vm.apostila.feito = "";
                    vm.apostila.falta = "";
                    vm.apostila.impedimentos = "";
                    vm.apostila.situacao = "";
                },
                function(error){
                    console.log(error);
                }
            )
        };

        vm.activateX = function() {
            vm.activate;
            if(vm.activate == true) {
                vm.activate = false;
            } else {
                vm.activate = true;
            }
            console.log(vm.activate);
        };

    }


})();