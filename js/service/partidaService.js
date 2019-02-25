app.service("partidaService", ["$http", function($http){

    this.getPartida = function(id){
        var req = {
            method: 'GET',
            url:'https://game-tcc.herokuapp.com/partida/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }

}])