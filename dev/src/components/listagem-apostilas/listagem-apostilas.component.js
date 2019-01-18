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

    listagemApostilasController.$inject = ['$firebaseArray'];

    function listagemApostilasController($firebaseArray){

    var vm = this;

    var ref = firebase.database().ref("apostilaObject");
    vm.apostilaArray = $firebaseArray(ref);
    console.log("uhul, a chamada do banco funfou galerê !!");

};

})();