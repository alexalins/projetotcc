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
var medioState = {

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 600 * 2, 700);
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
        montandoCenarioMedio();
        //
        player = game.add.sprite(100, 200, 'nave');
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
        game.physics.arcade.overlap(player, group, colisorMedio, null, this);
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
        txtTempo.text = "Tempo: " + ((tempo / 60) / 60).toFixed(2) + " min";
        txtPonto.text = "Ponto: " + pontos;
    },

    render: function () {
        game.debug.body(player);
        game.debug.body(group);

    }
};


function colisorMedio(player, letra) {
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
            partidas++;
            game.state.start('medio');
        } else {
            var jsonCorretas = JSON.stringify(corretas);
            localStorage.setItem("corretas", jsonCorretas);
            var jsonErradas = JSON.stringify(erradas);
            localStorage.setItem("erradas", jsonErradas);
            //
            localStorage.setItem("pontos", pontos);
            localStorage.setItem("tempo", ((tempo / 60) / 60).toFixed(2));
            //
            game.state.start('end');
        }
    }
}

function montandoCenarioMedio() {
    coletorLetras = "";
    //
    letras = gerandoPalavrasMedio();
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

function gerandoPalavrasMedio(palavras) {
    var palavras = JSON.parse(localStorage.getItem("palavras"));
    //
    if (palavras == null  || palavras.length <= 5) {
        var alerta = confirm("Você não tem palavras cadastradas suficientes para jogar! Por favor, peça para seu fono cadastras suas palavras.");
        if (alerta == true) {
            location.reload();
        }
    }
    //
    var index = Math.floor(Math.random() * palavras.length);
    var palavra = palavras[index];
    //
    return palavra;
}