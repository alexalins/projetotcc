var menuState = {
    create: function(){
        var txtLabirinto = game.add.text(game.world.centerX, 150, 'QUIZ PALAVRAS', {font:'40px emulogic', fill:'#fff'});
        txtLabirinto.anchor.set(.5);
        //
        var txtPressStart = game.add.text(game.world.centerX, 550, 'APERTE ENTER', {font:'20px emulogic', fill:'#fff'});
        txtPressStart.anchor.set(.5);
        game.add.tween(txtPressStart).to({y:250}, 1000).start();
        //
        game.time.events.add(1000, function(){
            var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            enterKey.onDown.addOnce(this.startGame, this);
        }, this);
    },
    startGame: function(){
        game.state.start('nivel');
    }
};