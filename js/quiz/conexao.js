function request() {
    var obj = JSON.parse(dados);
    var id = obj.id;
    //
    axios.get('https://game-tcc.herokuapp.com/palavra/paciente/' + id)
        .then(function (response) {
            var nivel = localStorage.getItem("nivel");
            var req = response.data;
            //pega as palavras no nivel facil
            for (let i = 0; i < req.length; i++) {
                if (req[i].nivel == nivel) {
                    palavras.push(req[i].palavra.toLowerCase());
                }
            }
            //
            var jsonPalavras = JSON.stringify(palavras);
            localStorage.setItem("palavras", jsonPalavras);
            game.state.start(nivel);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

function postPartida() {
    var relatorio = JSON.parse(localStorage.getItem("relatorio"));
    var nivel = localStorage.getItem("nivel");
    var dados = JSON.parse(localStorage.getItem("dados"));
    var tempo = localStorage.getItem("tempo");
    //
    axios.post("https://game-tcc.herokuapp.com/partida", {
        "jogo": {
            "id": 1
        },
        "paciente": {
            "id": dados.id
        },
        "relatorio": {
            "id": relatorio.id
        },
        "nivel": nivel,
        "tempo": tempo + " min"
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function postRelatorio() {
    var xhr = new XMLHttpRequest();
    var url = "https://game-tcc.herokuapp.com/relatorio";
    var data = JSON.stringify({});
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //
    xhr.onload = function () {
        if (xhr.status === 200) {
            localStorage.setItem("relatorio", xhr.responseText);
        } else {
            console.log("ERRO NO RELATORIO!");
        }
    };
    xhr.send(data);
}

function postErros(erro) {
    var relatorio = JSON.parse(localStorage.getItem("relatorio"));
    var xhr = new XMLHttpRequest();
    var url = "https://game-tcc.herokuapp.com/erro/";
    var data = JSON.stringify({
        "relatorio": {
            "id": relatorio.id
        },
        "palavra": erro
    });
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //
    xhr.onload = function () {
        if (xhr.status === 200) {
        } else {
            console.log("ERRO NO RELATORIO!");
        }
    };
    xhr.send(data);
}

function postAcertos(acerto) {
    var relatorio = JSON.parse(localStorage.getItem("relatorio"));
    var xhr = new XMLHttpRequest();
    var url = "https://game-tcc.herokuapp.com/acerto/";
    var data = JSON.stringify({
        "relatorio": {
            "id": relatorio.id
        },
        "palavra": acerto
    });
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //
    xhr.onload = function () {
        if (xhr.status === 200) {
        } else {
            console.log("ERRO NO RELATORIO!");
        }
    };
    xhr.send(data);
}