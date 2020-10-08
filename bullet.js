//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
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
    fill(255, 200);
    rect(this.position_x, this.position_y, this.width, this.height);
    pop();
  }

  update() {
    this.position_y -= this.position_speed
  }

  //몹에 맞거나, 벽에 맞거나, 맨 위에 맞거나
  crashWallBullet() {
    if (this.position_y < 0) {
      return true
    }
  }
  deleteBullet() {
    if (bullet_UFO_1_crash()) {
      return true
    }
  }
}