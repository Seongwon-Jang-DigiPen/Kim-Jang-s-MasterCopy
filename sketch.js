//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020


//전달사항
//열심히 하자 얘들아
var attackArray = [];
var UFO_1Array = [];
var UFO_2Array = [];
var playerArray = [];

var randomSwitch
let x;
let y;
var bulletEffectTimer;
var UFOEffectTimer;
var playerlevel = 12;
var Round = 1;
var currentlevel = new level(LEVEL_17,playerlevel);
var barrier_gameplay = [];
var highScore = 5000;
let player2 = false;

function setup() {

 setup_every_monster_image()

 createCanvas(480, 448);

 imageMode(CENTER)


 barrier_gameplay.push(new barrier(200,350));
}


c = new crash();


function draw() {
  background(0);

barrier_gameplay[0].generate();
barrier_gameplay[0].update();
barrier_gameplay[0].draw_effect();

for(var bullet_count = 0;bullet_count<attackArray.length;bullet_count++){
  barrier_gameplay[0].hitRange(attackArray[bullet_count],'player');
}

  playerArray.push(new player());
  playerArray[0].update();
  playerArray[0].draw();

  currentlevel.color();
  currentlevel.draw();
  currentlevel.update();


// for(monster_hit_check = 0;monster_hit_check<currentlevel.monster.length;monster_hit_check ++){
//   barrier_gameplay[0].hitRange(currentlevel.monster[monster_hit_check]);
// }
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
  }
for (let u of UFO_2Array) {
    u.draw();
    u.update();
    u.canmakecheck(currentlevel.monster)
    u.makemonster(currentlevel)
  }


  draw_life()
  draw_text();

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

function keyPressed() {
  if (key == 'z' && attackArray.length == 0) {
    attackArray.push(new bullet(playerArray[0].position_x));
  }
  if (key == 'u') {
    callUFO_1();
  }
}

function crash_effect_get_position (a) {
    x = a.position_x;
    y = a.position_y;
}

function callUFO_1() {
  UFO_2Array.push(new UFO_2());
}

function bullet_UFO_1_crash() {
  return c.return_delete(attackArray, UFO_1Array)
}

function bullet_removed(bullet_name){
  bulletEffectTimer = frameCount
  crash_effect_get_position(bullet_name[0]);
  // c.crash_one(attackArray)
  c.crash_one(bullet_name);
}

function draw_text() {
    push()
fill(255)
  textFont(Font);
  textSize(17);
  text('HIGH\n SCORE', 385, 50);
  if(highScore < 10000){
    text('0' + highScore, 402, 104);
} else {
    text(highScore, 402, 104);
}
  text('1UP', 385, 140);
    if(playerArray[0].currentScore < 10){
        text('0000' + playerArray[0].currentScore, 402, 176);
    }else if(playerArray[0].currentScore < 100){
        text('000' + playerArray[0].currentScore, 402, 176);
    }else if(playerArray[0].currentScore < 1000){
        text('00' + playerArray[0].currentScore, 402, 176);
    }else if(playerArray[0].currentScore < 10000){
        text('0' + playerArray[0].currentScore, 402, 176);
    } else {
        text(playerArray[0].currentScore, 402, 176);
    }

  text('2UP', 385, 212);
  if(player2){
    if(p2CurrentScore < 10){
        text('0000' + p2CurrentScore, 402, 248);
    }else if(p2CurrentScore < 100){
        text('000' + p2CurrentScore, 402, 248);
    }else if(p2CurrentScore < 1000){
        text('00' + p2CurrentScore, 402, 248);
    }else if(p2CurrentScore < 10000){
        text('0' + p2CurrentScore, 402, 248);
    } else {
        text(p2CurrentScore, 402, 248);
    }
  }
  text('ROUND', 385, 290);
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