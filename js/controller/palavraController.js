app.controller('palavraCtrl', function ($scope, $routeParams, $location, palavraService) {
    localStorage.setItem("idPaciente", $routeParams.id);
    $scope.idPaciente = localStorage.getItem("idPaciente");
    $scope.fono = angular.fromJson(localStorage.getItem("dados"));
    //
    palavraService.getPartidaPaciente($routeParams.id)
        .then(function (success) {
            $scope.palavras = success.data;
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
                    swal("Salvo!", "Cadastro feito com sucesso!", "success");
                    $location.path('/palavraPartida/' + $scope.idPaciente);
                })
                .catch(function (error) {
                    swal("Erro!", "Erro em cadastrar palavra!", "error");
                })
        }
    }
    //
    $scope.removerPalavra = function (id) {
        swal({
            title: "Deseja remover a palavra?",
            icon: "warning",
            buttons: {
                confirm: "Ok",
                cancel: "Cancelar"
            },
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    palavraService.removerPalavra(id)
                        .then(function (success) {
                            swal("Removida!", "Palavra removida!", "success");
                            location.reload();
                        })
                        .catch(function (error) {
                            swal("Erro!", "Não foi possível remover a palavra!", "error");
                        })
                }
            });
    }
    //
    var i = 1;
    $scope.exibirOpcao = function () {
        $("#opcao" + i).css("display", "block");
        i++;
    }
    //
})