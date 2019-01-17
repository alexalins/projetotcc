app.service("cadastroService", ["$http", function($http){
    this.cadastroFono = function(fono){
        var valorData = {
            "nome" : fono.nome,
            "codigo" : fono.codigo,
            "telefone" : fono.telefone,
            "login": fono.login,
            "senha": fono.senha,
            "endereco":{
                "rua": fono.endereco.rua,
                "bairro": fono.endereco.bairro,
                "cidade": fono.endereco.cidade
            }
        }

        var req = {
            method: 'POST',
            url:'http://game-tcc.herokuapp.com/fono',
            data: valorData,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }

    this.cadastroPaciente = function(paciente, id){
        var valorData = {
            "nome" : paciente.nome,
            "nomeResponsavel" : paciente.nomeResponsavel,
            "telefone" : paciente.telefone,
            "idade": paciente.idade,
            "login": paciente.login,
            "senha": paciente.senha,
            "endereco":{
                "rua": paciente.endereco.rua,
                "bairro": paciente.endereco.bairro,
                "cidade": paciente.endereco.cidade
            },
            "fono" : {
                "id" : id
            }
        }

        console.log(valorData);

        var req = {
            method: 'POST',
            url:'http://game-tcc.herokuapp.com/paciente',
            data: valorData,
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        return $http(req);
    }
}])