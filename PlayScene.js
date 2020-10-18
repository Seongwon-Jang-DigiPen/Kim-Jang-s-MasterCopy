//PlayScene.js
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//Major : Seongwon Jang, Minor : Daehyeon Kim, Junsu Jang
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
var attackArray = [];
var UFO_1Array = [];
var playerArray = [];

var randomSwitch
let x;
let y;
let mx;
let my;
var bulletEffectTimer;
var monsterBulletEffectTimer;
var monsterBulletEffectTimer2;
var UFOEffectTimer;
var playerlevel = 12;

var barrier_gameplay = [];



var player1_player = new player()
var player2_player = new player()
playerArray[0]= player1_player;

var player1_Round = 1;
var player2_Round = 1;

var player1_level = new level(LEVEL_1,player1_Round);
var player2_level = new level(LEVEL_1,player2_Round); 

var player1_bonus_life = false
var player2_bonus_life = false

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
var makeMonsterAnimation = [];

function highScorecheck()
{
  if(highScore<player1_Score)
  {
    highScore=player1_Score
  }
if(highScore<player2_Score)
  {
    highScore=player2_Score
  }
}

function bonusLife()
{
if(1500<=player1_Score&&!player1_bonus_life)
{
playerArray[0].life++
player1_bonus_life = true
bonus_life_sound.play()
}
if(1500<=player2_Score&&!player2_bonus_life)
{
playerArray[0].life++
player2_bonus_life = true
bonus_life_sound.play()
}

}

function set_gameScene(play2)
{

  attackArray = [];
  UFO_1Array = [];
  playerArray = [];

  player1_player = new player()
  player2_player = new player()

  playerArray[0]= player1_player;

  player1_Round = 1;
  player2_Round = 1;

  player1_level = new level(LEVEL_1,player1_Round);
  player2_level = new level(LEVEL_1,player2_Round); 

  player1_barrier = []
  player2_barrier = []

  currentlevel = player1_level

  player2_play = play2;

  player1 = true;
  player2 = false;

  player1_Score = 0;
  player2_Score = 0;
}
class PlayScene extends EmptyScene{
 constructor(){
  super()
  this.black_Scene = true;
  this.new_Round = true;
  this.timeElapsed = 0
  this.time = millis();
  this.pause = false;
}

Update()
{
  highScorecheck()
  bonusLife()
  this.roundChange()
  if(this.black_Scene)
  {
    blackScreen()
    this.timeElapsed += (millis() - this.time) / 1000;
    if(this.timeElapsed > 3)
    {
      this.timeElapsed = 0;
      this.black_Scene = false;
    }
    for(var i=0;i<currentlevel.monster.length;i++)
    {
      makeMonsterAnimation[i] = {x:currentlevel.monster[i].position_x,y:currentlevel.monster[i].position_y} ;
    }
  }
  else if(this.new_Round)
  {
    this.newRoundAnimation()
  }
  else if(this.pause)
  {
    this.changepause();
  }
  else{
    this.Draw_text()
    playScene_Update()
  }
  this.time = millis();
}
Draw_text()
{
  draw_life()
  draw_text();
}
changepause()
{
 draw_life()
 playerArray[0].update();
 playerArray[0].draw();
 for(var barrier_make = 0;barrier_make<barrier_num;barrier_make++)
 {
  barrier_gameplay[barrier_make].generate();
  barrier_gameplay[barrier_make].update();
}
draw_text()
currentlevel.color()
currentlevel.draw()
push();
fill(255);
textAlign(CENTER)
text("PAUSE",play_scene_maximumX/2,play_scene_maximumY/4)
pop();
}
roundChange()
{
  if(currentlevel.monster.length == 0)
  {
    if(player1)
    {
      player1_Round++
      var round = (player1_Round%17)
      if(player1_Round>17)
      {
        round++
      }
      if(round==16)
      {
        currentlevel=new level(LEVEL_16,player1_Round);   
      }
      else if(round>=14)
      {
        currentlevel=new level(LEVEL_14,player1_Round);   
      }
      else if(round>=12)
      {
       currentlevel=new level(LEVEL_12,player1_Round);   
     }
     else
     {
      currentlevel=new level(LEVEL_1,player1_Round);
    }
  }
  else if(player2)
  {
    player2_Round++
    var round = (player2_Round%17)
    if(player2_Round>17)
    {
      round++
    }
    if(round==16)
    {
      currentlevel=new level(LEVEL_16,player2_Round);   
    }
    else if(round>=14)
    {
      currentlevel=new level(LEVEL_14,player2_Round);   
    }
    else if(round>=12)
    {
     currentlevel=new level(LEVEL_12,player2_Round);   
   }
   else
   {
    currentlevel=new level(LEVEL_1,player2_Round);
  }
}
this.new_Round = true;
for(var i=0;i<currentlevel.monster.length;i++)
{
  makeMonsterAnimation[i] = {x:currentlevel.monster[i].position_x,y:currentlevel.monster[i].position_y} ;
}
if(round==9)
{
toInfo2Scene()
}
if(round>9)
{
  toSOSScene();
}
}

}
newRoundAnimation()
{

  for(var barrier_make = 0;barrier_make<barrier_num;barrier_make++)
  {
    barrier_gameplay[barrier_make].generate();
    barrier_gameplay[barrier_make].update();
  }
  draw_text()
  draw_life()
  currentlevel.color()
  currentlevel.draw()
  for(var i=0; i<makeMonsterAnimation.length;i++)
  {
    push()
    rectMode(CENTER)
    fill(0)
    rect(makeMonsterAnimation[i].x,makeMonsterAnimation[i].y,MONSTERDISTANCE,MONSTERDISTANCE)
    pop()
  }
  makeMonsterAnimation.splice(0,1)
if(makeMonsterAnimation.length<=50)
{
        barrier_gameplay = []
    makebarrier(barrier_gameplay)
}

  if(makeMonsterAnimation.length <= 0)
  {
    this.new_Round = false;
  }
}

OnKeyPressed()
{
  if(!this.black_Scene&&!this.new_Round)
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
 if (key == 'z' && attackArray.length == 0 && !playerArray[0].IsPlayerDie &&!this.pause) {
  fire_sound.play();
  attackArray.push(new bullet(playerArray[0].position_x));
}
if (key == 'u') {
  player1_Score += 100
  player2_Score += 90
}

if (key == 'a') {
  currentlevel.monster.splice(0,10)   
}

if(keyCode == 13)
{

  if(Scene.pause)
  {
    Scene.pause = false;
  }
  else
  {
    Scene.pause = true;
    pause_sound.play()
  }
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
      u.makemonster(currentlevel);
    }
  }

  for (let m of currentlevel.monster)
  {
    if(m.position_y>400)
    {
      playerArray[0].life = -1;
      playerArray[0].IsPlayerDie = true

    }
  }

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

  if(currentlevel.bullet.length > 0 && currentlevel.bullet[0].crashLandBullet())
  {
    monsterBulletEffectTimer2 = frameCount
    crash_effect_get_position(currentlevel.bullet[0]);
    c.crash_one(currentlevel.bullet)
    currentlevel.fire = false
  }
  if (frameCount < monsterBulletEffectTimer + 5) {
    image(image_bullet_break, mx, my, 20, 20);
  } else if (frameCount < monsterBulletEffectTimer2 + 5) {
    image(image_bullet_break, mx, my-15, 20, 20);
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

}

function crash_effect_get_position (a) {
  x = a.position_x;
  y = a.position_y;
  mx = a.position_x;
  my = a.position_y;
}

function callUFO_1() {
  UFO_1Array.push(new UFO_1());
}

function bullet_UFO_1_crash() {
  return c.return_delete(attackArray, UFO_1Array)
}

function each_bullet_crash() {
  return c.return_delete(attackArray, currentlevel.bullet)
}

function bullet_removed(bullet_name){
  bulletEffectTimer = frameCount
  crash_effect_get_position(bullet_name[0]);
  c.crash_one(bullet_name);
}

function draw_text() {
  push()
  fill(255)
  textSize(17);
  text('HIGH\n SCORE', 379, 50);
  if(highScore < 10000){
    text('0' + highScore, 396, 104);
  } else {
    text(highScore, 396, 104);s
  }
  text('1UP', 379, 140);
  if(player1_Score < 10){
    text('0000' + player1_Score, 396, 176);
  }else if(player1_Score < 100){
    text('000' + player1_Score, 396, 176);
  }else if(player1_Score < 1000){
    text('00' + player1_Score, 396, 176);
  }else if(player1_Score < 10000){
    text('0' + player1_Score, 396, 176);
  } else {
    text(player1_Score, 396, 176);
  }

  text('2UP', 379, 212);
  if(player2_play){
    if(player2_Score < 10){
      text('0000' + player2_Score, 396, 248);
    }else if(player2_Score < 100){
      text('000' + player2_Score, 396, 248);
    }else if(player2_Score < 1000){
      text('00' + player2_Score, 396, 248);
    }else if(player2_Score < 10000){
      text('0' + player2_Score, 396, 248);
    } else {
      text(player2_Score, 396, 248);
    }
  }

  text('ROUND', 399, 290);
  var Round 
  if(player1)
  {
    Round = player1_Round
  }

  else if(player2)
  {
    Round = player2_Round
  }
  
  if(Round < 10){
    text('0' + Round, 447, 322);
  } else if (Round < 100) {
    text(Round, 447, 322);
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