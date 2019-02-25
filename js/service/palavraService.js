app.service("palavraService", ["$http", function($http){

    this.getPartidaPaciente = function(id){
        var req = {
            method: 'GET',
            url:'https://game-tcc.herokuapp.com/palavra/paciente/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }

    this.adicionarPalavra = function(palavra){

        var req = {
            method: 'POST',
            url:'https://game-tcc.herokuapp.com/palavra/',
            data: palavra,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }
    //
    this.removerPalavra = function(id){

        var req = {
            method: 'DELETE',
            url:'https://game-tcc.herokuapp.com/palavra/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }

}])