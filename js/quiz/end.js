var endState = {
    create: function () {
        postRelatorio();
        var pontos = localStorage.getItem("pontos");
        var tempo = localStorage.getItem("tempo");
        //
        var txtPontos = game.add.text(game.world.centerX, 200, 'SEUS PONTOS: ' + pontos, { font: '18px emulogic', fill: '#fff' });
        txtPontos.anchor.set(.5);
        var txtTempo = game.add.text(game.world.centerX, 300, 'SEU TEMPO: ' + tempo + 's', { font: '18px emulogic', fill: '#fff' });
        txtTempo.anchor.set(.5);
        //
        var botao = game.add.button(game.world.centerX - 95, 400, 'botao', clickBotao, this, 2, 1, 0);
        var txtBotao= game.add.text(game.world.centerX, 440, 'INICIO', { font: '18px emulogic', fill: '#00000' });
        txtBotao.anchor.set(.7);
    }
};

function clickBotao(){
    //
    var erradas = JSON.parse(localStorage.getItem("erradas"));
    for (let i = 0; i < erradas.length; i++) {
        postErros(erradas[i]);
    }
    //
    var corretas = JSON.parse(localStorage.getItem("corretas"));
    for (let i = 0; i < corretas.length; i++) {
        postAcertos(corretas[i]);
    }
    postPartida();

}

function postPartida(){
    var relatorio = JSON.parse(localStorage.getItem("relatorio"));
    var nivel = localStorage.getItem("nivel");
    var dados = JSON.parse(localStorage.getItem("dados"));
    var tempo = localStorage.getItem("tempo");
    //
    var xhr = new XMLHttpRequest();
    var url = "https://game-tcc.herokuapp.com/partida";
    var data = JSON.stringify({
        "jogo":{
            "id": 1
        },
        "paciente":{
            "id": dados.id
        },
        "relatorio":{
            "id": relatorio.id
        },
        "nivel": nivel,
        "tempo": tempo +" seg"
    });
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Partida salva com sucesso!");
            location.reload();
        } else{
            console.log("ERRO NO RELATORIO!");
        }
    };
    xhr.send(data);
}

function postRelatorio(){
    var xhr = new XMLHttpRequest();
    var url = "https://game-tcc.herokuapp.com/relatorio";
    var data = JSON.stringify({});
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //
    xhr.onload = function () {
        if (xhr.status === 200) {
            localStorage.setItem("relatorio", xhr.responseText);
        } else{
            console.log("ERRO NO RELATORIO!");
        }
    };
    xhr.send(data);
}

function postErros(erro){
    var relatorio = JSON.parse(localStorage.getItem("relatorio"));
    console.log(relatorio.id);
    var xhr = new XMLHttpRequest();
    var url = "https://game-tcc.herokuapp.com/erro/";
    var data = JSON.stringify({
        "relatorio":{
            "id": relatorio.id
        },
        "palavra": erro
    });
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //
    xhr.onload = function () {
        if (xhr.status === 200) {
        } else{
            console.log("ERRO NO RELATORIO!");
        }
    };
    xhr.send(data);
}

function postAcertos(acerto){
    var relatorio = JSON.parse(localStorage.getItem("relatorio"));
    var xhr = new XMLHttpRequest();
    var url = "https://game-tcc.herokuapp.com/acerto/";
    var data = JSON.stringify({
        "relatorio":{
            "id": relatorio.id
        },
        "palavra": acerto
    });
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //
    xhr.onload = function () {
        if (xhr.status === 200) {
        } else{
            console.log("ERRO NO RELATORIO!");
        }
    };
    xhr.send(data);
}