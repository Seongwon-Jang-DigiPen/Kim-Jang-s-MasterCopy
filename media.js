var octopus_image = 0;
var octopus_data = 0;
var squid_image = 0;
var squid_data = 0;
var crab_image = 0;
var crab_data = 0;
var baby_image = 0;
var baby_data = 0;
var dead_image = 0;
var dead_data = 0;
var makebaby_image = 0;
var makebaby_data = 0;

monsterColor = ["green","blue","pink","yellow","red"]

var octopus_color = 0;
var squid_color = 0;
var crab_color = 0;
var baby_color = 0;
var dead_color = 0;
var makebaby_color = 0;
var octopus_animation = [];
var squid_animation = [];
var crab_animation = [];
var baby_animation = [];
var dead_animation = [];
var makebaby_animation = [];

var bullet_image  = 0;
var bullet_data = 0;
var bullet_animation = []
var bulletName = ["bullet1","bullet2","bullet3"]
var image_barrier_left = [],image_barrier_right = [], image_barrier_square = [],image_barrier_bottom_edge,image_blackspace;//barrier image variable



function preload() {
  image_player = loadImage('playerSprites/Player.png');
  image_player_dead_1 = loadImage('playerSprites/Player_dead_1.png');
  image_player_dead_2 = loadImage('playerSprites/Player_dead_2.png');
  image_bullet_break = loadImage('playerSprites/Bullet_break.png');
  image_UFO_1 = loadImage('enemySprites/UFO1_pink.png')
  image_UFO_2 = loadImage('enemySprites/UFO2_pink.png')
  image_UFO_1_dead = loadImage('enemySprites/UFO_dead_pink_1.png')
  image_UFO_2_dead = loadImage('enemySprites/UFO_dead_pink_2.png')

  octopus_image = loadImage('enemySprites/Octopus.png')
  octopus_data = loadJSON('enemySprites/Octopus.json');
  squid_image  = loadImage('enemySprites/Squid.png')
  squid_data = loadJSON('enemySprites/Squid.json')
   crab_image = loadImage('enemySprites/Crab.png')
   crab_data = loadJSON('enemySprites/Crab.json')
  baby_image = loadImage('enemySprites/baby.png')
  baby_data = loadJSON('enemySprites/baby.json')
  dead_image = loadImage('enemySprites/dead.png')
  dead_data = loadJSON('enemySprites/dead.json')
  makebaby_image = loadImage('enemySprites/makebaby.png')
  makebaby_data = loadJSON('enemySprites/makebaby.json')

  bullet_image = loadImage('enemySprites/bullet.png')
  bullet_data = loadJSON('enemySprites/bullet.json')

  for(var bar_square = 1;bar_square<=15;bar_square++){
    image_barrier_square[bar_square-1] = loadImage('barrier_sprites/barrier_squar/barrier_squar_'+bar_square+'.png');
  }
  for(var bar_left = 1;bar_left<=6;bar_left++){
    image_barrier_left[bar_left-1] = loadImage('barrier_sprites/barrier_left/barrier_top_left_'+bar_left+'.png');
  }
  for(var bar_right = 1;bar_right<=6;bar_right++){
    image_barrier_right[bar_right-1] = loadImage('barrier_sprites/barrier_right/barrier_top_right_'+bar_right+'.png');
  }
  image_barrier_bottom_edge = loadImage('barrier_sprites/barrier_bottom.png');
  image_blackspace = loadImage('barrier_sprites/barrier_blackspace.png');//barrier image load

}

function setup_every_monster_image()
{
  monster_image_setup(octopus_image,octopus_data,octopus_animation)
  monster_image_setup(squid_image,squid_data,squid_animation)
  monster_image_setup(crab_image,crab_data,crab_animation)
  monster_image_setup(baby_image,baby_data,baby_animation)
  monster_image_setup(dead_image,dead_data,dead_animation)
  monster_image_setup(makebaby_image,makebaby_data,makebaby_animation)
  bullet_image_setup(bullet_image,bullet_data,bullet_animation)
 
}

function monster_image_setup(images,datas,ani)
{

 for (let name of monsterColor) {
    let frames = [];
    for (let frames_info of datas.frames) {
      if (!frames_info.filename.includes(name))
        continue;
      frames.push(frames_info.frame);
    }
    ani[name] = frames;
}
}
function bullet_image_setup(images,datas,ani)
{
 for (let name of bulletName) {
    let frames = [];
    for (let frames_info of datas.frames) {
      if (!frames_info.filename.includes(name))
        continue;
      frames.push(frames_info.frame);
    }
    ani[name] = frames;
}

}