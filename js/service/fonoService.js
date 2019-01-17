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

}])