var stars;
var baddies;
var player;
var cursors;
var fireButton;
var bulletTime = 0;
var frameTime = 0;
var frames;
var prevCamX = 0;
var medioState = {

    create: function () {

        game.world.setBounds(0, 0, 1000 * 4, 1000);
        frames = Phaser.Animation.generateFrameNames('frame', 2, 30, '', 2);
        frames.unshift('frame02');
        //
        stars = game.add.group();
        for (var i = 0; i < 128; i++) {
            stars.create(game.world.randomX, game.world.randomY, 'star');
        }
        //
        baddies = game.add.group();
        for (var i = 0; i < 16; i++) {
            baddies.create(game.world.randomX, game.world.randomY, 'baddie');
        }
        //
        player = game.add.sprite(100, 300, 'nave');
        player.anchor.x = 0.5;
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        //
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1);
        cursors = game.input.keyboard.createCursorKeys();
        prevCamX = game.camera.x;

    },

    update: function () {

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
    }
};