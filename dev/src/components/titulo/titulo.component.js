(function(){
    'use strict';
    
angular
    .module("reportsApp")
    .controller("tituloController", tituloController)
    .component("titulo", {
        templateUrl: 'src/components/titulo/titulo.component.html',
        controller: tituloController,
        controllerAs: 'vm',
        bindings: {
            data: '<'
        }
    });

    function tituloController(){

    var vm = this;

    vm.dataText = "Relatórios de Apostilas";

};

})();