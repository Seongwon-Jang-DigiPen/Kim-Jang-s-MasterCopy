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

function preload() {
  image_player = loadImage('playerSprites/Player.png');
  image_player_dead_1 = loadImage('playerSprites/Player_dead_1.png');
  image_player_dead_2 = loadImage('playerSprites/Player_dead_2.png');
  image_bullet_break = loadImage('playerSprites/Bullet_break.png');
  image_UFO_1 = loadImage('enemySprites/UFO1_pink.png')
  image_UFO_2 = loadImage('enemySprites/UFO2_pink.png')
  image_UFO_1_dead = loadImage('enemySprites/UFO_dead_pink_1.png')
  image_UFO_2_dead = loadImage('enemySprites/UFO_dead_pink_2.png')
}

function setup() {
  createCanvas(480, 448);
  imageMode(CENTER)
  randomSwitch = round(random(1))
  setInterval(function() {
    randomSwitch = round(random(1))
  }, 5000);
}

p = new player();
c = new crash();

function draw() {
  background(0);
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
}

function keyPressed() {
  if (key == 'z' && attackArray.length == 0) {
    attackArray.push(new bullet(p.position_x));
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