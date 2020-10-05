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

// var image_barrier_left = [],image_barrier_right = [], image_barrier_square = [],image_barrier_bottom_edge,image_blackspace;//barrier image variable


// function preload() {
//   image_player = loadImage('playerSprites/Player.png');
//   image_player_dead_1 = loadImage('playerSprites/Player_dead_1.png');
//   image_player_dead_2 = loadImage('playerSprites/Player_dead_2.png');
//   image_bullet_break = loadImage('playerSprites/Bullet_break.png');
//   image_UFO_1 = loadImage('enemySprites/UFO1_pink.png')
//   image_UFO_2 = loadImage('enemySprites/UFO2_pink.png')
//   image_UFO_1_dead = loadImage('enemySprites/UFO_dead_pink_1.png')
//   image_UFO_2_dead = loadImage('enemySprites/UFO_dead_pink_2.png')

//   octopus_image = loadImage('enemySprites/Octopus.png')
//   octopus_data = loadJSON('enemySprites/Octopus.json');
//   squid_image  = loadImage('enemySprites/Squid.png')
//   squid_data = loadJSON('enemySprites/Squid.json')
//    crab_image = loadImage('enemySprites/Crab.png')
//    crab_data = loadJSON('enemySprites/Crab.json')
//   baby_image = loadImage('enemySprites/baby.png')
//   baby_data = loadJSON('enemySprites/baby.json')
//   dead_image = loadImage('enemySprites/dead.png')
//   dead_data = loadJSON('enemySprites/dead.json')
//   makebaby_image = loadImage('enemySprites/makebaby.png')
//   makebaby_data = loadJSON('enemySprites/makebaby.json')

//   for(var bar_square = 1;bar_square<=15;bar_square++){
//     image_barrier_square = loadImage('barrier/barrier_squar/Barrier_squar_'+bar_square+'.png');
//   }
//   for(var bar_left = 1;bar_left<=6;bar_left++){
//     image_barrier_left = loadImage('barrier/barrier_squar/Barrier_squar_'+bar_left+'.png');
//   }
//   for(var bar_right = 1;bar_right<=6;bar_right++){
//     image_barrier_right = loadImage('barrier/barrier_squar/Barrier_squar_'+bar_right+'.png');
//   }
//   image_barrier_bottom_edge = loadImage('barrier/barrier_bottom.png');
//   image_blackspace = loadImage('barrier/barrier_blackspace.png');//barrier image load

// }

function setup() {
  monster_image_setup(octopus_image,octopus_data,octopus_animation)
  monster_image_setup(squid_image,squid_data,squid_animation)
  monster_image_setup(crab_image,crab_data,crab_animation)
  monster_image_setup(baby_image,baby_data,baby_animation)
  monster_image_setup(dead_image,dead_data,dead_animation)
  monster_image_setup(makebaby_image,makebaby_data,makebaby_animation)


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
    bullet_removed()
  }
  if (frameCount < bulletEffectTimer + 5) {
    image(image_bullet_break, x, y, 20, 20);
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

function bullet_removed(){
    bulletEffectTimer = frameCount
    crash_effect_get_position(attackArray[0]);
    c.crash_one(attackArray)
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