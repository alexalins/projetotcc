app.service("pacienteService", ["$http", function($http){

    this.getPaciente = function(id){
        var req = {
            method: 'GET',
            url:'http://game-tcc.herokuapp.com/paciente/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }

}])