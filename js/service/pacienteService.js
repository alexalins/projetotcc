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
    //
    this.atualizarPaciente = function(fono, id){
        var req = {
            method: 'PUT',
            url:'http://game-tcc.herokuapp.com/paciente/' + id,
            data: fono,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        return $http(req);
    }
    //
    this.removerPaciente = function(id){
        var req = {
            method: 'DELETE',
            url:'http://game-tcc.herokuapp.com/paciente/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        return $http(req);
    }
}])