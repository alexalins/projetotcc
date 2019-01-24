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
    this.getFono = function(id){
        var req = {
            method: 'GET',
            url:'http://game-tcc.herokuapp.com/fono/paciente/' + id,
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        return $http(req);
    }
    //
    this.atualizarPaciente = function(paciente, id, fonoId){
        var valorData = {
            "id" : id,
            "nome" : paciente.nome,
            "nomeResponsavel" : paciente.nomeResponsavel,
            "telefone" : paciente.telefone,
            "idade": paciente.idade,
            "login": paciente.login,
            "senha": paciente.senha,
            "endereco":{
                "id": paciente.endereco.id,
                "rua": paciente.endereco.rua,
                "bairro": paciente.endereco.bairro,
                "cidade": paciente.endereco.cidade
            },
            "fono":{
                "id": fonoId
            }
        }
        console.log(fonoId);
        //
        var req = {
            method: 'PUT',
            url:'http://game-tcc.herokuapp.com/paciente/',
            data: valorData,
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