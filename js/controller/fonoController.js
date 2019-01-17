app.controller('fonoCtrl', function($scope, $location, fonoService) {
    //
    dados = localStorage.getItem("dados");
    $scope.fono = angular.fromJson(dados);
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
    
})