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
    if (this.go_right && !playerArray[0].IsPlayerDie && !this.IsUFODie) {
      this.position_x += 3;
    } else if (!this.go_right && !playerArray[0].IsPlayerDie && !this.IsUFODie) {
      this.position_x -= 3;
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
}