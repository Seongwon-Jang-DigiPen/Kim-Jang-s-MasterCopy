//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020


//전달사항
//열심히 하자 얘들아



var Scene

function setup() {

	setup_every_monster_image()
	textFont(Font);
	createCanvas(480, 448);
makebarrier(barrier_gameplay)
makebarrier(barrier_gameplay)
makebarrier(barrier_gameplay)
	
	imageMode(CENTER)

	Scene = new PlayScene();
	DieScene = new diescene();
	c = new crash();
    sos = new SOSScene();
}



function SceneManager()
{

}

function RoundManager()
{

}

function Player_manager()
{

}

function draw() {
	background(0);
	Scene.Update()
	Scene.Draw()
	console.log("player1: "+player1_player.life+"\n player2: "+player2_player.life)
console.log(playerArray[0].life)
}

function keyPressed() {
	Scene.OnKeyPressed()
}

