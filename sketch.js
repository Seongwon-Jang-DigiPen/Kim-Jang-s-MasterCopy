//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020


//전달사항
//열심히 하자 얘들아



var Scene
var previousScene = 0


function setup() {

	setup_every_monster_image()
	textFont(Font);
	createCanvas(480, 448);
	makebarrier(barrier_gameplay)
	makebarrier(player1_barrier)
	makebarrier(player2_barrier)
	imageMode(CENTER)

    Scene = new MainScene()

	c = new crash();

}


function toWaitScene()
{
	Scene = new WaitingScene()
}

function toMainScene()
{
	Scene = new MainScene()
}

function toInfoScene()
{
	Scene = new InfoScene();
}

function toSOSScene()
{
	previousScene = Scene;
	Scene = new SOSScene();
}

function toPlayScene()
{
	if(previousScene != 0)
	{
		Scene = previousScene;
		previousScene = 0;
	}
	else
	{
		Scene = new PlayScene();
	}
}


function draw() {
	background(0);


	Scene.Update()
	Scene.Draw()


}

function keyPressed() {
	Scene.OnKeyPressed()
}

