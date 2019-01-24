app.controller('jogoCtrl', function($scope, $routeParams, jogoService) {
    //
    jogoService.getJogos()
    .then(function(success){
        $scope.jogos = success.data;
        
    })
    .catch(function(error){
    })
    //
    jogoService.getJogo($routeParams.id)
    .then(function(success){
        $scope.jogo = success.data;
        console.log($scope.jogo);
    })
    .catch(function(error){
    })
    //
})