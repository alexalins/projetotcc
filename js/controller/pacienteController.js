app.controller('pacienteCtrl', function ($scope, $location, pacienteService) {
    //
    dados = localStorage.getItem("dados");
    $scope.paciente = angular.fromJson(dados);
    //
    pacienteService.getPaciente($scope.paciente.id)
        .then(function (success) {
            $scope.paciente = success.data;
            var dados = angular.toJson(success.data);
            localStorage.setItem("dados", dados);
        })
        .catch(function (error) {
            swal("Erro!", "Não foi possível listar os dados!", "error");
            
        })

    pacienteService.getFono($scope.paciente.id)
        .then(function (success) {
            $scope.fono = success.data;
        })
        .catch(function (error) {
            swal("Erro!", "Não foi possível listar os dados!", "error");
        })
    //
    $scope.atualizarPaciente = function (paciente) {
        pacienteService.atualizarPaciente(paciente, $scope.paciente.id, $scope.fono.id)
            .then(function (success) {
                $scope.paciente = success.data;
                var dados = angular.toJson(success.data);
                localStorage.setItem("dados", dados);
                swal("Atualizado!", "Paciente atualizado com sucesso!", "success");
                $location.path('/dadosPaciente');
            })
            .catch(function (error) {
                swal("Erro!", "Não foi possível atualizar os dados!", "error");
            })
    }
    //
    $scope.removerPaciente = function () {
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
                    pacienteService.removerPaciente($scope.paciente.id)
                        .then(function (success) {
                            $scope.paciente = success.data;
                            var dados = angular.toJson(success.data);
                            localStorage.setItem("dados", dados);
                            //
                            swal("Removida!", "Conta removida!", "success");
                            $location.path('/login');
                        })
                        .catch(function (error) {
                            swal("Erro!", "Não foi possível remover  a conta!", "error");
                        })
                }
            });
    }
})