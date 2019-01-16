app.controller('fonoCtrl', function($scope, appService) {
    //
    $scope.fono = {};
    $scope.cadastroFono = function(fono){
        appService.cadastroFono(fono)
        .then(function (success){
            console.log("cadastrou");
        })
        .catch(function(error){
            alert("Não foi possível realizar o cadastro");
        })
    }
})