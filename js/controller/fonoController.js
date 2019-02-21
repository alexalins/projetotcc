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
            alert("Não foi possível listar os dados");
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
                alert("Não foi possível atualizar os dados");
            })

    }
    //
    $scope.removerFono = function () {
        var resposta = confirm("Deseja remover sua conta?");
        if (resposta == true) {
            fonoService.removerFono($scope.fono.id)
                .then(function (success) {
                    $scope.fono = success.data;
                    var dados = angular.toJson(success.data);
                    localStorage.setItem("dados", dados);
                    //
                    $location.path('/login');
                })
                .catch(function (error) {
                    alert("Não foi possível atualizar os dados");
                })
        }
    }


})