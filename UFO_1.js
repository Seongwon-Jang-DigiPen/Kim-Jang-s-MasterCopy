//UFO_1.js
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//1st : Daehyeon Kim, 2nd : Seongwon Jang
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class UFO_1 {
  constructor() {
    this.position_x = 0;
    this.position_y = 50;
    this.go_right = true;
    this.width = 40
    this.height = 20
    this.defalt_x = 0
    this.defalt_y = 0
    this.canmake = [];
    this.move = true;
    this.UFOsquidvalue = 0;
    this.IsThisSpecialUFO = false;
    this.IsThisUfo2 = false;
    this.time = 0;
    this.count = 0;
    this.IsUFODie = false;
    this.ufoSound = false
    this.point = 50*(round(random(1,5)))
    this.textsize = 15
    //this is for where UFO will appear
    if(random(0,100)<50)
    {
      this.go_right = false;
      this.position_x = play_scene_maximumX - this.width
    }

    if((currentlevel.playerlevel%16)>8)
    {
      if(random(0,100)<50)
      {
        this.IsThisSpecialUFO = true
        this.point = 500;
      }
    }
        if((currentlevel.playerlevel%16)>11&&!this.IsThisSpecialUFO)
    {
        this.IsThisUfo2 = true
    }
  }


  update() {
    if(!this.ufoSound)
    {
      ufo_sound.loop()
      ufo_sound.play()
      this.ufoSound = true
    }

    if(this.move){
      if (this.go_right && !this.IsUFODie) {
        this.position_x += 1;
      } else if (!this.go_right && !this.IsUFODie) {
        this.position_x -= 1;
      }
    }
  }

  draw() {
    if(!this.IsThisSpecialUFO)
    {
      console.log(this.IsThisSpecialUFO)
    if(!playerArray[0].IsPlayerDie && !this.IsUFODie) {
      image(image_UFO_1, this.position_x, this.position_y, this.width, this.height);
    } else if(playerArray[0].IsPlayerDie && !this.IsUFODie) {
      image(image_UFO_1_R, this.position_x, this.position_y, this.width, this.height);
    }
}
else
{
     if(!playerArray[0].IsPlayerDie && !this.IsUFODie) {
      image(image_UFO_2, this.position_x, this.position_y, this.width, this.height);
    } else if(playerArray[0].IsPlayerDie && !this.IsUFODie) {
      image(image_UFO_2_R, this.position_x, this.position_y, this.width, this.height);
    }
}

  }
// UFO is disappear from screen
  goneUFO() {
    if (this.position_x < 0 || this.position_x >= play_scene_maximumX - this.width) {
      ufo_sound.stop()
      return true
    }
  }
//This is to check crash UFO with Player's bullet
  deleteUFO() {
    if (bullet_UFO_1_crash()) {
      ufo_sound.stop()
      return true
    }
  }

//This is for UFO die effect
  dieScene(c) {
    this.IsUFODie = true;
    this.time+=10
    if(this.count >= 3){
      push()
      textSize(this.textsize)
      fill(242,122,255)
      text(this.point,this.position_x-20,this.position_y+10)
      pop()
    } 
    if(this.count == 6){
      this.IsUFODie = false;
      this.count = 0;
      if(player1)
      {
        player1_Score += this.point;
      }
      else
      {
        player2_Score += this.point;
      }

      c.crash_one(UFO_1Array);
    }
    if(this.time<100&&this.count<3) {
      if(!playerArray[0].IsPlayerDie){
        image(image_UFO_1_dead, this.position_x, this.position_y, this.width, this.height);
      } else if(playerArray[0].IsPlayerDie) {
        image(image_UFO_1_dead_R, this.position_x, this.position_y, this.width, this.height);
      }
    }
    else if(this.time>=100&&this.count<3) {
      if(!playerArray[0].IsPlayerDie){
        image(image_UFO_2_dead, this.position_x, this.position_y, this.width, this.height);
      } else if(playerArray[0].IsPlayerDie) {
        image(image_UFO_2_dead_R, this.position_x, this.position_y, this.width, this.height);
      }
    }
    if(this.time>200) {
      this.time =0
      this.count++
    }
  }
//over 8 level, UFO will make invaders
  makemonster(level)
  {
    this.defalt_x = level.monster[0].position_x-(level.monster[0].row*MONSTERDISTANCE);
    this.defalt_y = level.monster[0].position_y-(level.monster[0].column*MONSTERDISTANCE);

    if(this.move == false)
    {
      level.stiffen = true
      level.monster[this.UFOsquidvalue].position_y +=2;
      if(level.monster[this.UFOsquidvalue].position_y >=this.defalt_y)
      {
        level.monster[this.UFOsquidvalue].position_y = this.defalt_y
        level.stiffen = false;
        this.move = true;
      } 
    }
    else{
      for(var i = 0; i < level.behindmonsterdata.length;i++)
      {
        if(this.position_x == this.defalt_x + (MONSTERDISTANCE*i) && level.behindmonsterdata[i]==0 && this.position_x > MONSTERDISTANCE*2&& this.position_x < play_scene_maximumX - (MONSTERDISTANCE*2))
        {
         this.move = false;
         level.stiffen = true;

         var nextmonsternumber =0;
         var itislast = true; 

         for(var j = i; j < level.behindmonsterdata.length;j++)
         {
          if(level.behindmonsterdata[j]==1)
          {
           itislast=false;
           for(var k=0;k<level.monster.length;k++)

           {
            if(level.monster[k].column == 0 && level.monster[k].row == j)
            {
              nextmonsternumber = j
              break;
            }
          }
          break;
        }
      }

      if(itislast)
      {
        this.move = false;
        level.monster.push(level.makeUFOsquid(this.defalt_x + (MONSTERDISTANCE*i),this.position_y,i))
        level.behindmonsterdata[i]=1;
        this.UFOsquidvalue = level.monster.length-1
      }

      else{
        this.move = false;
        this.UFOsquidvalue = nextmonsternumber
        level.monster.splice(nextmonsternumber,0,level.makeUFOsquid(this.defalt_x + (MONSTERDISTANCE*i),this.position_y,i))
        if(level.monstercount>nextmonsternumber)
        {
          level.monstercount+=1
        }
        level.behindmonsterdata[i]=1;
      }
    }
  }
}
}
}



