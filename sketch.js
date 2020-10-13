//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020


//전달사항
//열심히 하자 얘들아
// var attackArray = [];
// var UFO_1Array = [];
// var playerArray = [];

// var randomSwitch
// let x;
// let y;
// let mx;
// let my;
// var bulletEffectTimer;
// var monsterBulletEffectTimer;
// var UFOEffectTimer;
// var playerlevel = 12;
// var Round = 1;
// var currentlevel = new level(LEVEL_17,playerlevel);
// var barrier_gameplay = [];
// var highScore = 5000;
// let player2 = false;
var currentScene

function setup() {
 currentScene = new PlayScene();
 setup_every_monster_image()
 createCanvas(480, 448);
 imageMode(CENTER)

}

function draw() {
  background(0);
currentScene.Draw();
currentScene.Update();  
}

function keyPressed() {
currentScene.OnKeyPressed();
}
