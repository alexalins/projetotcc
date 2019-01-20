app.service("palavraService", ["$http", function($http){

    this.getPartidaPaciente = function(id){
        var req = {
            method: 'GET',
            url:'http://game-tcc.herokuapp.com/palavra/paciente/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }

    this.adicionarPalavra = function(palavra){

        var req = {
            method: 'POST',
            url:'http://game-tcc.herokuapp.com/palavra/',
            data: palavra,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }

}])