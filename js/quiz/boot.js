var bootState = {
	preload: function(){
		game.load.image('progressBar','img/progressBar.png');
	},
	
	create: function(){
		postRelatorio();
		game.state.start('load');
	}
};