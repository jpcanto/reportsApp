(function () {
    'use strict';

    angular
        .module('reportsApp')
        .service('apostilaService', apostilaService);

    apostilaService.$inject = ['$http'];

    function apostilaService($http) {

        var vm = this;
        vm.getApostila = getApostila;

        function getApostila() {
            $http.get('https://reportswebapp.firebaseio.com/dailyObject').then(function(response){
                debugger;
                return response.data;
            });
        };
}
})();