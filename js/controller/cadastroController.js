app.controller('cadastroCtrl', function ($scope, $location, cadastroService) {
    //
    dados = localStorage.getItem("dados");
    $scope.fono = angular.fromJson(dados);
    //
    $scope.cadastroFono = function (fono) {
        cadastroService.cadastroFono(fono)
            .then(function (success) {
                alert("Cadatros realizado com sucesso!");
                $location.path('/login');
            })
            .catch(function (error) {
                alert("Não foi possível realizar o cadastro");
            })
    }
    //
    $scope.cadastroPaciente = function(paciente, id){
        cadastroService .cadastroPaciente(paciente, $scope.fono.id)
        .then(function (success){
            alert("Cadatros realizado com sucesso!");
            $location.path('/pacientesFono');
        })
        .catch(function(error){
            alert("Não foi possível realizar o cadastro");
        })
    }
})