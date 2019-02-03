var bootState = {
	preload: function(){
		game.load.image('progressBar','img/progressBar.png');
		game.load.image('nave','img/nave.png');
		game.load.image('espaco','img/fundoEspaco.png');
		//game.load.image('espaco','img/espaco.jpg');
		game.load.image('tiro','img/bullet.png');
		game.load.image('star','img/star.png');
		game.load.image('baddie','img/baddie.png', 32, 32);
		game.load.image('asteroid','img/asteroid.png');
	},
	
	create: function(){
		game.state.start('load');
	}
};