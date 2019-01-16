app.service("appService", ["$http", function($http){

    this.loginFono = function(login){
        var valorData = {
            "login" : login.login,
            "senha" : login.senha
        }
        var req = {
            method: 'POST',
            url:'http://game-tcc.herokuapp.com/fono/login',
            data: valorData,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    
        return $http(req);
    }

    this.cadastroFono = function(fono){
        var valorData = {
            "nome" : fono.nome,
            "codigo" : fono.codigo,
            "telefone" : fono.telefone,
            "login": fono.login,
            "senha": fono.senha,
            "endereco":{
                "rua": fono.endereco.rua,
                "bairro": fono.endereco.bairro,
                "cidade": fono.endereco.cidade
            }
        }

        var req = {
            method: 'POST',
            url:'http://game-tcc.herokuapp.com/fono',
            data: valorData,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    
        return $http(req);
    }

}])