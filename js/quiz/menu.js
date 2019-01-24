var menuState = {
    create: function(){
        var txtQuiz = game.add.text(game.world.centerX, 150, 'QUIZ PALAVRAS', {font:'40px emulogic', fill:'#fff'});
        txtQuiz.anchor.set(.5);
        //
        //var txtPressStart = game.add.text(game.world.centerX, 550, 'APERTE ENTER', {font:'20px emulogic', fill:'#fff'});
        //txtPressStart.anchor.set(.5);
        //game.add.tween(txtPressStart).to({y:250}, 1000).start();
        //
        var botaoPlay = game.add.button(game.world.centerX - 95, 300, 'botao', play, this, 2, 1, 0);
        var txtPressStart = game.add.text(game.world.centerX, 340, 'PLAY', {font:'20px emulogic', fill: '#000000'});
        txtPressStart.anchor.set(.7);
        //
        function play(){
            game.state.start('nivel');
        }
    }
};