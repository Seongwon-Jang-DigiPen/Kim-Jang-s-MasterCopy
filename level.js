//level.js
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//Seongwon Jang
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class level {

  constructor(level, playerlevel) { //level is in const, player level is player round number

    this.monster = [];
    this.time = 0;
    this.timeElapsed = 0;
    this.monstercount = 0;
    this.rightmove = true;
    this.downmove = false;
    this.movespeed = 0.02;
    this.playerlevel = playerlevel;
    this.monster_y_locate = ((playerlevel - 1) % 8) * 16  // change level to monster y location
    if((playerlevel - 1) % 8 > 5)
      {this.monster_y_locate -=16}
     if((playerlevel - 1) % 8 > 7)
      {this.monster_y_locate -=16}
    this.soundcount = 0;
    this.UFOON =false;

    this.stiffen = false; // if stiffen is true, monster will stop
    this.stiffenElapsed = 0; // stiffen Hold time

    this.monster_generate(level); // make monster in monster[]

    this.fire = false;

    this.bullet = [];
    this.shootcount = 0
    this.targeting = [true,true,true,false,false,false,false] // if true then targeting player and shoot, if false random shoot

    this.behindmonsterdata = [0,0,0,0,0,0,0,0,0,0,0,0]; // some time UFO make monster. this is for UFO

    for(var i=0;i<level[0].length;i++)  // if last line have a monster, check 1
    {
      if(level[0][i] == 0)
      {
        this.behindmonsterdata[i] = 0
      }
      else
      {
        this.behindmonsterdata[i] = 1;
      }
    }
  }


  update() 
  {
    this.monsterDeadcheck() //if monster is dead then 
    this.makebabymove() // after 12round, if you kill the crab, then small baby is come. it is for them

    if (this.monster.length > 0 && !this.stiffen) {
      this.makeUFO() // if monster is less than 30, make UFO
      this.color(); // Colors change depending on the location of the monster.
      if(!playerArray[0].IsPlayerDie){
        this.movecheck(); // if every monster move one time, then monstercount = 0
        this.position_check(); //check the front monster(because only front monster can attack)
        this.move(); //monster is move
      }
    }

    if (this.stiffen) { //stiffen timer
      this.stiffenElapsed += (millis() - this.time) / 1000;
      if (this.stiffenElapsed >= STIFFENTIME) {
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
          this.monster[k] = this.makeOctopus(i,j)
          break;

          case 2:
          this.monster[k] = this.makeCrab(i,j)
          break;

          case 3:
          this.monster[k] = this.makeSquid(i,j)
          break;
          case 4:
          this.monster[k] = this.makeBaby(i,j)
          break;
        }
        k++
      }
    }
  } 
  color() 
  {
    if(!playerArray[0].IsPlayerDie){
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
    } else if (playerArray[0].IsPlayerDie) {
      for (var i = 0; i < this.monster.length; i++) {
        this.monster[i].color = monsterColor[4]
      }
    }
  }

  draw() 
  {
    push()
    imageMode(CORNER)

    for (var i = 0; i < this.monster.length; i++) {

      if(this.monster[i].make)
      {
       var frame = makebaby_animation[this.monster[i].color]
       image(makebaby_image, this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size, frame[0].x, frame[0].y, frame[0].w, frame[0].h)
       if(!this.stiffen)
       {
        this.monster[i].make = false
      } 
    }
    else if(this.monster[i].dead)
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

moveSound()
{
  switch(this.soundcount)
  {
    case 0:
    move1_sound.play();
    break;
    case 1:
    move2_sound.play();
    break;
    case 2:
    move3_sound.play();
    break;
    case 3:
    move4_sound.play();
    break;
  }
  this.soundcount = (this.soundcount +1) % 4;
}

movecheck() 
{
  if (this.monstercount >= this.monster.length) {
    this.moveSound();
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

makeUFO()
{
  if(!this.UFOON&&this.monster.length<30)
  {
    callUFO_1(); 
    this.UFOON = true;
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
      if(this.fire){
        for(var make_barr = 0;make_barr<barrier_num;make_barr++){
          barrier_gameplay[make_barr].m_hitRange(this.bullet[0],this);
        }
      }

      if(this.bullet[0].crashWallBullet())
      {
        this.bullet.splice(0,1)
        this.fire = false
      }

    }
  }
}

monsterDeadcheck(score)
{
  var stagelevel = (this.playerlevel-1)%16

  for (var i = 0; i < this.monster.length; i++) 
  {
    if(this.monster[i].dead && this.monster[i].type == CRAB && 11 <= stagelevel)
    {
      if(player1)
      {
        player1_Score += this.monster[i].point;

      }
      else
      {
        player2_Score += this.monster[i].point;
      }

      this.crabToBaby(i)

      if( this.monster[i].position_x + MONSTERDISTANCE < play_scene_maximumX)
      {
        this.monster.splice(i+1,0,this.returnBaby(i))
        if(i<this.monstercount)
          {this.monstercount += 1}
      }
    }
    else
    {

      if(this.monster[i].dead&& !this.stiffen)
      {
       if((this.monstercount>i||this.monstercount==this.monster.length)&&this.monstercount!=0)
       {
        this.monstercount -= 1;
      }
      if(this.monster[i].column==0)
      {
        this.behindmonsterdata[this.monster[i].row] = 0; 
      }
      if(player1)
      {
        player1_Score += this.monster[i].point;

      }
      else
      {
        player2_Score += this.monster[i].point;
      }
      this.monster.splice(i, 1);
    }
  }
}  
}

returnBaby(i) // crab to Baby (after 12round)
{
  var B ={
    type: BABY,
    position_x: this.monster[i].position_x,
    position_y: this.monster[i].position_y,
    x_size: 10,
    y_size: 12,
    point: 30,
    color: this.monster[i].color,
    frame_count: 0,
    infront: false,
    dead:false,
    make:true,
    makebaby_move:true,
    row:this.monster[i].row+1,
    column:this.monster[i].column
  }
  return B;
}

makebabymove()
{
 for (var i = 0; i < this.monster.length; i++) 
 {
  if(this.monster[i].makebaby_move)
  {
    this.monster[i].position_x +=4;

    if(this.monster[i].position_x >= this.monster[i-1].position_x + MONSTERDISTANCE)
    {
      this.monster[i].position_x = this.monster[i-1].position_x + MONSTERDISTANCE;
      this.monster[i].makebaby_move = false
      if(i<this.monster.length-1)
      {
        if(this.monster[i].position_x <= this.monster[i+1].position_x&&this.monster[i].position_x + MONSTERDISTANCE > this.monster[i+1].position_x)
        {
          this.monster.splice(i+1,1)
          if(i<this.monstercount)
            {this.monstercount -= 1}
        }
      }
    }
  }
}
}

makeOctopus(i,j) // make json(like struct)
{
 var octopus = {
  type: OCTOPUS,
  position_x: j * MONSTERDISTANCE,
  position_y: MONSTERYOFFSET + this.monster_y_locate + (i * MONSTERDISTANCE),
  x_size: 16,
  y_size: 16,
  point: 10,
  color: 0,
  frame_count: 0,
  infront: false,
  dead:false,
  row:j,
  column:i
}  
return octopus;
}

makeCrab(i,j)
{   
  var crab = {
    type: CRAB,
    position_x: j * MONSTERDISTANCE,
    position_y: MONSTERYOFFSET + this.monster_y_locate + (i * MONSTERDISTANCE),
    x_size: 14,
    y_size: 16,
    point: 20,
    color: 0,
    frame_count: 0,
    infront: false,
    dead:false,
    row:j,
    column:i
  }
  return crab;
}

makeSquid(i,j)
{
 var squid = {
  type: SQUID,
  position_x:  j * MONSTERDISTANCE,
  position_y: MONSTERYOFFSET + this.monster_y_locate + (i * MONSTERDISTANCE),
  x_size: 12,
  y_size: 14,
  point: 30,
  color: 0,
  frame_count: 0,
  infront: false,
  dead:false,
  row:j,
  column:i
}
return squid;
}

makeBaby(i,j)
{
 var baby = {
  type: BABY,
  position_x: j * MONSTERDISTANCE,
  position_y: MONSTERYOFFSET + this.monster_y_locate + (i * MONSTERDISTANCE),
  x_size: 10,
  y_size: 12,
  point: 30,
  color: 0,
  frame_count: 0,
  infront: false,
  dead:false,
  row:j,
  column:i
}
return baby;
}

crabToBaby(i)
{
  this.monster[i].type = BABY;
  this.monster[i].x_size = 10;
  this.monster[i].y_size = 12;
  this.monster[i].point = 30;
  this.monster[i].dead = false;
  this.monster[i].make = true
}
makeUFOsquid(i,j,k)
{
  var squid = {
    type: SQUID,
    position_x:  i,
    position_y: j,
    x_size: 12,
    y_size: 14,
    point: 30,
    color: 0,
    frame_count: 0,
    infront: false,
    dead:false,
    row:k,
    column:0
  }
  return squid;
}



}