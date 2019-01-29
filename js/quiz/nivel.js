var nivelState = {
    create: function () {
        var txtNivel = game.add.text(game.world.centerX, 80, 'ESCOLHA SEU NIVEL', { font: '22px emulogic', fill: '#fff' });
        txtNivel.anchor.set(.5);
        //
        var botaoFacil = game.add.button(game.world.centerX - 95, 150, 'botao', facil, this, 2, 1, 0);
        botaoFacil.width = 200;
        var botaoMedio = game.add.button(game.world.centerX - 95, 250, 'botao', medio, this, 2, 1, 0);
        botaoMedio.width = 200;
        var botaoDificil = game.add.button(game.world.centerX - 95, 350, 'botao', dificil, this, 2, 1, 0);
        botaoDificil.width = 200;
        //
        var txtNivelFacil = game.add.text(game.world.centerX + 10, 185, 'FACIL', { font: '22px emulogic', fill: '#000000' });
        txtNivelFacil.anchor.set(.55);
        var txtNivelMedio = game.add.text(game.world.centerX + 10, 285, 'MEDIO', { font: '22px emulogic', fill: '#000000' });
        txtNivelMedio.anchor.set(.55);
        var txtNivelMedio = game.add.text(game.world.centerX + 5, 385, 'DIFICIL', { font: '22px emulogic', fill: '#000000' });
        txtNivelMedio.anchor.set(.5);
    }
};

function facil() {
    localStorage.setItem("nivel", "facil");
    request();
}

function medio() {
    localStorage.setItem("nivel", "medio");
    request();
}

function dificil() {
    localStorage.setItem("nivel", "dificil");
    request();
}