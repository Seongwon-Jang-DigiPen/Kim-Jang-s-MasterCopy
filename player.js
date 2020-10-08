//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
class player {
  constructor() {
    this.position_x = 50;
    this.position_y = 410;
    this.speed = 5;
    this.width = 36;
    this.height = 18;
    this.life = 2;
    this.IsPlayerDie = false;
    this.time = 0
    this.count = 0

  }

  update() {
    if (keyIsDown(LEFT_ARROW) && this.position_x >= 50 && !this.IsPlayerDie) {
      this.position_x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW) && this.position_x <= 340 && !this.IsPlayerDie) {
      this.position_x += this.speed;
    }
  }

  draw() {
    if(!this.IsPlayerDie) {
        image(image_player, this.position_x, this.position_y, this.width, this.height);
    } else if(this.IsPlayerDie) {
        this.dieScene()
        
    }
  }

  dieScene() {
    
    if(this.count < 6){
        this.time+=10
    } 
    if(this.count == 6){
        this.gameover()
        this.life--
    }
    if(this.time<100) {
        image(image_player_dead_1, this.position_x, this.position_y, this.width, this.height);
    }
    else if(this.time>=100) {
        image(image_player_dead_2, this.position_x, this.position_y, this.width, this.height);
    }
    if(this.time>200) {
        this.time =0
        this.count++
    }
  }

  gameover() {
        this.IsPlayerDie = false;
        this.count = 0
  }
}