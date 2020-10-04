//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
class level {

  constructor(level, playerlevel) {
    this.time = 0;
    this.timeElapsed = 0;
    this.rightmove = true;
    this.downmove = false;
    this.monster = [];
    this.movespeed = 0.01;
    this.playerlevel = ((playerlevel-1)%8)*16
    this.frame=0;
    this.k = 0;
    this.time = 0;
    this.i = 0
    this.j = 0
    for (var i = level.length - 1; i > -1; i--) {
      for (var j = 0; j < level[i].length; j++) {
        switch (level[i][j]) {
          case 0:
            this.k--
            break;
          case 1:
            this.monster[this.k] = {
              type: 1,
              position_x: 1 + j * 32,
              position_y: 81+this.playerlevel + (i * 32) ,
              x_size: 16,
              y_size: 16,
              point: 10,
              color: 0,
              frame_count:0
            }
            break;

          case 2:
            this.monster[this.k] = {
              type: 2,
              position_x: 1 + j * 32,
              position_y: 81 + this.playerlevel + (i * 32),
              x_size: 14,
              y_size: 16,
              point: 20,
              color: 0,
              frame_count:0
            }
            break;

          case 3:
            this.monster[this.k] = {
              type: 3,
              position_x: 1 + j * 32,
              position_y: 81 +this.playerlevel+ (i * 32),
              x_size: 12,
              y_size: 14,
              point: 30,
              color: 0,
              frame_count:0
            }
            break;
          case 4:
            this.monster[this.k] = {
              type: 4,
              position_x: 1 + j * 32,
              position_y: 81 +this.playerlevel+ (i * 32),
              x_size: 10,
              y_size: 12,
              point: 30,
              color: 0,
              frame_count:0
            }
            break;
        }
        this.k++
      }
    }
  }

color()
{

for (var i = 0; i < this.monster.length; i++) {


if(GREEN_ZONE<this.monster[i].position_y&&this.monster[i].position_y<=BLUE_ZONE)
{
  this.monster[i].color= monsterColor[1]
}
else if(BLUE_ZONE<this.monster[i].position_y&&this.monster[i].position_y<=PINK_ZONE)
{
  this.monster[i].color= monsterColor[2]
}
else if(PINK_ZONE<this.monster[i].position_y&&this.monster[i].position_y<=YELLOW_ZONE)
{
  this.monster[i].color= monsterColor[3]
}
else if(YELLOW_ZONE<this.monster[i].position_y)
{
  this.monster[i].color= monsterColor[4]
}
else
{
  this.monster[i].color= monsterColor[0] 
}
}
}

  draw() {
push()
imageMode(CORNER)



for (var i = 0; i < this.monster.length; i++) {




switch(this.monster[i].type)
{

case 1:
var frame = octopus_animation[this.monster[i].color]
image(octopus_image, this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size,frame[this.monster[i].frame_count].x,frame[this.monster[i].frame_count].y,frame[this.monster[i].frame_count].w,frame[this.monster[i].frame_count].h)


break;

case 2:
var frame = crab_animation[this.monster[i].color]
image(crab_image, this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size,frame[this.monster[i].frame_count].x,frame[this.monster[i].frame_count].y,frame[this.monster[i].frame_count].w,frame[this.monster[i].frame_count].h)


break;

case 3:
var frame = squid_animation[this.monster[i].color]
image(squid_image, this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size,frame[this.monster[i].frame_count].x,frame[this.monster[i].frame_count].y,frame[this.monster[i].frame_count].w,frame[this.monster[i].frame_count].h)


break;

case 4:
var frame = baby_animation[this.monster[i].color]
image(baby_image, this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size,frame[this.monster[i].frame_count].x,frame[this.monster[i].frame_count].y,frame[this.monster[i].frame_count].w,frame[this.monster[i].frame_count].h)


break;

}



}
pop()
}



  movecheck() {
    if(this.i==0)
   {
     for (var i = 0; i < this.monster.length; i++) {
      if (this.monster[i].position_x >= monster_move_maximum && this.rightmove) {
        this.rightmove = false;
        this.downmove = true;
      }
      if (this.monster[i].position_x <= monster_move_minimum && !this.rightmove) {
        this.rightmove = true;
        this.downmove = true;
      }
    }
  }
  }
  update()
  {
    if(this.monster.length > 0)
    {
     this.color()
     this.movecheck()
     this.animation()
     this.move()
     this.i_check()
   }
  }
animation()
{
this.monster[this.i].frame_count=(this.monster[this.i].frame_count+1)%2;
}
i_check()
{
  if (this.i >= this.monster.length) {
      this.i = 0
      this.timeElapsed = 0;
      this.downmove = false;
    } 
}
  move() {
    this.timeElapsed += (millis() - this.time) / 1000;
   if (this.timeElapsed >= this.i*this.movespeed) {  
     if (this.downmove) {
        this.monster[this.i].position_y += 16;
      } else if (this.rightmove) {
        this.monster[this.i].position_x += 4;
      } else {
        this.monster[this.i].position_x -= 4;
      }
      this.i +=1
    }
    this.time = millis()
  }
}




const monster_move_minimum = 1;
const monster_move_maximum = 192 * 2 - 8 * 2;
const play_scene_maximumX = 384;
const play_scene_maximumY = 448;
const GREEN_ZONE = 144
const BLUE_ZONE = 208
const PINK_ZONE = 272
const YELLOW_ZONE = 336
const LEVEL_1 = [
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
const LEVEL_12 = [
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 0, 2, 2, 0, 2, 2, 0, 3, 3],
  [1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
const LEVEL_14 = [
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [3, 3, 3, 0, 2, 2, 2, 0, 3, 3, 3],
  [1, 2, 2, 2, 0, 1, 0, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
const LEVEL_16 = [
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [4, 4, 2, 0, 3, 3, 3, 4, 2, 4, 4],
  [4, 4, 3, 0, 2, 3, 2, 0, 3, 4, 4],
  [1, 1, 0, 2, 2, 2, 2, 2, 0, 1, 1],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
const LEVEL_17 = [
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]
]

// var octopus_image = 0;
// var octopus_data = 0;
// var squid_image = 0;
// var squid_data = 0;
// var crab_image = 0;
// var crab_data = 0;
// var baby_image = 0;
// var baby_data = 0;
// var dead_image = 0;
// var dead_data = 0;
// var makebaby_image = 0;
// var makebaby_data = 0;

// monsterColor = ["green","blue","pink","yellow","red"]

// var octopus_color = 0;
// var squid_color = 0;
// var crab_color = 0;
// var baby_color = 0;
// var dead_color = 0;
// var makebaby_color = 0;
// var octopus_animation = [];
// var squid_animation = [];
// var crab_animation = [];
// var baby_animation = [];
// var dead_animation = [];
// var makebaby_animation = [];


// function monster_image_setup(images,datas,ani)
// {

//  for (let name of monsterColor) {
//     let frames = [];
//     for (let frames_info of datas.frames) {
//       if (!frames_info.filename.includes(name))
//         continue;
//       frames.push(frames_info.frame);
//     }
//     ani[name] = frames;
// }
// }