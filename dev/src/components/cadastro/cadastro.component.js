(function(){
    'use strict';

    angular
        .module("reportsApp")
        .controller("cadastroController", cadastroController)
        .component("cadastro", {
            templateUrl: 'src/components/cadastro.component.html',
            controller: cadastroController,
            controllerAs: 'vm'
        });

    cadastroController.$inject = [];

    function cadastroController() {

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

    }


})();