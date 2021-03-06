app.controller('cadastroCtrl', function ($scope, $location, cadastroService) {
    //
    dados = localStorage.getItem("dados");
    $scope.fono = angular.fromJson(dados);
    //
    $scope.cadastroFono = function (fono) {
        cadastroService.cadastroFono(fono)
            .then(function (success) {
                swal("Salvo!", "Cadastro feito com sucesso!", "success");
                $location.path('/inicioFono');
            })
            .catch(function (error) {
                swal("Erro!", "Não foi possível cadastrar o fonoaudiólogo!", "error");
            })
    }
    //
    $scope.cadastroPaciente = function(paciente, id){
        cadastroService .cadastroPaciente(paciente, $scope.fono.id)
        .then(function (success){
            swal("Salvo!", "Cadastro feito com sucesso!", "success");
            $location.path('/pacientesFono');
        })
        .catch(function(error){
            swal("Erro!", "Não foi possível cadastrar o paciente!", "error");
        })
    }
})