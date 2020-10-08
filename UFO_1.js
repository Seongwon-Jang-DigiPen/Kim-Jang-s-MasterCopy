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
    if (this.go_right) {
      this.position_x += 3;
    } else {
      this.position_x -= 3;
    }
  }

  draw() {
    image(image_UFO_1, this.position_x, this.position_y, this.width, this.height);
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