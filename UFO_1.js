//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
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
    this.IsThisUfo2 = true;
    this.time = 0;
    this.count = 0;
    this.IsUFODie = false;
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
    if(this.move){
    if (this.go_right && !playerArray[0].IsPlayerDie && !this.IsUFODie) {
      this.position_x += 1;
    } else if (!this.go_right && !playerArray[0].IsPlayerDie && !this.IsUFODie) {
      this.position_x -= 1;
    }
}
  }

 draw() {
    if(!playerArray[0].IsPlayerDie && !this.IsUFODie) {
    image(image_UFO_1, this.position_x, this.position_y, this.width, this.height);
} else if(playerArray[0].IsPlayerDie && !this.IsUFODie) {
    image(image_UFO_1_R, this.position_x, this.position_y, this.width, this.height);
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


  dieScene(c) {
    this.IsUFODie = true;
    if(this.count < 3){
        this.time+=10
    } 
    if(this.count == 3){
        this.IsUFODie = false;
        this.count = 0;
        c.crash_one(UFO_1Array);
    }
    if(this.time<100) {
        if(!playerArray[0].IsPlayerDie){
            image(image_UFO_1_dead, this.position_x, this.position_y, this.width, this.height);
        } else if(playerArray[0].IsPlayerDie) {
            image(image_UFO_1_dead_R, this.position_x, this.position_y, this.width, this.height);
        }
    }
    else if(this.time>=100) {
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





  makemonster(level)
  {
if(this.IsThisUfo2){
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
      for(var i = 0; i < this.canmake.length;i++)
      {
        if(this.position_x == this.canmake[i].x)
        {
         this.move = false;
         level.stiffen = true;
      
         level.monster.splice(this.canmake[i].splicenumber,0,level.makeUFOsquid(this.canmake[i].x,this.position_y))
         this.UFOsquidvalue = this.canmake[i].splicenumber;
   
       }
     }
   }
}
 }

 monsterdata(i,j)
 {
    if(this.IsThisUfo2){
  var a = {
    x:i,
    splicenumber:j
  }
  return a
}
}





canmakecheck(monster)
{
    if(this.IsThisUfo2){
  this.defalt_x = monster[0].position_x+(monster[0].row*MONSTERDISTANCE);
  this.defalt_y = monster[0].position_y-(monster[0].column*MONSTERDISTANCE);

  this.canmake = []

  var lefttopmonster=0;


  for(var i=0;i<monster.length;i++)
  {
   if(monster[i].column == 0 && lefttopmonster == 0)
   {
    lefttopmonster = i;
  }
}

var splicein = lefttopmonster;
var rownumber =0;
for (var i=this.defalt_x; i<play_scene_maximumX-MONSTERDISTANCE;i+=MONSTERDISTANCE)
{
 var empty = true;
 for(var j=0;j<monster.length;j++)
 {
  if(monster[j].column==0&&i<monster[j].position_x+5&&i+MONSTERDISTANCE-5>monster[j].position_x)
  {
    empty = false;
    splicein = j;
  }
}

if(empty)
  {  this.canmake.push(this.monsterdata(i,splicein,rownumber))}
rownumber+=1;
}
}
}
}



