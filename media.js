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