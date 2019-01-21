app.controller('jogoCtrl', function($scope, $routeParams, jogoService) {
    //
    jogoService.getJogos()
    .then(function(success){
        $scope.jogos = success.data;
        
    })
    .catch(function(error){
        alert("Não foi possível listar os dados");
    })
    //
    jogoService.getJogo($routeParams.id)
    .then(function(success){
        $scope.jogo = success.data;
        console.log($scope.jogo);
    })
    .catch(function(error){
        alert("Não foi possível listar os dados");
    })
})