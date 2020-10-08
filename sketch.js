//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020


//전달사항
//열심히 하자 얘들아
var attackArray = [];
var UFO_1Array = [];
var playerArray = [];
var randomSwitch
let x;
let y;
var bulletEffectTimer;
var UFOEffectTimer;
var playerlevel = 12;
var currentlevel = new level(LEVEL_17,playerlevel);
var barrier_gameplay = [];


function setup() {
 
 setup_every_monster_image()

 createCanvas(480, 448);
 imageMode(CENTER);
 randomSwitch = round(random(1))
 setInterval(function() {
  randomSwitch = round(random(1))
}, 5000);

 barrier_gameplay.push(new barrier(200,350));

}


c = new crash();


function draw() {
  background(0);



barrier_gameplay[0].generate();
barrier_gameplay[0].update();

for(var bullet_count = 0;bullet_count<attackArray.length;bullet_count++){
  barrier_gameplay[0].hitRange(attackArray[bullet_count],'player');
}

  playerArray.push(new player());
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
    barrier_gameplay[0].bulletCheck('player');
  }
  if (key == 'u') {
    callUFO_1();
  }
}

function callUFO_1() {
  UFO_1Array.push(new UFO_1());
}

function crash_effect_get_position(a) {
  x = a.position_x;
  y = a.position_y;
}

function bullet_UFO_1_crash() {
  return c.return_delete(attackArray, UFO_1Array)
}

function bullet_removed(){
  bulletEffectTimer = frameCount
  crash_effect_get_position(attackArray[0]);
  c.crash_one(attackArray)
}

