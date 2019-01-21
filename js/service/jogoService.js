app.service("jogoService", ["$http", function($http){

    this.getJogos = function(){
        var req = {
            method: 'GET',
            url:'http://game-tcc.herokuapp.com/jogo',
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }

    this.getJogo = function(id){
        var req = {
            method: 'GET',
            url:'http://game-tcc.herokuapp.com/jogo/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }

}])