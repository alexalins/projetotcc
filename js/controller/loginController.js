angular.module('starter.controllers', [])


app.controller('loginCtrl', function($scope,  appService) {
    $scope.login = {};
    $scope.loginFono = function(login){
        appService.loginFono(login, function(result){
            if(result.sucess){
                console.log(result.data);
                console.log("foi");
            }else if(result.err){
                console.log("erro");
            }
        })
    }
})