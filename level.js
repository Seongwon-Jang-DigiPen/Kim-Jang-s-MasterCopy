//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
class level {

  constructor(level, playerlevel) {

    this.monster = [];

    this.time = 0;
    this.timeElapsed = 0;
    this.monstercount = 0;
    this.rightmove = true;
    this.downmove = false;
    this.movespeed = 0.02;
    this.level = playerlevel
    this.playerlevel = ((playerlevel - 1) % 8) * 16

    this.stiffen = false;
    this.stiffenElapsed = 0;
    this.monster_generate(level)

    this.fire = false;
    this.bullet = [0];
    this.shootcount = 0
    this.targeting = [true,true,true,false,false,false,false]
  }


  update() 
  {
    this.monsterDeadcheck()

    if (this.monster.length > 0 && !this.stiffen) {
      this.position_check();
      this.color();
      this.movecheck();
      this.move();

    }

    if (this.stiffen) {
      this.stiffenElapsed += (millis() - this.time) / 1000;
      if (this.stiffenElapsed >= 0.3) {
        this.stiffenElapsed = 0;
        this.stiffen = false;
      }

    }
    this.time = millis();
  }


  monster_generate(level) 
  {
    var k = 0;
    for (var i = level.length - 1; i > -1; i--) {
      for (var j = 0; j < level[i].length; j++) {
        switch (level[i][j]) {
          case 0:
          k--
          break;
          case 1:
          this.monster[k] = {
            type: OCTOPUS,
            position_x: j * MONSTERDISTANCE,
            position_y: MONSTERYOFFSET + this.playerlevel + (i * MONSTERDISTANCE),
            x_size: 16,
            y_size: 16,
            point: 10,
            color: 0,
            frame_count: 0,
            infront: false,
            dead:false
          }
          break;

          case 2:
          this.monster[k] = {
            type: CRAB,
            position_x: j * MONSTERDISTANCE,
            position_y: MONSTERYOFFSET + this.playerlevel + (i * MONSTERDISTANCE),
            x_size: 14,
            y_size: 16,
            point: 20,
            color: 0,
            frame_count: 0,
            infront: false,
            dead:false
          }
          break;

          case 3:
          this.monster[k] = {
            type: SQUID,
            position_x:  j * MONSTERDISTANCE,
            position_y: MONSTERYOFFSET + this.playerlevel + (i * MONSTERDISTANCE),
            x_size: 12,
            y_size: 14,
            point: 30,
            color: 0,
            frame_count: 0,
            infront: false,
            dead:false
          }
          break;
          case 4:
          this.monster[k] = {
            type: BABY,
            position_x: j * MONSTERDISTANCE,
            position_y: MONSTERYOFFSET + this.playerlevel + (i * MONSTERDISTANCE),
            x_size: 10,
            y_size: 12,
            point: 30,
            color: 0,
            frame_count: 0,
            infront: false,
            dead:false
          }
          break;
        }
        k++
      }
    }
  }
  color() 
  {

    for (var i = 0; i < this.monster.length; i++) {


      if (GREEN_ZONE < this.monster[i].position_y && this.monster[i].position_y <= BLUE_ZONE) {
        this.monster[i].color = monsterColor[1]
      } else if (BLUE_ZONE < this.monster[i].position_y && this.monster[i].position_y <= PINK_ZONE) {
        this.monster[i].color = monsterColor[2]
      } else if (PINK_ZONE < this.monster[i].position_y && this.monster[i].position_y <= YELLOW_ZONE) {
        this.monster[i].color = monsterColor[3]
      } else if (YELLOW_ZONE < this.monster[i].position_y) {
        this.monster[i].color = monsterColor[4]
      } else {
        this.monster[i].color = monsterColor[0]
      }   
    }
  }

  draw() 
  {
    push()
    imageMode(CORNER)


    for (var i = 0; i < this.monster.length; i++) {

      if(this.monster[i].dead)
      {
        var frame = dead_animation[this.monster[i].color]
        image(dead_image, this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size, frame[0].x, frame[0].y, frame[0].w, frame[0].h)

      }
      else
      {
        switch (this.monster[i].type) {

          case OCTOPUS:
          var frame = octopus_animation[this.monster[i].color]
          image(octopus_image, this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size, frame[this.monster[i].frame_count].x, frame[this.monster[i].frame_count].y, frame[this.monster[i].frame_count].w, frame[this.monster[i].frame_count].h)


          break;

          case CRAB:
          var frame = crab_animation[this.monster[i].color]
          image(crab_image, this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size, frame[this.monster[i].frame_count].x, frame[this.monster[i].frame_count].y, frame[this.monster[i].frame_count].w, frame[this.monster[i].frame_count].h)


          break;

          case SQUID:
          var frame = squid_animation[this.monster[i].color]
          image(squid_image, this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size, frame[this.monster[i].frame_count].x, frame[this.monster[i].frame_count].y, frame[this.monster[i].frame_count].w, frame[this.monster[i].frame_count].h)


          break;

          case BABY:
          var frame = baby_animation[this.monster[i].color]
          image(baby_image, this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size, frame[this.monster[i].frame_count].x, frame[this.monster[i].frame_count].y, frame[this.monster[i].frame_count].w, frame[this.monster[i].frame_count].h)


          break;
        }
      }


    }
    pop()
  }

  movecheck() 
  {
    if (this.monstercount >= this.monster.length) {
      this.monstercount = 0
      this.timeElapsed = 0;
      this.downmove = false;
      for (var j = 0; j < this.monster.length; j++) {
        if (this.monster[j].position_x >= monster_move_maximum && this.rightmove) {
          this.rightmove = false;
          this.downmove = true;
        }
        if (this.monster[j].position_x <= monster_move_minimum && !this.rightmove) {
          this.rightmove = true;
          this.downmove = true;
        }
      }
    }
  }


  animation() 
  {

    this.monster[this.monstercount].frame_count = (this.monster[this.monstercount].frame_count + 1) % 2
  }

  move() 
  {

    this.timeElapsed += (millis() - this.time) / 1000;
    if (this.timeElapsed >= this.monstercount * this.movespeed) {

      this.animation();

      if (this.downmove) {
        this.monster[this.monstercount].position_y += 16;
      }
      if (this.rightmove) {
        this.monster[this.monstercount].position_x += 4;
      } else {
        this.monster[this.monstercount].position_x -= 4;
      }

      this.monstercount += 1
    }
    this.time = millis()
  }

  random_attack(player) 
  {
    if(!this.fire)
    {
      var infrontvalue = 0;
      for (var i = 0; i < this.monster.length; i++) {
       if(this.monster[i].infront)
       {
         infrontvalue+=1;
       }
     }

     var randomNumber = round(random(0,infrontvalue))

     for (var i = 0; i < this.monster.length; i++) {
       if(this.monster[i].infront)
       {
         infrontvalue-=1;
       }
       if(randomNumber == infrontvalue)
       {
        var monster_centerX = this.monster[i].position_x + this.monster[i].x_size / 2
        this.bullet[0] = new monster_bullet(monster_centerX, this.monster[i].position_y + this.monster[i].y_size)
        this.fire = true
        this.shootcount +=1;
        break;
      }
    }

  }
}

target_attack(player) 
{
  if (!this.fire) {
    for (var i = 0; i < this.monster.length; i++) {
      if(this.monster[i].infront)
      {
        var monster_centerX = this.monster[i].position_x + this.monster[i].x_size / 2
        if (monster_centerX > player.position_x-player.width/2 && monster_centerX < player.position_x + player.width/2) {
          this.bullet[0] = new monster_bullet(monster_centerX, this.monster[i].position_y + this.monster[i].y_size)
          this.fire = true
          this.shootcount +=1;
          break;
        }
      }
    }
  }
}

position_check()
{
  if(this.monstercount==0)
  { 
    for (var i = 0; i < this.monster.length; i++) {
      this.monster[i].infront = true;
      for (var j = 0; j < this.monster.length; j++) {
        if(this.monster[i].position_x==this.monster[j].position_x&&this.monster[i].position_y<this.monster[j].position_y)
        {
          this.monster[i].infront =false;
          break;
        }
      }
    }
  }
}

attack(player) 
{
  if (this.monster.length > 0) {
    if(this.targeting[this.shootcount]&& !this.stiffen)
    {
      this.target_attack(player)
    }
    else if(!this.stiffen)
    {
      this.random_attack(player)
    }
    if(this.shootcount >= this.targeting.length)
    {
      this.shootcount = 0;
    }
    if (this.fire)  
    {
      this.bullet[0].draw()
      this.bullet[0].update()

      if(this.bullet[0].crashWallBullet())
      {
        this.bullet.splice(0,1)
        this.fire = false
      }

    }
  }
}

monsterDeadcheck()
{


 for (var i = 0; i < this.monster.length; i++) 
 {
   if(this.monster[i].dead && this.monster[i].type == CRAB && )
   {

   }
   else{
  if(this.monster[i].dead&& !this.stiffen)
  {
   if((this.monstercount>i||this.monstercount==this.monster.length)&&this.monstercount!=0)
   {
    this.monstercount -= 1;
  }
  this.monster.splice(i, 1);
}
}
}  
}

// createmini()
// {
//   for (var i = 0; i < this.monster.length; i++) 
//   {
//     if(this.monster[i].dead && this.monster[i].type==CRAB)
//     {

//     }
//     if(this.monster[i].position_y==this.monster[i+1].position_y && this.monster[i].position_x<this.monster[i+1].position_x&&this.monster[i].position_x+32>=this.monster[i+1].position_x)
//     {


//     }
//   }
// }
}