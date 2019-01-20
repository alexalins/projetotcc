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

    this.adicionarPalavra = function(palavra, idPaciente, idFono){
        var valorData = {
            "nivel" : palavra.nivel,
            "palavra" : palavra.palavra,
            "fono":{
                "id": idFono
            },
            "paciente":{
                "id": idPaciente
            }
        }

        var req = {
            method: 'POST',
            url:'http://game-tcc.herokuapp.com/palavra/',
            data: valorData,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }

}])