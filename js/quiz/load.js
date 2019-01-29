var loadState = {
    preload: function(){
        var txtLoading  = game.add.text(game.world.centerX, 150, 'LOADING...',{font:'15px emulogic', fill: '#fff'});
        txtLoading.anchor.set(.5);
        //
        var progressBar = game.add.sprite(game.world.centerX, 250, 'progressBar');
        progressBar.anchor.set(.5);
        game.load.setPreloadSprite(progressBar);
        //
        game.load.spritesheet('botao', 'img/botao.png', 193, 71);
    },

    create: function(){
        game.state.start('menu');
    }
};