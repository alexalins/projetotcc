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
		//
		game.load.image('a','img/a.png', 124, 124);
		game.load.image('b','img/b.png', 124, 124);
		game.load.image('c','img/c.png');
		game.load.image('d','img/d.png');
		game.load.image('e','img/e.png');
		game.load.image('f','img/f.png');
		game.load.image('g','img/g.png');
		game.load.image('h','img/h.png');
		game.load.image('i','img/i.png');
		game.load.image('j','img/j.png');
		game.load.image('k','img/k.png');
		game.load.image('l','img/l.png');
		game.load.image('m','img/m.png');
		game.load.image('n','img/n.png');
		game.load.image('o','img/o.png');
		game.load.image('p','img/p.png');
		game.load.image('q','img/q.png');
		game.load.image('r','img/r.png');
		game.load.image('s','img/s.png');
		game.load.image('t','img/t.png');
		game.load.image('u','img/u.png');
		game.load.image('v','img/v.png');
		game.load.image('w','img/w.png');
		game.load.image('x','img/x.png');
		game.load.image('y','img/y.png');
		game.load.image('z','img/z.png');
	},
	
	create: function(){
		game.state.start('load');
	}
};