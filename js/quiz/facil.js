var facilState = {
    create: function () {
        var dados = localStorage.getItem("dados");
        //var myJson = JSON.stringify(dados);
        var obj = JSON.parse(dados);
        var id = obj.id;
        var palavras = [];
        //pega um json cm as palavras
        var xhr = new XMLHttpRequest();
        xhr.open('GET', encodeURI('https://game-tcc.herokuapp.com/palavra/paciente/' + id));
        xhr.onload = function () {
            if (xhr.status === 200) {
                //pega as palavras no nivel facil
                var req = JSON.parse(xhr.responseText);
                for (let i = 0; i < req.length; i++) {
                    if (req[i].nivel == "facil") {
                        palavras.push(req[i].palavra);
                    }
                }
                //se a lista de palavras por menor q 5 o jogo nao funciona
                if (palavras.length < 5) {
                    alert("Você não tem palavras cadastradas suficientes para jogar! Por favor, peça para seu fono cadastras suas palavras.");
                } else {
                    palavras.sort();
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
        //
        var txtJogo = game.add.text(game.world.centerX, 125, 'ESCOLHA A PALAVRA ESCRITA CORRETAMENTE', { font: '18px emulogic', fill: '#fff' });
        txtJogo.anchor.set(.5);
        //
        this.montarCenario();
    },
    montarCenario: function () { 
        var opcoes = this.gerandoOpcoes();
        console.log(opcoes);
        var opcaoA = game.add.button(game.world.centerX - 95, 200, 'botao', verificaResp, this, 2, 1, 0);
        opcaoA.data = opcoes[0];
        var opcaoB = game.add.button(game.world.centerX - 95, 300, 'botao', verificaResp, this, 2, 1, 0);
        opcaoB.data = opcoes[1];
        //
        var txtOpcaoA = game.add.text(game.world.centerX, 240, opcoes[0], { font: '18px emulogic', fill: '#000000'});
        txtOpcaoA.anchor.set(.8);
        var txtOpcaoB = game.add.text(game.world.centerX, 340, opcoes[1], { font: '18px emulogic', fill: '#000000'});
        txtOpcaoB.anchor.set(.8);
    },
    gerandoOpcoes: function(){
        var palavras = JSON.parse(localStorage.getItem("palavras"));
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
            console.log(troca);
        } else if (palavra.includes('b')) {
            var troca = palavra.replace("b", "p");
            console.log(troca);
        }
        //f - v
        else if (palavra.includes('f')) {
            var troca = palavra.replace("f", "v");
            console.log(troca);
        } else if (palavra.includes('v')) {
            var troca = palavra.replace("v", "f");
            console.log(troca);
        }
        //t - d
        else if (palavra.includes('t')) {
            var troca = palavra.replace("t", "d");
            console.log(troca);
        } else if (palavra.includes('d')) {
            var troca = palavra.replace("d", "t");
            console.log(troca);
        }
        // r - l
        else if (palavra.includes('l')) {
            var troca = palavra.replace("l", "r");
            console.log(troca);
        } else if (palavra.includes('r')) {
            var troca = palavra.replace("r", "l");
            console.log(troca);
        }
        //f - s
        else if (palavra.includes('f')) {
            var troca = palavra.replace("f", "s");
            console.log(troca);
        } else if (palavra.includes('s')) {
            var troca = palavra.replace("s", "f");
            console.log(troca);
        }
        //j - z
        else if (palavra.includes('j')) {
            var troca = palavra.replace("j", "z");
            console.log(troca);
        } else if (palavra.includes('z')) {
            var troca = palavra.replace("z", "j");
            console.log(troca);
        }
        //x - s
        else if (palavra.includes('x')) {
            var troca = palavra.replace("x", "s");
            console.log(troca);
        } else if (palavra.includes('s')) {
            var troca = palavra.replace("s", "x");
            console.log(troca);
        }
        // m - n
        else if (palavra.includes('m')) {
            var troca = palavra.replace("m", "n");
            console.log(troca);
        } else if (palavra.includes('n')) {
            var troca = palavra.replace("n", "m");
            console.log(troca);
        }
        opcoes.push(troca);
        // 
        return opcoes;
    }
};

function verificaResp(botao){
    var correta = localStorage.getItem("correta");
    //
    if(botao.data == correta){
        this.gerandoOpcoes();
        this.montarCenario();
    } else{
        this.gerandoOpcoes();
        this.montarCenario();
    }
}