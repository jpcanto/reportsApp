(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("wellcomeControlle", wellcomeControlle)
        .component("wellcome", {
            templateUrl: 'src/components/wellcome/wellcome.component.html',
            controller: wellcomeControlle,
            controllerAs: 'vm'
        });

    function wellcomeControlle() {

        var vm = this;

        vm.activateY = function () {
            vm.activate = !vm.activate;
        };

        vm.showDocNav = function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        };

        vm.cadastraErro = function () {
            var ref = firebase.database().ref("apoErrors");
            $firebaseArray(ref).$add(vm.apostila).then(
                function (ref) {
                    vm.erro.apostila = "";
                    vm.erro.pagina = "";
                    vm.erro.localizacao = "";
                    vm.erro.descricao = "";
                    vm.erro.status = "";
                    vm.erro.academico = "";
                    vm.erro.situacao = "";
                    vm.erro.desenvolvedor = "";
                },
                function (error) {
                    console.log(error);
                }
            )
        };

    };

})();