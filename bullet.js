//bullet.js
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//Daehyeon Kim
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class bullet {
  constructor(a) {
    this.position_x = a
    this.position_y = 380;
    this.position_speed = 6;
    this.width = 3
    this.height = 16
  }

  draw() {
    push();
    if(!playerArray[0].IsPlayerDie) {
    fill(255, 200);
    } else{
    fill(188, 25, 0, 200)
          }
    rect(this.position_x, this.position_y, this.width, this.height);
    pop();
  }

  update() {
    this.position_y -= this.position_speed
  }

// This is to remove bullet when it crash with topmost part or invader's bullet
  crashWallBullet() {
    if (this.position_y < 0 || each_bullet_crash()) {
      return true
    }
  }
// This is crash with UFO, There will be no effect of bullet crash.
  deleteBullet() {
    if (bullet_UFO_1_crash()) {
      return true
    }
  }
}

