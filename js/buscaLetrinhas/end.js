var endState = {
    create: function () {
        //postRelatorio();
        var pontos = localStorage.getItem("pontos");
        var tempo = localStorage.getItem("tempo");
        //
        var txtPontos = game.add.text(400, 150, 'SEUS PONTOS: ' + pontos, { font: '18px emulogic', fill: '#00ff44' });
        txtPontos.anchor.set(.5);
        var txtTempo = game.add.text(400, 250, 'SEU TEMPO: ' + tempo, { font: '18px emulogic', fill: '#00ff44' });
        txtTempo.anchor.set(.5);
        //
        var botao = game.add.button(400 - 95, 400, 'botao', clickBotao, this, 2, 1, 0);
        var txtBotao= game.add.text(400, 440, 'INICIO', { font: '18px emulogic', fill: '#00000' });
        txtBotao.anchor.set(.7);
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
        //
        postPartida();
    }
};

function clickBotao() {
    location.reload();
}