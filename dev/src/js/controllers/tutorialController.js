(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("tutorialController", tutorialController)

    function tutorialController() {

        var vm = this;
        
        vm.showContent = function () {
            let getPath = document.getElementById('manual');
            getPath.classList.toggle('active');
        };

    };

})();