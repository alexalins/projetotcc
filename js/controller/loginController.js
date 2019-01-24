app.controller('loginCtrl', function($scope, $location, loginService) {
    localStorage.clear();
    $scope.login = {};
    $scope.login = function(login){
        loginService.loginFono(login)
        .then(function(success) {
            if(login.usuario == "fono"){
                var dados = angular.toJson(success.data);
                localStorage.setItem("dados", dados);
                $location.path('/inicioFono');
            }else if(login.usuario == "paciente"){
                var dados = angular.toJson(success.data);
                localStorage.setItem("dados", dados);
                $location.path('/inicioPaciente');
            }
        })
        .catch(function(error) {
            alert("Não foi possível realizar o login.");
        })
    }
})