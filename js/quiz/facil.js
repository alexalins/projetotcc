var dados = localStorage.getItem("dados");
var obj = JSON.parse(dados);
var id = obj.id;
var palavras = [];
var corretas = [];
var erradas = [];
var jogadas = 1;
var pontos = 0;
var tempo = 0;
var txtPonto;
var txtTempo;
//
var facilState = {
    create: function () {
        var txtJogo = game.add.text(game.world.centerX, 125, 'ESCOLHA A PALAVRA ESCRITA CORRETAMENTE', { font: '18px emulogic', fill: '#fff' });
        txtJogo.anchor.set(.5);
        txtPonto = game.add.text(200, 50, "Pontos: 0", { font: '18px emulogic', fill: '#fff' });
        txtPonto.anchor.set(.65);
        txtTempo = game.add.text(600, 50, "Tempo: 000 s", { font: '18px emulogic', fill: '#fff' });
        txtTempo.anchor.set(.65);
        //
        montarCenarioFacil();
    },
    update: function () {
        txtTempo.text = "";
        txtPonto.text = "";
        tempo++;
        txtTempo.text = "Tempo: " + ((tempo / 60) / 60).toFixed(2) + " min";
        txtPonto.text = "Ponto: " + pontos;
    }
};

function montarCenarioFacil() {
    var opcoes = gerandoOpcoesFacil();
    //
    var opcaoFacilA = game.add.button(game.world.centerX - 100, 200, 'botao', verificaRespFacil, this, 2, 1, 0);
    opcaoFacilA.data = opcoes[0];
    opcaoFacilA.width = 200;
    var opcaoFacilB = game.add.button(game.world.centerX - 100, 300, 'botao', verificaRespFacil, this, 2, 1, 0);
    opcaoFacilB.data = opcoes[1];
    opcaoFacilB.width = 200;
    //
    var txtOpcaoFacilA = game.add.text(game.world.centerX + 20, 240, opcoes[0], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoFacilA.anchor.set(.8);
    var txtOpcaoFacilB = game.add.text(game.world.centerX + 20, 340, opcoes[1], { font: '18px emulogic', fill: '#000000' });
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
        localStorage.setItem("tempo", ((tempo / 60) / 60).toFixed(2));
        //
        var jsonCorretas = JSON.stringify(corretas);
        localStorage.setItem("corretas", jsonCorretas);
        var jsonErradas = JSON.stringify(erradas);
        localStorage.setItem("erradas", jsonErradas);
        //
        //postRelatorio();
        game.state.start('end');
    }
}

function gerandoOpcoesFacil() {
    var palavras = JSON.parse(localStorage.getItem("palavras"));
    //
    if (palavras == null || palavras.length <= 5) {
        palavras = ["casa", "dado", "bola", "cola", "foca", "dama","pena"];
    }
    var index = Math.floor(Math.random() * palavras.length);
    var palavra = palavras[index];
    //
    var opcoes = [];
    var correta = palavra;
    //
    localStorage.setItem("correta", correta);
    opcoes.push(palavra);
    var palavra1 = { palavra: palavra, count: 1 };
    opcoes.push(fonemas(palavra1));
    //
    var random = Math.floor(Math.random() * 2);
    //
    if (random == 0)
        opcoes.sort();
    else
        opcoes.reverse();
    // 
    return opcoes;
};