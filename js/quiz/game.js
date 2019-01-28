//var game = new Phaser.Game(750, 500, Phaser.CANVAS);
var game = new Phaser.Game({
	width: 750, 
	height: 500,
	backgroundColor: '#3498db', 
	physics: { default: 'arcade' }, 
	parent: 'jogo', 
});

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('nivel', nivelState);
game.state.add('facil', facilState);
game.state.add('medio', medioState);
game.state.add('dificil', dificilState);
game.state.add('end', endState);

game.state.start('boot');