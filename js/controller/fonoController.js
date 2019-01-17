app.controller('fonoCtrl', function($scope, $location, fonoService) {
    //
    dados = localStorage.getItem("dados");
    $scope.fono = angular.fromJson(dados);
    //
    $scope.cadastroFono = function(fono){
        fonoService.cadastroFono(fono)
        .then(function (success){
            alert("Cadatros realizado com sucesso!");
            $location.path('/login');
        })
        .catch(function(error){
            alert("Não foi possível realizar o cadastro");
        })
    }
    //
    fonoService.getFono($scope.fono.id)
    .then(function(success){
        $scope.fono = success.data;
        var dados = angular.toJson(success.data);
        localStorage.setItem("dados", dados);
    })
    .catch(function(error){
        alert("Não foi possível listar os dados");
    })
    //
    $scope.cadastroPaciente = function(paciente, id){
        fonoService.cadastroPaciente(paciente, $scope.fono.id)
        .then(function (success){
            alert("Cadatros realizado com sucesso!");
            $location.path('/pacientesFono');
        })
        .catch(function(error){
            alert("Não foi possível realizar o cadastro");
        })
    }
})