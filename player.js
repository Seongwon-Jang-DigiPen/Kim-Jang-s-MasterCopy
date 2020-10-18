//player.js
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//Major : Daehyeon Kim, Minor : Seongwon Jang
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class player {
    //this.count is for how many times die image will change, this.time is for speed of the change
  constructor() {
    this.position_x = 32;
    this.position_y = 410;
    this.speed = 3;
    this.width = 36;
    this.height = 18;
    this.life = 2;
    this.IsPlayerDie = false;
    this.time = 0;
    this.count = 0;
    this.diesound = false;
  }
// Move via arrow keys
  update() {
    if (keyIsDown(LEFT_ARROW) && this.position_x >= 32 && !this.IsPlayerDie) {
      this.position_x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW) && this.position_x <= 340 && !this.IsPlayerDie) {
      this.position_x += this.speed;
    }
    if(this.IsPlayerDie&&!this.diesound)
    {
      player_die_sound.play()
      this.diesound = true
    }
    else if(!this.IsPlayerDie)
    {
      this.diesound = false
    }
  }

  draw() {
    if(!this.IsPlayerDie) {
      image(image_player, this.position_x, this.position_y, this.width, this.height);
    } else if(this.IsPlayerDie) {
      this.dieScene()
    }
  }
// if player is die
  dieScene() {
    this.time+=10
    ufo_sound.stop()
    if(this.count > 6){
      if(this.life <= 0) 
      {
       push()
       fill(255)
       textSize(15)
       text('GAME OVER', 130, 130);
       pop()
       this.gameover()
     }

     else
     {
       this.changePlayer()
     }
   }
   if(this.time<100 &&this.count<6) {
    image(image_player_dead_1, this.position_x, this.position_y, this.width, this.height);
  }
  else if(this.time>=100&&this.count<6) {
    image(image_player_dead_2, this.position_x, this.position_y, this.width, this.height);
  }
  if(this.time>200) {
    this.time =0
    this.count++
  }
}
//if life is 0, gameover will text, and next
gameover() {
  if(this.count < 12)
  {
    this.time+=10
  } 

  if(this.count > 12){
    this.count = 0;
    if(player2)
    {
     player2 = false;
     player1 = true;
     this.IsPlayerDie = false;
     this.life--
     currentScene = PLAYSCENE;
     player2_player = playerArray[0]
     playerArray[0] = player1_player
     player2_level = currentlevel
     currentlevel = player1_level
     barrier_gameplay = player1_barrier
     Scene.black_Scene = true;
     if(playerArray[0].life <=-1)
     {
      toMainScene()
    }
  }
  else if(player1)
  {
    if(player2_play)
    {
      player2 = true;
      player1 = false;
      this.IsPlayerDie = false;
      this.life--
      currentScene = PLAYSCENE;
      player1_player = playerArray[0]
      playerArray[0] = player2_player
      player1_level = currentlevel
      currentlevel = player2_level
      barrier_gameplay = player2_barrier
      Scene.black_Scene = true;
      if(playerArray[0].life <=-1)
      {
       toMainScene()
     }
   }
   else
   {
    toMainScene()
  }
}
}
}
// if select two players mode, change player
changePlayer()
{
  this.count = 0;
  if(player1 || player2)
  {  
    if(player2_play)
    {
    if(player1)
    {
      this.life--
      this.position_x = 50;
      this.position_y = 410;
      player1_player = playerArray[0];
      player1 = false;
      player2 = true;
      player1_level = currentlevel
      currentlevel = player2_level
      this.IsPlayerDie = false;
      playerArray[0] = player2_player;
      Scene.black_Scene = true; 
    }

    else if(player2)
    {
      this.life--
      this.position_x = 50;
      this.position_y = 410;
      player2_player = playerArray[0];
      player1 = true;
      player2 = false;
      player2_level = currentlevel;
      currentlevel = player1_level;
      this.IsPlayerDie = false;
      playerArray[0] = player1_player;
      Scene.black_Scene = true;
    }

  }
  else
  {
    this.life--
    this.position_x = 50;
    this.position_y = 410;
    this.IsPlayerDie = false;
    Scene.black_Scene = true;
  }
}
}
}