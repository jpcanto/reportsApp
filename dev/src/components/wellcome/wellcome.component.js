(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("wellcomeController", wellcomeController)
        .component("wellcome", {
            templateUrl: 'src/components/wellcome/wellcome.component.html',
            controller: wellcomeController,
            controllerAs: 'vm'
        });

    wellcomeController.$inject = ['$http', '$sce'];

    function wellcomeController($http, $sce) {

        var vm = this;

        vm.activateX = function () {
            vm.activateA = !vm.activateA;
            if (vm.activateB == true) {
                vm.activateB = !vm.activateB
            }
        };

        vm.activateY = function () {
            vm.activateB = !vm.activateB;
            if (vm.activateA == true) {
                vm.activateA = !vm.activateA;
            }
        };

        vm.showDocNav = function () {
            let elems = document.querySelectorAll('.sidenav');
            let instances = M.Sidenav.init(elems);
        };

        $http.get('src/data/videos.json')
            .then(function (response) {
                vm.objetoVideos = response.data;
                console.log(response.data);
            });

            vm.trustAsUrl = function(url){
                return $sce.trustAsResourceUrl(url)
               }

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