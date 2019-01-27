//var game = new Phaser.Game(750, 500, Phaser.CANVAS);
var game = new Phaser.Game({
	width: 750, // Width of the game in pixels
	height: 500, // Height of the game in pixels
	backgroundColor: '#3498db', // The background color (blue)
	physics: { default: 'arcade' }, // The physics engine to use
	parent: 'jogo', // Create the game inside the <div id="game"> 
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