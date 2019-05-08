(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("falcoesController", falcoesController)

    function falcoesController() {

        var vm = this;

        let success = function (successMsg) {
            asyncOutput(successMsg);
        };

        let error = function (errorMsg) {
            asyncOutput(errorMsg);
        };

        var trello = Trello.get('/boards/555c8e81e8d5aff570505f5b/lists', success, error);
        console.log(trello);
    };

})();