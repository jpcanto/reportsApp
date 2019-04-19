(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("errosController", errosController)

    function errosController() {

        var vm = this;

        vm.errorFixed = function () {
            let getPath = document.getElementById('academico-verify');
            getPath.classList.toggle('fixed-error');
            getPath.classList.remove('error-to-fix');
        };

        vm.toFix = function () {
            let getPath = document.getElementById('academico-verify');
            getPath.classList.toggle('error-to-fix');
        };

    };

})();