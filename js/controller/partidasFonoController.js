app.controller('partidasFonoCtrl', function ($scope, $location, $routeParams, fonoService, pacienteService) {

    pacienteService.getPaciente($routeParams.id)
        .then(function (success) {
            $scope.paciente = success.data;
            console.log($scope.paciente);
        })
        .catch(function (error) {
            alert("Não foi possível listar os dados");
        })

})