class level {

  constructor(level) {
    this.time = 0;
    this.timeElapsed = 0;
    this.rightmove = true;
    this.downmove = false;
    this.monster = [];
    this.movespeed = 0.5;
    this.k = 0;
    this.time = 0;
    this.i = 0
    this.j = 0
    for (var i = level.length - 1; i > -1; i--) {
      for (var j = 0; j < level[i].length; j++) {
        switch (level[i][j]) {
          case 1:
            this.monster[this.k] = {
              type: 1,
              position_x: 1 + j * 32,
              position_y: 81 + i * 32,
              x_size: 16,
              y_size: 16,
              point: 10
            }
            break;

          case 2:
            this.monster[this.k] = {
              type: 2,
              position_x: 1 + j * 32,
              position_y: 81 + i * 32,
              x_size: 14,
              y_size: 16,
              point: 20
            }
            break;

          case 3:
            this.monster[this.k] = {
              type: 3,
              position_x: 3 + j * 32,
              position_y: 82 + i * 32,
              x_size: 12,
              y_size: 14,
              point: 30
            }
            break;
        }
        this.k++
      }
    }
  }


  draw() {

    for (var i = 0; i < this.monster.length; i++) {
push()
fill(255,0,0);
      rect(this.monster[i].position_x, this.monster[i].position_y, this.monster[i].x_size, this.monster[i].y_size)
pop()
    }
  }


  movecheck() {
    if(this.i==0)
   {
     for (var i = 0; i < this.monster.length; i++) {
      if (this.monster[i].position_x >= monster_move_maximum && this.rightmove) {
        this.rightmove = false;
        this.downmove = true;
      }
      if (this.monster[i].position_x <= monster_move_minimum && !this.rightmove) {
        this.rightmove = true;
        this.downmove = true;
      }
    }
  }
  }

  move() {
    this.timeElapsed += (millis() - this.time) / 1000;

   if (this.timeElapsed >= this.i*this.movespeed) {  
     if (this.downmove) {
        this.monster[this.i].position_y += 16;
      } else if (this.rightmove) {
        this.monster[this.i].position_x += 4;
      } else {
        this.monster[this.i].position_x -= 4;
      }
      this.i +=1
    }
    
    if (this.i >= this.monster.length) {
      this.i = 0
      this.timeElapsed = 0;
      this.downmove = false;
    }
    
    this.time = millis()
  
  }

}



var monster_row_value = 11;
var monster_column_value = 5;
const monster_move_minimum = 1;
const monster_move_maximum = 192 * 2 - 8 * 2;
const play_scene_maximumX = 384;
const play_scene_maximumY = 448;

const LEVEL_ONE = [
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]