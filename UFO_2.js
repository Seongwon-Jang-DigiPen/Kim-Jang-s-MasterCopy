//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
class UFO_2 {
  constructor() {
    this.position_x = 0;
    this.position_y = 50;
    this.go_right = true;
    this.width = 40
    this.height = 20
    this.defalt_x = 0
    this.defalt_y = 0

    this.move = true;
    this.UFOsquidvalue = 0;
  }

  randomized() {
    if (randomSwitch == 0) {
      this.go_right = true;
      this.position_x = -20
    } else if (randomSwitch == 1) {
      this.go_right = false;
      this.position_x = 500;
    }
  }

  update() {
    if(this.move)
    {
      if (this.go_right) 
      {
        this.position_x += 1;
      } 
      else 
      {
        this.position_x -= 1;
      }
    }
  }

  draw() {
    image(image_UFO_1, this.position_x, this.position_y, this.width, this.height);
  }







  makemonster(level)
  {
    this.defalt_x = level.monster[0].position_x-(level.monster[0].row*MONSTERDISTANCE);
    this.defalt_y = level.monster[0].position_y-(level.monster[0].column*MONSTERDISTANCE);
console.log(level.behindmonsterdata)
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










goneUFO() {
  if (this.position_x <= -21 || this.position_x >= play_scene_maximumX - this.width/2) {
    return true
  }
}

deleteUFO() {
  if (bullet_UFO_1_crash()) {
    return true
  }
}
}