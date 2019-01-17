app.service("loginService", ["$http", function($http){

    this.loginFono = function(login){
        var valorData = {
            "login" : login.login,
            "senha" : login.senha
        }
        var req = {
            method: 'POST',
            url:'http://game-tcc.herokuapp.com/'+login.usuario+'/login',
            data: valorData,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    
        return $http(req);
    }
}])