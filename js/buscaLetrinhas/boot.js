var bootState = {
	preload: function(){
		game.load.image('progressBar','img/progressBar.png');
		game.load.image('nave','img/nave.png');
		//game.load.image('espaco','img/espaco.jpg');
		game.load.image('tiro','img/bullet.png');
	},
	
	create: function(){
		game.state.start('load');
	}
};