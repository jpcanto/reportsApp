(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("falcoesController", falcoesController)

    function falcoesController() {

        var vm = this;

        // import {Trello} from 'trello-api';

        // let trello = new Trello('774800cd537e508a765dab9dada0e066', '89a36b53c6548083009b3f8d580c0aee187bd8e04d76f72e28af5c2b8b4bb0e0');

        // trello.getTokens('MY MEMBER ID')
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
    };


})();