app.controller('jogoCtrl', function($scope, jogoService) {
    //
    jogoService.getJogos()
    .then(function(success){
        $scope.jogo = success.data;
        console.log($scope.jogo);
    })
    .catch(function(error){
        alert("Não foi possível listar os dados");
    })
    //
})