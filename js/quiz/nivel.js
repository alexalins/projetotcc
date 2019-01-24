var nivelState = {
    preload: function () {
        game.load.spritesheet('botao', 'img/botao.png', 193, 71);
    },
    create: function () {
        var botaoFacil = game.add.button(game.world.centerX - 95, 100, 'botao', facil, this, 2, 1, 0);
        var botaoMedio = game.add.button(game.world.centerX - 95, 250, 'botao', medio, this, 2, 1, 0);
        var botaoDificil = game.add.button(game.world.centerX - 95, 400, 'botao', dificil, this, 2, 1, 0);
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