app.controller('jogoCtrl', function($scope, $routeParams, jogoService) {
    //
    jogoService.getJogos()
    .then(function(success){
        $scope.jogos = success.data;
        
    })
    .catch(function(error){
        swal("Erro!", "Não foi possível listar os jogos!", "error");
    })
    //
    jogoService.getJogo($routeParams.id)
    .then(function(success){
        $scope.jogo = success.data;
        console.log($scope.jogo);
    })
    .catch(function(error){
        swal("Erro!", "Não foi possível listar o jogo!", "error");
    })
})