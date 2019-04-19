(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("errosController", errosController)

    function errosController() {

        var vm = this;

        vm.errorFixed = function () {
            vm.fixedError = true;
        };

        vm.ToFix = function () {
            vm.errorToFix = true;
        };

    };

})();