app.controller('pacienteFonoCtrl', function ($scope, $location, $routeParams, pacienteService) {
    //
    pacienteService.getPaciente($routeParams.id)
        .then(function (success) {
            $scope.paciente = success.data;
            var dados = angular.toJson(success.data);
            localStorage.setItem("dadosPaciente", dados);
        })
        .catch(function (error) {
            alert("Não foi possível listar os dados");
        })
    //
    pacienteService.getFono($routeParams.id)
        .then(function (success) {
            $scope.fono = success.data;
        })
        .catch(function (error) {
            alert("Não foi possível listar os dados");
        })
    //
    $scope.atualizarPaciente = function (paciente) {
        pacienteService.atualizarPaciente(paciente, $scope.paciente.id, $scope.fono.id)
            .then(function (success) {
                $scope.paciente = success.data;
                alert("Atualizado com sucesso!");
                $location.path('/dadosPacienteFono/'+ $scope.paciente.id);
            })
            .catch(function (error) {
                alert("Não foi possível atualizar os dados");
            })
    }
    //
    $scope.removerPaciente = function () {
        var resposta = confirm("Deseja remover sua conta?");
        if (resposta == true) {
            pacienteService.removerPaciente($scope.paciente.id)
                .then(function (success) {
                    $location.path('/pacientesFono');
                })
                .catch(function (error) {
                    alert("Não foi possível atualizar os dados");
                })
        }
    }
})