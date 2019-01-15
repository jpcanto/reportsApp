function getDailyJson($http) {
    $http.get('data/daily.json').then(function(response){
        $scope.dailyArray = response.data;
    });
};