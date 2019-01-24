var game = new Phaser.Game(750, 500, Phaser.CANVAS);

game.global = {
	score: 0,
	highScore: 0
};

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('nivel', nivelState);
game.state.add('facil', facilState);
game.state.add('end', endState);

game.state.start('boot');