(function () {
    'use strict';

    angular
        .module("reportsApp")
        .controller("videosController", videosController)

    videosController.$inject = ['$http', '$sce'];

    function videosController($http, $sce) {

        var vm = this;

        $http.get('src/data/videos.json')
            .then(function (response) {
                vm.objetoVideos = response.data;
                console.log(response.data);
            });

            vm.trustAsUrl = function(url){
                return $sce.trustAsResourceUrl(url)
               }

    };

})();