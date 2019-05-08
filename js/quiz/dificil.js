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
var dificilState = {
    create: function () {
        var txtJogo = game.add.text(game.world.centerX, 125, 'ESCOLHA A PALAVRA ESCRITA CORRETAMENTE', { font: '18px emulogic', fill: '#fff' });
        txtJogo.anchor.set(.5);
        txtPonto = game.add.text(200, 50, "Pontos: 0", { font: '18px emulogic', fill: '#fff' });
        txtPonto.anchor.set(.65);
        txtTempo = game.add.text(600, 50, "Tempo: 000 s", { font: '18px emulogic', fill: '#fff' });
        txtTempo.anchor.set(.65);
        montarCenarioDificil();
    },
    update: function () {
        txtTempo.text = "";
        txtPonto.text = "";
        tempo++;
        txtTempo.text = "Tempo: " + ((tempo / 60) / 60).toFixed(2) + " min";
        txtPonto.text = "Ponto: " + pontos;
    }
};

function montarCenarioDificil() {
    var opcoes = gerandoOpcoesDificil();
    //
    var opcaoDificilA = game.add.button(game.world.centerX - 250, 200, 'botao', verificaRespDificil, this, 2, 1, 0);
    opcaoDificilA.data = opcoes[0];
    opcaoDificilA.width = 200;
    var opcaoDificilB = game.add.button(game.world.centerX - 250, 300, 'botao', verificaRespDificil, this, 2, 1, 0);
    opcaoDificilB.data = opcoes[1];
    opcaoDificilB.width = 200;
    var opcaoDificilC = game.add.button(game.world.centerX + 50, 200, 'botao', verificaRespDificil, this, 2, 1, 0);
    opcaoDificilC.data = opcoes[2];
    opcaoDificilC.width = 200;
    var opcaoDificilD = game.add.button(game.world.centerX + 50, 300, 'botao', verificaRespDificil, this, 2, 1, 0);
    opcaoDificilD.data = opcoes[3];
    opcaoDificilD.width = 200;
    //
    var txtOpcaoDificilA = game.add.text(game.world.centerX - 130, 240, opcoes[0], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoDificilA.anchor.set(.65);
    var txtOpcaoDificilB = game.add.text(game.world.centerX - 130, 340, opcoes[1], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoDificilB.anchor.set(.65);
    var txtOpcaoDificilC = game.add.text(game.world.centerX + 170, 240, opcoes[2], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoDificilC.anchor.set(.65);
    var txtOpcaoDificilD = game.add.text(game.world.centerX + 170, 340, opcoes[3], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoDificilD.anchor.set(.65);
}

function verificaRespDificil(botao) {
    var correta = localStorage.getItem("correta");
    //
    if (jogadas <= 10) {
        if (botao.data == correta) {
            this.gerandoOpcoesDificil();
            this.montarCenarioDificil();
            pontos += 10;
            //
            corretas.push(correta);
        } else {
            this.gerandoOpcoesDificil();
            this.montarCenarioDificil();
            //
            erradas.push(correta);
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

function gerandoOpcoesDificil() {
    var palavras = JSON.parse(localStorage.getItem("palavras"));
    //
    if (palavras == null  || palavras.length <= 5) {
        palavras = ["atlantico", "bloco", "teclado", "cachorro", "palavra", "musica","dislalia"];
    }
    var index = Math.floor(Math.random() * palavras.length);
    var palavra = palavras[index];
    //
    var opcoes = [];
    var correta = palavra;
    //
    localStorage.setItem("correta", correta);
    opcoes.push(palavra);
    //
    var palavra1 = {palavra: palavra, count: 1};
    var palavra2 = {palavra: palavra, count: 2};
    var palavra3 = {palavra: palavra, count: 3};
    opcoes.push(fonemas(palavra1));
    opcoes.push(fonemas(palavra2));
    opcoes.push(fonemas(palavra3));
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
