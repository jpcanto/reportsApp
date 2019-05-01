(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("relatoriosController", relatoriosController)

    relatoriosController.$inject = ['$firebaseArray'];

    function relatoriosController($firebaseArray) {

        var vm = this;


        var ref = firebase.database().ref("apostilaObject");
        vm.apostilaArray = $firebaseArray(ref);
        
        vm.teste = function(element) {
            console.log(element);
            vm.apostilaArray.$remove(element)
            .then(function(ref){
                console.log(element);
            },
            function(error){
                console.log(error);
            })
        };
        
    };

})();