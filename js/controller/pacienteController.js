app.controller('pacienteCtrl', function($scope, $location, pacienteService) {
    //
    dados = localStorage.getItem("dados");
    $scope.paciente = angular.fromJson(dados);
    //
    pacienteService.getPaciente($scope.paciente.id)
    .then(function(success){
        $scope.fono = success.data;
        var dados = angular.toJson(success.data);
        localStorage.setItem("dados", dados);
    })
    .catch(function(error){
        alert("Não foi possível listar os dados");
    })
    //
})