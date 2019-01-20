app.controller('palavraCtrl', function($scope, $routeParams, palavraService) {
    //
    palavraService.getPartidaPaciente($routeParams.id)
    .then(function(success){
    	$scope.palavras = success.data;
    	console.log($scope.palavras);
    })
    .catch(function(error){
    	alert("Não foi possível listar os dados");
    })
    //
    $scope.adicionarPalavras = function(palavra){
        palavraService.adicionarPalavras(palavra)
        .then(function(success){
            alert("Palavra(s) adicionada(s) com sucesso!");
        })
        .catch(function(error){
            alert("Não foi possível realizar o cadastro!");
        })
    }
})