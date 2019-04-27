(function(){
    'use strict';
    
angular
    .module("reportsApp")
    .controller("tabelasController", tabelasController)
    .component("tabelas", {
        templateUrl: 'src/components/tabelas/tabelas.component.html',
        controller: tabelasController,
        controllerAs: 'vm',
    });

    tabelasController.$inject = ['$firebaseArray'];

    function tabelasController($firebaseArray){

    var vm = this;

    var ref = firebase.database().ref("apostilaObject");
    vm.apostilaArray = $firebaseArray(ref);
    // console.log("uhul, a chamada do banco funfou galerê !!");

};

})();