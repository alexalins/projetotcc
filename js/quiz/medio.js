var dados = localStorage.getItem("dados");
var palavras = [];
var corretas = [];
var erradas = [];
var jogadas = 1;
var pontos = 0;
var tempo = 0;
var txtPonto;
var txtTempo;
var segundos = 0;
var minutos = 0;
var control = 0;
//
var medioState = {
    create: function () {
        //
        var txtJogo = game.add.text(game.world.centerX, 125, 'ESCOLHA A PALAVRA ESCRITA CORRETAMENTE', { font: '18px emulogic', fill: '#fff' });
        txtJogo.anchor.set(.5);
        txtPonto = game.add.text(200, 50, "Pontos: 0", { font: '18px emulogic', fill: '#fff' });
        txtPonto.anchor.set(.65);
        txtTempo = game.add.text(600, 50, "Tempo: 000 s", { font: '18px emulogic', fill: '#fff' });
        txtTempo.anchor.set(.65);
        iniciarTemporizador();
        montarCenarioMedio();
    },
    update: function () {
        txtTempo.text = "";
        txtPonto.text = "";
        tempo++;
        txtTempo.text = "Tempo: " + minutos + ":" + segundos;
        txtPonto.text = "Ponto: " + pontos;
    }
};

function montarCenarioMedio() {
    var opcoes = gerandoOpcoesMedio();
    //
    var opcaoMedioA = game.add.button(game.world.centerX - 100, 200, 'botao', verificaRespMedio, this, 2, 1, 0);
    opcaoMedioA.data = opcoes[0];
    opcaoMedioA.width = 200;
    var opcaoMedioB = game.add.button(game.world.centerX - 100, 300, 'botao', verificaRespMedio, this, 2, 1, 0);
    opcaoMedioB.data = opcoes[1];
    opcaoMedioB.width = 200;
    var opcaoMedioC = game.add.button(game.world.centerX - 100, 400, 'botao', verificaRespMedio, this, 2, 1, 0);
    opcaoMedioC.data = opcoes[2];
    opcaoMedioC.width = 200;
    //
    var txtOpcaoMedioA = game.add.text(game.world.centerX + 20, 240, opcoes[0], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoMedioA.anchor.set(.65);
    var txtOpcaoMedioB = game.add.text(game.world.centerX + 20, 340, opcoes[1], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoMedioB.anchor.set(.65);
    var txtOpcaoMedioC = game.add.text(game.world.centerX + 20, 440, opcoes[2], { font: '18px emulogic', fill: '#000000' });
    txtOpcaoMedioC.anchor.set(.65);
}

function paraTemporizador(){
	clearInterval(control);
}

function iniciarTemporizador() {
	control = setInterval(cronometro,1000);
}

function cronometro () {
	segundos ++;
	if (segundos < 10) { segundos = "0"+segundos }
	if (segundos == 59) {
		segundos = -1;
	}
	if (segundos == 0) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
	}
}

function zerarTemporizador(){
	segundos = 0;
	minutos = 0;
}

function verificaRespMedio(botao) {
    var correta = localStorage.getItem("correta");
    //
    if (jogadas <= 10) {
        if (botao.data == correta) {
            this.gerandoOpcoesMedio();
            this.montarCenarioMedio();
            pontos += 10;
            //
            corretas.push(correta);
        } else {
            this.gerandoOpcoesMedio();
            this.montarCenarioMedio();
            //
            erradas.push(correta);
        }
        //
        jogadas++;
    } else {
        localStorage.setItem("pontos", pontos);
        localStorage.setItem("tempo", minutos + ":" + segundos);
        //
        var jsonCorretas = JSON.stringify(corretas);
        localStorage.setItem("corretas", jsonCorretas);
        var jsonErradas = JSON.stringify(erradas);
        localStorage.setItem("erradas", jsonErradas);
        //
        //postRelatorio();
        zerarTemporizador();
        game.state.start('end');
    }
}

function gerandoOpcoesMedio() {
    var palavras = JSON.parse(localStorage.getItem("palavras"));
    //
    if (palavras == null  || palavras.length <= 5) {
        palavras = ["banana", "barata", "prato", "zona", "palavra", "troca","rapido"];
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
    opcoes.push(fonemas(palavra1));
    opcoes.push(fonemas(palavra2));
    //
    console.log(opcoes);
    var random = Math.floor(Math.random() * 2);
    //
    if (random == 0)
        opcoes.sort();
    else
        opcoes.reverse();
    // 
    return opcoes;
};