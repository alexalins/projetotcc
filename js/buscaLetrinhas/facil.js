var stars;
var baddies;
var player;
var cursors;
var fireButton;
var bulletTime = 0;
var frameTime = 0;
var frames;
var prevCamX = 0;
//
Baddies = function (game) {

    frame = game.rnd.between(0, 35);

    if (frame === 17)
    {
        frame = 1;
    }

    var x = game.rnd.between(100, 770);
    var y = game.rnd.between(0, 570);

    Phaser.Image.call(this, game, x, y, 'baddie', frame);

};
Baddies.prototype = Object.create(Phaser.Image.prototype);
Baddies.prototype.constructor = Baddies;
//
Asteroid = function (game) {

    var x = game.rnd.between(100, 770);
    var y = game.rnd.between(0, 570);

    Phaser.Sprite.call(this, game, x, y, 'asteroid', 17);

    game.physics.arcade.enable(this);
};
Asteroid.prototype = Object.create(Phaser.Sprite.prototype);
Asteroid.prototype.constructor = Asteroid;
//
var facilState = {

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 1000 * 4, 1000);
        //
        stars = game.add.group();
        for (var i = 0; i < 128; i++) {
            stars.create(game.world.randomX, game.world.randomY, 'star');
        }
        //
        group = game.add.group();
        for (var i = 0; i < 20; i++)
        {
            if (i < 10)
            {
                group.add(new Baddies(game));
            }
            else
            {
                group.add(new Asteroid(game));
            }
        }
        //
        player = game.add.sprite(100, 300, 'nave');
        player.anchor.x = 0.5;
        //
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.body.isCircle = true;
        //player.body.setSize(50, 10, 40, 55);
        //player.body.setSize(10, 10, 60, 55);
        player.body.collideWorldBounds = true;
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1);
        cursors = game.input.keyboard.createCursorKeys();
        prevCamX = game.camera.x;
    },

    update: function () {

        game.physics.arcade.overlap(player, group, collisionHandler, null, this);

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
    },
    render: function () {

        game.debug.body(player);
        game.debug.body(group);

    }
};


function collisionHandler(player, asteroid) {
    asteroid.kill();
}