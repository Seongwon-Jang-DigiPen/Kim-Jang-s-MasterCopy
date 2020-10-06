<<<<<<< HEAD
//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020

//전달사항
//열심히 하자 얘들아
var attackArray = [];
var UFO_1Array = [];
var randomSwitch
let x;
let y;
var bulletEffectTimer;
var UFOEffectTimer;
var playerlevel = 1;
var currentlevel = new level(LEVEL_16,playerlevel);
var barrier_gameplay = [];


function setup() {
 
 setup_every_monster_image()

  createCanvas(480, 448);
  imageMode(CENTER)
  randomSwitch = round(random(1))
  setInterval(function() {
    randomSwitch = round(random(1))
  }, 5000);

  barrier_gameplay.push(new barrier(200,350));

}

p = new player();
c = new crash();


function draw() {
  background(0);


barrier_gameplay[0].generate();
barrier_gameplay[0].update();
for(var bullet_count = 0;bullet_count<attackArray.length;bullet_count++){
  barrier_gameplay[0].hitRange(attackArray[bullet_count]);
}


currentlevel.color();
currentlevel.draw();
currentlevel.update();
currentlevel.attack(p);

  p.update();
  p.draw();
  
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
    console.log(attackArray[0].deleteBullet())
    UFOEffectTimer = frameCount
    crash_effect_get_position(UFO_1Array[0]);
    c.crash_two(attackArray, UFO_1Array)

  } else if (attackArray.length > 0 && attackArray[0].crashWallBullet()) {
    bulletEffectTimer = frameCount
    crash_effect_get_position(attackArray[0]);
    c.crash_one(attackArray)
  }
  if (frameCount < bulletEffectTimer + 5) {
    image(image_bullet_break, x, y + 20, 20, 20);
  } else if (frameCount < UFOEffectTimer + 5) {
    image(image_UFO_1_dead, x, y, 50, 20);
  }

  if(attackArray.length > 0) {
     c.delete(attackArray[0], currentlevel)
  }
}

function keyPressed() {
  if (key == 'z' && attackArray.length == 0) {
    attackArray.push(new bullet(p.position_x));
    barrier_gameplay[0].bulletCheck();
  }
  if (key == 'u') {
    callUFO_1();
  }
}

function callUFO_1() {
  UFO_1Array.push(new UFO_1());
}

function bullet_UFO_1_crash() {
  return c.return_delete(attackArray, UFO_1Array)
}

function crash_effect_get_position(a) {
  x = a.position_x;
  y = a.position_y;

}