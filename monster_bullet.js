//monster_bullet.js
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//Seongwon Jang
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class monster_bullet {

  constructor(a,b) {
    this.position_x = a
    this.position_y = b;
    this.position_speed = 2
    this.width = 6
    this.height = 16
    this.type = round(random(0,2));
    this.frame_count = 0
    this.bullet_break = 0;
  }

	draw() { //monster bullet have a 3 different image. this.tyoe choose image randomly
		var frame = bullet_animation[bulletName[this.type]]
		image(bullet_image, this.position_x,this.position_y, this.width, this.height, frame[this.frame_count].x, frame[this.frame_count].y,frame[this.frame_count].w,frame[this.frame_count].h)
		this.frame_count = (this.frame_count+1) % 4

	}

	update() {
		this.position_y += this.position_speed
	}

  crashWallBullet() 
  {
    if (this.bullet_break == 1) {
      return true
    }
  }

  crashLandBullet() 
  {
    if (this.position_y > height) {
      return true
    }
  }
  deleteBullet() {
    if (bullet_UFO_1_crash()) {
      return true
    }
  }
}