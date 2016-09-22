var game = new Phaser.Game(1080, 720, Phaser.CANVAS, 'game01v', { preload: preload,
 create: create,update: update });

function preload() {
	game.load.image('warship','assets/warship.png');
}

function create() {
	game.stage.backgroundColor="#C40233"
	players = game.add.group();
	createPlayer(0,0);
	createPlayer(400,0);
}

function update(){
}

function createPlayer(x,y){
	var player = players.create(x,y, 'warship');
}