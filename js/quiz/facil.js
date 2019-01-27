var dados = localStorage.getItem("dados");
var obj = JSON.parse(dados);
var id = obj.id;
var palavras = [];
var corretas = [];
var erradas = [];
var jogadas = 1;
var pontos = 0;
var tempo = 0;
//
var facilState = {
    create: function () {
        var txtJogo = game.add.text(game.world.centerX, 125, 'ESCOLHA A PALAVRA ESCRITA CORRETAMENTE', { font: '18px emulogic', fill: '#fff' });
        txtJogo.anchor.set(.5);
        montarCenarioFacil();
    },
    update: function () {
        tempo++;
    }
};

function montarCenarioFacil() {
    var opcoes = gerandoOpcoesFacil();
    //
    var opcaoFacilA = game.add.button(game.world.centerX - 95, 200, 'botao', verificaRespFacil, this, 2, 1, 0);
    opcaoFacilA.data = opcoes[0];
    var opcaoFacilB = game.add.button(game.world.centerX - 95, 300, 'botao', verificaRespFacil, this, 2, 1, 0);
    opcaoFacilB.data = opcoes[1];
    //
    var txtOpcaoFacilA = game.add.text(game.world.centerX, 240, opcoes[0], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoFacilA.anchor.set(.8);
    var txtOpcaoFacilB = game.add.text(game.world.centerX, 340, opcoes[1], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoFacilB.anchor.set(.8);
}

function verificaRespFacil(botao) {
    var correta = localStorage.getItem("correta");
    //
    if (jogadas <= 10) {
        if (botao.data == correta) {
            this.gerandoOpcoesFacil();
            this.montarCenarioFacil();
            pontos += 10;
            //
            corretas.push(botao.data);
        } else {
            this.gerandoOpcoesFacil();
            this.montarCenarioFacil();
            //
            erradas.push(botao.data);
        }
        //
        jogadas++;
    } else {
        localStorage.setItem("pontos", pontos);
        localStorage.setItem("tempo", tempo);
        //
        var jsonCorretas = JSON.stringify(corretas);
        localStorage.setItem("corretas", jsonCorretas);
        var jsonErradas = JSON.stringify(erradas);
        localStorage.setItem("erradas", jsonErradas);
        //
        game.state.start('end');
    }
}

function requestFacil() {
    //pega um json cm as palavras
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI('https://game-tcc.herokuapp.com/palavra/paciente/' + id));
    xhr.onload = function () {
        //
        if (xhr.status === 200) {
            var req = JSON.parse(xhr.responseText);
            if (req.length < 5 || req.length == 0) {
                var alerta = confirm("Você não tem palavras cadastradas suficientes para jogar! Por favor, peça para seu fono cadastras suas palavras.");
                if (alerta == true) {
                    location.reload();
                }
            } else {
                //pega as palavras no nivel facil
                for (let i = 0; i < req.length; i++) {
                    if (req[i].nivel == "facil") {
                        palavras.push(req[i].palavra);
                    }
                }
                //
                var jsonPalavras = JSON.stringify(palavras);
                localStorage.setItem("palavras", jsonPalavras);
            }
        }
        else {
            //se tiver um erro na req
            var txtErro = game.add.text(game.world.centerX, 250, 'ERRO NO JOGO', { font: '20px emulogic', fill: '#fff' });
            txtErro.anchor.set(.5);
        }
    };
    xhr.send();
}

function gerandoOpcoesFacil() {
    var palavras = JSON.parse(localStorage.getItem("palavras"));
    //
    if (palavras == null) {
        var alerta = confirm("Você não tem palavras cadastradas suficientes para jogar! Por favor, peça para seu fono cadastras suas palavras.");
        if (alerta == true) {
            location.reload();
        }
    }
    var index = Math.floor(Math.random() * palavras.length);
    var palavra = palavras[index];
    //
    var opcoes = [];
    var correta = palavra;
    //
    localStorage.setItem("correta", correta);
    opcoes.push(palavra);
    //verificando fonemas
    // p - b
    if (palavra.includes('p')) {
        var troca = palavra.replace("p", "b");
    } else if (palavra.includes('b')) {
        var troca = palavra.replace("b", "p");
    }
    //f - v
    else if (palavra.includes('f')) {
        var troca = palavra.replace("f", "v");
    } else if (palavra.includes('v')) {
        var troca = palavra.replace("v", "f");
    }
    //t - d
    else if (palavra.includes('t')) {
        var troca = palavra.replace("t", "d");
    } else if (palavra.includes('d')) {
        var troca = palavra.replace("d", "t");
    }
    // r - l
    else if (palavra.includes('l')) {
        var troca = palavra.replace("l", "r");
    } else if (palavra.includes('r')) {
        var troca = palavra.replace("r", "l");
    }
    //f - s
    else if (palavra.includes('f')) {
        var troca = palavra.replace("f", "s");
    } else if (palavra.includes('s')) {
        var troca = palavra.replace("s", "f");
    }
    //j - z
    else if (palavra.includes('j')) {
        var troca = palavra.replace("j", "z");
    } else if (palavra.includes('z')) {
        var troca = palavra.replace("z", "j");
    }
    //x - s
    else if (palavra.includes('x')) {
        var troca = palavra.replace("x", "s");
    } else if (palavra.includes('s')) {
        var troca = palavra.replace("s", "x");
    }
    // m - n
    else if (palavra.includes('m')) {
        var troca = palavra.replace("m", "n");
    } else if (palavra.includes('n')) {
        var troca = palavra.replace("n", "m");
    }
    opcoes.push(troca);
    var random = Math.floor(Math.random() * 2);
    //
    if (random == 0)
        opcoes.sort();
    else
        opcoes.reverse();
    // 
    return opcoes;
};