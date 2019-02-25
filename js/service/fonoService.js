app.service("fonoService", ["$http", function($http){

    this.getFono = function(id){
        var req = {
            method: 'GET',
            url:'https://game-tcc.herokuapp.com/fono/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        return $http(req);
    }
    //
    this.atualizarFono = function(fono, id){
        var valorData = {
            "id" : id,
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
            method: 'PUT',
            url:'https://game-tcc.herokuapp.com/fono/',
            data: fono,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        return $http(req);
    }
    //
    this.removerFono = function(id){
        var req = {
            method: 'DELETE',
            url:'https://game-tcc.herokuapp.com/fono/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        return $http(req);
    }

}])