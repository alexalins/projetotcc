app.service("fonoService", ["$http", function($http){

    this.getFono = function(id){
        var req = {
            method: 'GET',
            url:'http://game-tcc.herokuapp.com/fono/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        return $http(req);
    }
    //
    this.atualizarFono = function(fono, id){
        var req = {
            method: 'PUT',
            url:'http://game-tcc.herokuapp.com/fono/' + id,
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
            url:'http://game-tcc.herokuapp.com/fono/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        return $http(req);
    }

}])