var nivelState = {
    create: function () {
        var txtNivel = game.add.text(game.world.centerX, 80, 'ESCOLHA SEU NIVEL', { font: '22px emulogic', fill: '#fff' });
        txtNivel.anchor.set(.5);
        //
        var botaoFacil = game.add.button(game.world.centerX - 95, 150, 'botao', facil, this, 2, 1, 0);
        var botaoMedio = game.add.button(game.world.centerX - 95, 250, 'botao', medio, this, 2, 1, 0);
        var botaoDificil = game.add.button(game.world.centerX - 95, 350, 'botao', dificil, this, 2, 1, 0);
        //
        var txtNivelFacil = game.add.text(game.world.centerX, 190, 'FACIL', { font: '22px emulogic', fill: '#000000' });
        txtNivelFacil.anchor.set(.65);
        var txtNivelMedio = game.add.text(game.world.centerX, 290, 'MEDIO', { font: '22px emulogic', fill: '#000000' });
        txtNivelMedio.anchor.set(.65);
        var txtNivelMedio = game.add.text(game.world.centerX, 390, 'DIFICIL', { font: '22px emulogic', fill: '#000000' });
        txtNivelMedio.anchor.set(.62);
        //
        function facil(){
            game.state.start('facil');
        }
        function medio(){
            console.log('medio');
        }
        function dificil(){
            console.log('dificil');
        }
    }
};