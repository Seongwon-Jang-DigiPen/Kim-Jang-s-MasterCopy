var attackArray = [];
var UFO_1Array = [];
var playerArray = [];
var currentScene = 4;
var randomSwitch
let x;
let y;
let mx;
let my;
var bulletEffectTimer;
var monsterBulletEffectTimer;
var UFOEffectTimer;
var playerlevel = 12;

var barrier_gameplay = [];


/////////////////////// save the player info when player is changed
var player1_player = new player()
var player2_player = new player()
playerArray[0]= player1_player;

var player1_Round = 1;
var player2_Round = 1;

var player1_level = new level(LEVEL_1,player1_Round);
var player2_level = new level(LEVEL_1,player2_Round); 

var player1_barrier = []
var player2_barrier = []
///////////////////////
var currentlevel = player1_level

var highScore = 5000;

var player1 = true;
var player2 = false;

var player2_play = true;

var player1_Score = 0;
var player2_Score = 0;

var barrier_num = 4;
var barrier_pos_y = 350;
var barrier_1_pos_x = 62;
var barrier_2_pos_x = 142;
var barrier_3_pos_x = 222;
var barrier_4_pos_x = 302;


class PlayScene extends EmptyScene{
  constructor(){
    super()
    this.black_Scene = false
    this.timeElapsed = 0
    this.time = 0;
  }

  Update()
  {
    if(this.black_Scene)
    {
      blackScreen()
      this.timeElapsed += (millis() - this.time) / 1000;
      if(this.timeElapsed > 3)
      {
        this.timeElapsed = 0;
        this.black_Scene = false;
      }
    }
    else{
     playScene_Update()
   }
   this.time = millis();
 }
 Draw()
 {

 }
 OnKeyPressed()
 {
  if(!this.black_Scene)
  {
    playScene_OnKeyPressd() 
  }
}

}

function makebarrier(b)
{
  b.push(new barrier(barrier_1_pos_x,barrier_pos_y));
  b.push(new barrier(barrier_2_pos_x,barrier_pos_y));
  b.push(new barrier(barrier_3_pos_x,barrier_pos_y));
  b.push(new barrier(barrier_4_pos_x,barrier_pos_y));
}
function blackScreen()
{
  push();
  textSize(15)
  rectMode(CORNER);
  textAlign(LEFT);
  fill(0);
  rect(0,0,width,height);
  fill(255)
  if(player2)
  {
    text("2 PLAYER",156,180)
  }
  else if(player1)
  {
    text("1 PLAYER",156,180)
  }

  pop();
}

function playScene_OnKeyPressd()
{
 if (key == 'z' && attackArray.length == 0 && !playerArray[0].IsPlayerDie) {
  attackArray.push(new bullet(playerArray[0].position_x));
}
if (key == 'u') {
  callUFO_1();    
}
}

function playScene_Update()
{

  for(var barrier_make = 0;barrier_make<barrier_num;barrier_make++){
    barrier_gameplay[barrier_make].generate();
    barrier_gameplay[barrier_make].update();
    for(var bullet_count = 0;bullet_count<attackArray.length;bullet_count++){
      barrier_gameplay[barrier_make].p_hitRange(attackArray[bullet_count],'player', currentlevel);
    }
    for(monster_hit_check = 0;monster_hit_check<currentlevel.monster.length;monster_hit_check ++){
      barrier_gameplay[barrier_make].monsterCollision(currentlevel.monster[monster_hit_check]);
    }
  }

  playerArray[0].update();
  playerArray[0].draw();

  currentlevel.color();
  currentlevel.draw();
  currentlevel.update();



  if(!playerArray[0].IsPlayerDie){
    currentlevel.attack(playerArray[0]);
  }

  for (let a of attackArray) {
    a.draw();
    a.update();
  }
  for (let u of UFO_1Array) {
    u.draw();
    u.update();
    if(u.IsThisUfo2){
      u.canmakecheck(currentlevel.monster);
      u.makemonster(currentlevel);
    }
  }

  draw_life()
  draw_text(player1_Score,player2_Score);

  if(UFO_1Array.length > 0 && UFO_1Array[0].goneUFO()) {
    c.crash_one(UFO_1Array)
  }


  if (attackArray.length > 0 && attackArray[0].deleteBullet() && UFO_1Array.length > 0 && UFO_1Array[0].deleteUFO()) {
    UFO_1Array[0].IsUFODie = true;
    c.crash_one(attackArray);
  } else if (attackArray.length > 0 && attackArray[0].crashWallBullet()) {
    bulletEffectTimer = frameCount
    crash_effect_get_position(attackArray[0]);
    c.crash_one(attackArray)
  }


  if (frameCount < monsterBulletEffectTimer + 5) {
    image(image_bullet_break, mx, my, 20, 20);
  }

  if (frameCount < bulletEffectTimer + 5) {
    image(image_bullet_break, x, y + 20, 20, 20);
  } else if (UFO_1Array.length > 0 && UFO_1Array[0].IsUFODie) {
    UFO_1Array[0].dieScene(c)
  }

  if(attackArray.length > 0) {

   c.delete_invader(attackArray[0], currentlevel);
 }
 if(currentlevel.bullet.length > 0) {
   c.delete_player(playerArray[0], currentlevel)
 }


 switch(currentScene){
  case DIESCENE:
  push()
  fill(255)
  textSize(15)
  text('GAME OVER', 130, 130);
  pop()
  break;
}



}

function crash_effect_get_position (a) {
  x = a.position_x;
  y = a.position_y;
}

function callUFO_1() {
  UFO_1Array.push(new UFO_1());
  UFO_1Array[0].IsThisSpecialUFO = false;
}

function bullet_UFO_1_crash() {
    // console.log(c.return_delete(attackArray, UFO_1Array))
    return c.return_delete(attackArray, UFO_1Array)
  }

  function bullet_removed(bullet_name){
    bulletEffectTimer = frameCount
    crash_effect_get_position(bullet_name[0]);
  // c.crash_one(attackArray)
  c.crash_one(bullet_name);
}

function draw_text(player1_Score,player2_Score) {
  push()
  fill(255)
  textSize(17);
  text('HIGH\n SCORE', 385, 50);
  if(highScore < 10000){
    text('0' + highScore, 402, 104);
  } else {
    text(highScore, 402, 104);
  }
  text('1UP', 385, 140);
  if(player1_Score < 10){
    text('0000' + player1_Score, 402, 176);
  }else if(player1_Score < 100){
    text('000' + player1_Score, 402, 176);
  }else if(player1_Score < 1000){
    text('00' + player1_Score, 402, 176);
  }else if(player1_Score < 10000){
    text('0' + player1_Score, 402, 176);
  } else {
    text(player1_Score, 402, 176);
  }

  text('2UP', 385, 212);
  if(player2_play){
    if(player2_Score < 10){
      text('0000' + player2_Score, 402, 248);
    }else if(player2_Score < 100){
      text('000' + player2_Score, 402, 248);
    }else if(player2_Score < 1000){
      text('00' + player2_Score, 402, 248);
    }else if(player2_Score < 10000){
      text('0' + player2_Score, 402, 248);
    } else {
      text(player2_Score, 402, 248);
    }
  }
  text('ROUND', 385, 290);
  var Round 
  if(player2_play)
  {
    Round = player2_Round
  }
  else
  {
    Round = player1_Round
  }
  if(Round < 10){
    text('0' + Round, 453, 322);
  } else if (Round < 100) {
    text(Round, 453, 322);
  } else if (Round >= 100) {
    Round -= 100;
  }
  
  pop()
}

function draw_life() {
  push()
  if(playerArray[0].life == 3){
    if(!playerArray[0].IsPlayerDie){
      image(image_player, 390, 360, playerArray[0].width, playerArray[0].height)
      image(image_player, 420, 360, playerArray[0].width, playerArray[0].height)
      image(image_player, 450, 360, playerArray[0].width, playerArray[0].height)
    } else if(playerArray[0].IsPlayerDie) {
      image(image_player_R, 390, 360, playerArray[0].width, playerArray[0].height)
      image(image_player_R, 420, 360, playerArray[0].width, playerArray[0].height)
      image(image_player_R, 450, 360, playerArray[0].width, playerArray[0].height)
    }
  } else if(playerArray[0].life == 2){
    if(!playerArray[0].IsPlayerDie){
      image(image_player, 390, 360, playerArray[0].width, playerArray[0].height)
      image(image_player, 420, 360, playerArray[0].width, playerArray[0].height)
    } else if(playerArray[0].IsPlayerDie){
      image(image_player_R, 390, 360, playerArray[0].width, playerArray[0].height)
      image(image_player_R, 420, 360, playerArray[0].width, playerArray[0].height)
    }
  } else if(playerArray[0].life == 1){
    if(!playerArray[0].IsPlayerDie){
      image(image_player, 390, 360, playerArray[0].width, playerArray[0].height)
    } else if(playerArray[0].IsPlayerDie){
      image(image_player_R, 390, 360, playerArray[0].width, playerArray[0].height)
    }
  }
  pop()
}