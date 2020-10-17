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



var move1_sound = 0
var move2_sound = 0
var move3_sound = 0
var move4_sound = 0
var fire_sound = 0
var invader_die_sound = 0
var pause_sound = 0
var player_die_sound = 0
var ufo_sound = 0
var ufo_die_sound = 0
var waiting_pattern = [];
var mainscene_squid_image = [];
var circle_c_image;
var info_scene_image =[];

function preload() {
  Font = loadFont('Font/PressStart2P-Regular.ttf');
  image_player = loadImage('playerSprites/Player.png');
  image_player_R = loadImage('playerSprites/Player_red.png')
  image_player_dead_1 = loadImage('playerSprites/Player_dead_1.png');
  image_player_dead_2 = loadImage('playerSprites/Player_dead_2.png');
  image_bullet_break = loadImage('playerSprites/Bullet_break.png');
  image_UFO_1 = loadImage('enemySprites/UFO1_pink.png')
  image_UFO_2 = loadImage('enemySprites/UFO2_pink.png')
  image_UFO_1_dead = loadImage('enemySprites/UFO_dead_pink_1.png')
  image_UFO_2_dead = loadImage('enemySprites/UFO_dead_pink_2.png')
  image_UFO_1_R = loadImage('enemySprites/UFO1_red.png')
  image_UFO_2_R = loadImage('enemySprites/UFO2_red.png')
  image_UFO_1_dead_R = loadImage('enemySprites/UFO_dead_red_1.png')
  image_UFO_2_dead_R = loadImage('enemySprites/UFO_dead_red_2.png')
  image_UFO_green = loadImage('enemySprites/UFO1_green.png')
  image_UFO_blue = loadImage('enemySprites/UFO1_blue.png')
  image_SOS_blue = loadImage('enemySprites/Octopus_blue.png')
  image_SOS_green = loadImage('enemySprites/Octopus_green.png')
  image_SOS_pink = loadImage('enemySprites/Octopus_pink.png')
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
  makebaby_image = loadImage('enemySprites/Makebaby.png')
  makebaby_data = loadJSON('enemySprites/Makebaby.json')

  bullet_image = loadImage('enemySprites/bullet.png')
  bullet_data = loadJSON('enemySprites/bullet.json')


  // sound_sos = loadSound('sound/sos.mp3')
  // move1_sound = loadSound('sound/note1.wav')
  // move2_sound = loadSound('sound/note2.wav')
  // move3_sound = loadSound('sound/note3.wav')
  // move4_sound = loadSound('sound/note4.wav')
  fire_sound = loadSound('sound/fire.wav')
  
  // invader_die_sound = loadSound('sound/invader_die.wav')
  // pause_sound  = loadSound('sound/pause.mp3')
  // player_die_sound = loadSound('sound/player_die.wav')
  // ufo_sound = loadSound('sound/ufo.wav')
  // ufo_die_sound = loadSound('sound/ufo_die.wav')

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
  image_barrier_square.push(image_blackspace);
  image_barrier_left.push(image_blackspace);
  image_barrier_right.push(image_blackspace);
  for(var i = 1; i <=3;i++){
    waiting_pattern[i-1] = createVideo('waiting_video/pattern_'+i+'.mp4');
    waiting_pattern[i-1].hide();
  }
  for(var i = 0;i<2;i++){
    mainscene_squid_image[i] = loadImage('mainmenu/choose_player_'+i+'.png');
  }
  for(var i = 1;i<=4;i++){
    mainscene_squid_image[1+i] = loadImage('mainmenu/Enemy_bullet3_'+i+'.png');
  }
  for(var i = 1;i<=2;i++){
    mainscene_squid_image[5+i] = loadImage('mainmenu/Squid_green_'+i+'.png');
  }
  circle_c_image = loadImage('mainmenu/circle_c.png');
  info_scene_image[0] = loadImage('infoScene/reverse_y.png');
  info_scene_image[1] = loadImage('infoScene/red_player_choose.png');
  info_scene_image[2] = loadImage('infoScene/ufo.png');
  info_scene_image[3] = loadImage('infoScene/Crab_green_2.png');
  info_scene_image[4] = loadImage('infoScene/Octopus_blue_2.png');
  info_scene_image[5] = loadImage('infoScene/Squid_green_1.png');
  info_scene_image[6] = loadImage('infoScene/Squid_green_2.png');
  info_scene_image[7] = loadImage('infoScene/fix_y_squid_1.png');
  info_scene_image[8] = loadImage('infoScene/fix_y_squid_2.png');
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