(function(){
    'use strict';
    
angular
    .module("reportsApp")
    .controller("listagemApostilasController", listagemApostilasController)
    .component("listagemApostilas", {
        templateUrl: 'src/components/listagem-apostilas/listagem-apostilas.component.html',
        controller: listagemApostilasController,
        controllerAs: 'vm'
    });

    listagemApostilasController.$inject = ['$firebaseArray', 'apostilaService'];

    function listagemApostilasController($firebaseArray, apostilaService){

    var vm = this;
     
    vm.getApostila = function(){
        apostilaService.getApostila().then(
            function(response){
                vm.apostilaArray = response;
            }
        )
    }

};

})();