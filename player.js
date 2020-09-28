//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
class player {
  constructor() {
    this.position_x = 50;
    this.position_y = 410;
    this.speed = 5;
  }

  update() {
    if (keyIsDown(LEFT_ARROW) && this.position_x >= 50) {
      this.position_x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW) && this.position_x <= 430) {
      this.position_x += this.speed;
    }
  }

  draw() {
    push()
    fill('cyan')
    rect(this.position_x, this.position_y, 25, 9);
    rect(this.position_x, this.position_y - 2, 21, 8);
    rect(this.position_x, this.position_y - 7, 7, 8);
    rect(this.position_x, this.position_y - 8.5, 2, 11);
    pop();
  }
}