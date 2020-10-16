//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020


//전달사항
//열심히 하자 얘들아



var Scene

var mainmenu_test

function setup() {

	setup_every_monster_image()
	textFont(Font);
	createCanvas(480, 448);
makebarrier(barrier_gameplay)
makebarrier(player1_barrier)
makebarrier(player2_barrier)
	imageMode(CENTER)

	Scene = new PlayScene();
	DieScene = new diescene();
	c = new crash();
    sos = new SOSScene();

    mainmenu_test = new WaitingScene();
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
// sos.draw()
// sos.update()
// sos.changeDirection()
// sos.changeColor()
// sos.timer()
// Scene.Draw_text()
	// Scene.Update()
	// Scene.Draw()


mainmenu_test.Draw();
mainmenu_test.Update();
mainmenu_test.OnKeyPressed();
}

function keyPressed() {
	//Scene.OnKeyPressed()
}

