app.controller('pacienteCtrl', function($scope, $location, pacienteService) {
    //
    dados = localStorage.getItem("dados");
    $scope.paciente = angular.fromJson(dados);
})