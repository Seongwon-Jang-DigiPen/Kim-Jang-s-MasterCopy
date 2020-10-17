//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020


//전달사항
//열심히 하자 얘들아



var Scene
var mainmenu_test
var currentScene = 1;


function setup() {

	setup_every_monster_image()
	textFont(Font);
	createCanvas(480, 448);
	makebarrier(barrier_gameplay)
	makebarrier(player1_barrier)
	makebarrier(player2_barrier)
	imageMode(CENTER)
    c = new crash();
    sos = new SOSScene();
    mainmenu = new MainScene();
    infoscene = new InfoScene();
    waitscene = new WaitingScene();
    playscene = new PlayScene();
    dieScene = new diescene();

}



function SceneManager()
{


	mainmenu_test = new WaitingScene();
}



// const MAINSCENE = 1;
// const INFOSCENE = 2;
// const WAITSCENE = 3;
// const PLAYSCENE = 4;
// const DIESCENE = 5;
// const SOSSCENE = 6;
// const INFO2SCENE = 7;

function draw() {
	background(0);
switch(currentScene){
    case MAINSCENE:
    mainmenu.Draw();
    mainmenu.Update();
    break;
    case INFOSCENE:
    infoscene.Draw();
    infoscene.Update();
    break;
    case WAITSCENE:
    waitscene.Draw();
    waitscene.Update();
    break;
    case PLAYSCENE:
    playscene.Draw_text()
    playscene.Update()
    playscene.Draw()
    break;
    case DIESCENE:
    playscene.Draw_text()
    playscene.Update()
    playscene.Draw()
    dieScene.draw();
    break;
    case SOSSCENE:
    infoscene.Draw();
    infoscene.Update();
    break;
    case INFO2SCENE:
    info2scene.Draw();
    info2scene.Update();
    break;
}



}

function keyPressed() {

	Scene.OnKeyPressed()


}

