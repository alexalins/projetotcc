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
var dificilState = {
    create: function () {
        var txtJogo = game.add.text(game.world.centerX, 125, 'ESCOLHA A PALAVRA ESCRITA CORRETAMENTE', { font: '18px emulogic', fill: '#fff' });
        txtJogo.anchor.set(.5);
        montarCenarioDificil();
    },
    update: function () {
        tempo++;
    }
};

function montarCenarioDificil() {
    var opcoes = gerandoOpcoesDificil();
    //
    var opcaoDificilA = game.add.button(game.world.centerX - 200, 200, 'botao', verificaRespDificil, this, 2, 1, 0);
    opcaoDificilA.data = opcoes[0];
    var opcaoDificilB = game.add.button(game.world.centerX - 200, 300, 'botao', verificaRespDificil, this, 2, 1, 0);
    opcaoDificilB.data = opcoes[1];
    var opcaoDificilC = game.add.button(game.world.centerX + 50, 200, 'botao', verificaRespDificil, this, 2, 1, 0);
    opcaoDificilC.data = opcoes[2];
    var opcaoDificilD = game.add.button(game.world.centerX + 50, 300, 'botao', verificaRespDificil, this, 2, 1, 0);
    opcaoDificilD.data = opcoes[3];
    //
    var txtOpcaoDificilA = game.add.text(game.world.centerX - 100, 240, opcoes[0], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoDificilA.anchor.set(.65);
    var txtOpcaoDificilB = game.add.text(game.world.centerX - 100, 340, opcoes[1], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoDificilB.anchor.set(.65);
    var txtOpcaoDificilC = game.add.text(game.world.centerX + 150, 240, opcoes[2], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoDificilC.anchor.set(.65);
    var txtOpcaoDificilD = game.add.text(game.world.centerX + 150, 340, opcoes[3], { font: '18px emulogic', fill: '#000000' });
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
            corretas.push(botao.data);
        } else {
            this.gerandoOpcoesDificil();
            this.montarCenarioDificil();
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

function gerandoOpcoesDificil() {
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
