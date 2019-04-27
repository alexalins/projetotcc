app.controller('pacienteFonoCtrl', function ($scope, $location, $routeParams, pacienteService) {
    //
    pacienteService.getPaciente($routeParams.id)
        .then(function (success) {
            $scope.paciente = success.data;
            var dados = angular.toJson(success.data);
            localStorage.setItem("dadosPaciente", dados);
        })
        .catch(function (error) {
            swal("Erro!", "Não foi possível listar os dados dos pacientes!", "error");
        })
    //
    pacienteService.getFono($routeParams.id)
        .then(function (success) {
            $scope.fono = success.data;
        })
        .catch(function (error) {
            swal("Erro!", "Não foi possível listar seus dados!", "error");
        })
    //
    $scope.atualizarPaciente = function (paciente) {
        pacienteService.atualizarPaciente(paciente, $scope.paciente.id, $scope.fono.id)
            .then(function (success) {
                $scope.paciente = success.data;
                swal("Atualizado!", "Paciente atualizado com sucesso!", "success");
                $location.path('/dadosPacienteFono/' + $scope.paciente.id);
            })
            .catch(function (error) {
                swal("Erro!", "Não foi possível atualizar os dados do paciente!", "error");
            })
    }
    //
    $scope.removerPaciente = function () {
        swal({
            title: "Deseja remover seu paciente?",
            icon: "warning",
            buttons: {
                confirm: "Ok",
                cancel: "Cancelar"
            },
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    pacienteService.removerPaciente($scope.paciente.id)
                        .then(function (success) {
                            swal("Removida!", "Conta removida!", "success");
                            $location.path('/pacientesFono');
                        })
                        .catch(function (error) {
                            swal("Erro!", "Não foi possível atualizar os dados!", "error");
                        })
                }
            });
    }
})