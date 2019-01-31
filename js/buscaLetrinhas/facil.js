var facilState = {
    create: function () {
        weapon = game.add.weapon(1, 'tiro');
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletAngleOffset = 90;
        weapon.bulletSpeed = 400;
        //
        sprite = game.add.sprite(350, 380, 'nave');
        game.physics.arcade.enable(sprite);
        sprite.body.collideWorldBounds = true;
        //
        weapon.trackSprite(sprite, 40, 0);
        cursors = this.input.keyboard.createCursorKeys();
        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    },
    update: function () {
        sprite.body.velocity.x = 0;

        if (cursors.left.isDown) {
            sprite.body.velocity.x = -200;
        }
        else if (cursors.right.isDown) {
            sprite.body.velocity.x = 200;
        }

        if (fireButton.isDown) {
            weapon.fire();
        }
    }
};