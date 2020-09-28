class bullet {
  constructor(a) {
    this.bullet_x = a
    this.bullet_y = 400;
    this.bullet_speed = 20
  }

  draw() {

    push();
    fill(255, 200);
    rect(this.bullet_x, this.bullet_y, 2, 20);
    pop();
  }

  update() {
    this.bullet_y -= this.bullet_speed
  }
  
  deleteBullet() {
    if (this.bullet_y < 0) {
      return true
    }
  }
}