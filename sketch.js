//sketch.js
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//Major : Seongwon Jang, Minor : Daehyeon Kim, Junsu Jang
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”

var Scene
var previousScene = 0



function setup() {

	setup_every_monster_image()
	textFont(Font);
	createCanvas(480, 448);
	makebarrier(barrier_gameplay)
	imageMode(CENTER)


	Scene = new MainScene()

	c = new crash();

}

function toInfo2Scene()
{
	previousScene = Scene;
	Scene = new Info2Scene();
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

