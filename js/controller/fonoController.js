app.controller('fonoCtrl', function ($scope, $location, fonoService) {
    //
    dados = localStorage.getItem("dados");
    $scope.fono = angular.fromJson(dados);
    //
    fonoService.getFono($scope.fono.id)
        .then(function (success) {
            $scope.fono = success.data;
            var dados = angular.toJson(success.data);
            localStorage.setItem("dados", dados);
        })
        .catch(function (error) {
            swal("Erro!", "Não foi possível listar os dados!", "error");
        })
    //
    $scope.atualizarFono = function (fono) {
        fonoService.atualizarFono(fono, $scope.fono.id)
            .then(function (success) {
                $scope.fono = success.data;
                var dados = angular.toJson(success.data);
                localStorage.setItem("dados", dados);
                $location.path('/dadosFono');
            })
            .catch(function (error) {
                swal("Erro!", "Não foi possível atualizar os dados!", "error");
            })

    }
    //
    $scope.removerFono = function () {
        swal({
            title: "Deseja remover sua conta?",
            icon: "warning",
            buttons: { 
                confirm: "Ok",
                cancel: "Cancelar" 
            },
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fonoService.removerFono($scope.fono.id)
                        .then(function (success) {
                            $scope.fono = success.data;
                            var dados = angular.toJson(success.data);
                            localStorage.setItem("dados", dados);
                            //
                            swal("Removida!", "Conta removida!", "success");
                            $location.path('/login');
                        })
                        .catch(function (error) {
                            swal("Erro!", "Não foi possível atualizar os dados!", "error");
                        })
                }
            });
    }
})