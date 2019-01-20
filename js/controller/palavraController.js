app.controller('palavraCtrl', function ($scope, $routeParams, palavraService) {
    localStorage.setItem("idPaciente", $routeParams.id);
    $scope.idPaciente = localStorage.getItem("idPaciente");
    $scope.fono = angular.fromJson(localStorage.getItem("dados"));
    //
    palavraService.getPartidaPaciente($routeParams.id)
        .then(function (success) {
            $scope.palavras = success.data;
        })
        .catch(function (error) {
        })
    //
    $scope.palavra = {}
    $scope.adicionarPalavras = function () {

        for (item in $scope.palavra.palavra) {
            var palavra = {
                "nivel": $scope.palavra.nivel,
                "palavra": $scope.palavra.palavra[item],
                "paciente": {
                    "id": $scope.idPaciente
                },
                "fono": {
                    "id": $scope.fono.id
                }
            }

            console.log(palavra);
            palavraService.adicionarPalavra(palavra)
                .then(function (success) {
                    alert("Palavra(s) adicionada(s) com sucesso!");
                })
                .catch(function (error) {
                    alert("Não foi possível realizar o cadastro!");
                })
        }
    }
    //
    var i = 1;
    $scope.exibirOpcao = function () {

        $("#opcao" + i).css("display", "block");
        i++;
    }
    //
})