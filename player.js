//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
class player {
  constructor() {
    this.position_x = 50;
    this.position_y = 410;
    this.speed = 5;
    this.width = 36
    this.height = 18
  }

  update() {
    if (keyIsDown(LEFT_ARROW) && this.position_x >= 50) {
      this.position_x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW) && this.position_x <= 430) {
      this.position_x += this.speed;
    }
  }

  draw() {
    image(image_player, this.position_x, this.position_y, this.width, this.height);
  }
}