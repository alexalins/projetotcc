var stars;
var baddies;
var player;
var cursors;
var prevCamX = 0;
var palavras;
var letras = [];
var coletorLetras;
var txtPalavra;
var txt;
var corretas = [];
var erradas = [];
var partidas = 1;
var pontos = 0;
var tempo = 0;
var txtPonto;
var txtTempo;
var segundos = 0;
var minutos = 0;
var control = 0;
//
Baddies = function (game) {

    frame = game.rnd.between(0, 35);

    if (frame === 17) {
        frame = 1;
    }

    var x = game.rnd.between(10, 1200);
    var y = game.rnd.between(0, 570);

    Phaser.Image.call(this, game, x, y, 'baddie', frame);

};
Baddies.prototype = Object.create(Phaser.Image.prototype);
Baddies.prototype.constructor = Baddies;
//
Asteroid = function (game, letra, y) {

    var x = game.rnd.between(200, 1000);
    //var y = game.rnd.between(60, 400);

    Phaser.Sprite.call(this, game, x, y, letra, 17);
    game.physics.arcade.enable(this);
};
Asteroid.prototype = Object.create(Phaser.Sprite.prototype);
Asteroid.prototype.constructor = Asteroid;
//
var facilState = {

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 600 * 2, 500);
        //
        stars = game.add.group();
        for (var i = 0; i < 80; i++) {
            stars.create(game.world.randomX, game.world.randomY, 'star');
        }
        //
        group = game.add.group();
        for (var i = 0; i < 15; i++) {
            group.add(new Baddies(game));
        }
        //
        iniciarTemporizador();
        montandoCenario();
        //
        player = game.add.sprite(100, 300, 'nave');
        player.anchor.x = 0.5;
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.body.isCircle = true;
        player.body.collideWorldBounds = true;
        //
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1);
        cursors = game.input.keyboard.createCursorKeys();
        prevCamX = game.camera.x;
    },

    update: function () {
        tempo++;
        txtTempo.text = "";
        txtPonto.text = "";
        game.physics.arcade.overlap(player, group, colisor, null, this);
        //
        if (cursors.left.isDown) {
            player.x -= 8;
            player.scale.x = -1;
        }
        else if (cursors.right.isDown) {
            player.x += 8;
            player.scale.x = 1;
        }

        if (cursors.up.isDown) {
            player.y -= 8;
        }
        else if (cursors.down.isDown) {
            player.y += 8;
        }
        //
        prevCamX = game.camera.x;
        txtTempo.text = "Tempo: " + minutos + ":" + segundos;
        txtPonto.text = "Pontos: " + pontos;
    }
};

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

function colisor(player, letra) {
    
    coletorLetras = coletorLetras + letra.data;
    txtPalavra.text = coletorLetras;
    letra.kill();
    //
    var count = letras.length;
    if (coletorLetras.length == count) {
        if (coletorLetras == letras) {
            pontos++;
            corretas.push(coletorLetras);
        } else {
            erradas.push(letras);
        }
        //
        if (partidas != 10) {
            game.state.start('facil');
            partidas++;
        } else {
            var jsonCorretas = JSON.stringify(corretas);
            localStorage.setItem("corretas", jsonCorretas);
            var jsonErradas = JSON.stringify(erradas);
            localStorage.setItem("erradas", jsonErradas);
            //
            localStorage.setItem("pontos", pontos);
            localStorage.setItem("tempo", minutos + ":" + segundos);
            //
            zerarTemporizador();
            game.state.start('end');
        }
    }
}

function montandoCenario() {
    coletorLetras = "";
    //
    letras = gerandoPalavras();
    for (var i = 0; i < letras.length; i++) {
        sprite = group.add(new Asteroid(game, letras[i], (80 * i)));
        sprite.data = letras[i];
    }
    //
    txt = game.add.text(game.world.centerX, 50, letras, { font: '22px emulogic', fill: '#fff' });
    txt.anchor.set(.65);
    txtPalavra = game.add.text(game.world.centerX, 90, " ", { font: '22px emulogic', fill: '#FF0000' });
    txtPalavra.anchor.set(.65);
    txtPonto = game.add.text(200, 50, "Pontos: 0", { font: '22px emulogic', fill: '#00ff44' });
    txtPonto.anchor.set(.65);
    txtTempo = game.add.text(1000, 50, "Tempo: 000 s", { font: '22px emulogic', fill: '#00ff44' });
    txtTempo.anchor.set(.65);
}

function gerandoPalavras(palavras) {
    var palavras = JSON.parse(localStorage.getItem("palavras"));
    //
    if (palavras == null  || palavras.length <= 5) {
        palavras = ["casa", "dado", "bola", "cola", "foca", "dama","pena"];
    }
    //
    var index = Math.floor(Math.random() * palavras.length);
    var palavra = palavras[index];
    //
    return palavra;
}