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

        vm.activateY = function() {
            vm.activate = !vm.activate;
        };

    };

})();