angular.module('starter.controllers', [])


app.controller('loginCtrl', function($scope,  appService) {
    $scope.login = {};
    $scope.loginFono = function(login){
        appService.loginFono(login)
        .then(function(success) {
            console.log("entrou");
        })
        .catch(function(error) {
            console.log("Não foi possível realizar o login.", error);
        })
    }
})