//barriers.js
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//Major : Junsu Jang, Minor : Daehyeon Kim
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class barrier {
  constructor(x, y) {//Input barrier x, y
    this.x = x;
    this.y = y;
    this.up_damaged = 0;//Current situation of middle side damage from top
    this.down_damaged = 0;//Current situation of middle side damage from bottom
    this.right_up_damaged = 0;//Current situation of right side damage from top
    this.right_down_damaged = 0;//Current situation of right side damage from bottom
    this.left_up_damaged = 0;//Current situation of left side damage from top
    this.left_down_damaged = 0;//Current situation of left side damage from bottom
    this.image_size = 16;
    this.left_damage_max = 11;
    this.right_damage_max = 11;
    this.middle_damage_max = 9;

    this.left_image_1 = image_barrier_left[0];//Top of left side barrier image
    this.left_image_2 = image_barrier_square[0];//Middle of left side barrier image
    this.left_image_3 = image_barrier_square[0];//Bottom of left side barrier image

    this.right_image_1 = image_barrier_right[0];//Top of right side barrier image
    this.right_image_2 = image_barrier_square[0];//Middle of right side barrier image
    this.right_image_3 = image_barrier_square[0];//Bottom of right side barrier image

    this.middle_image_1 = image_barrier_square[0];//Top of middle side barrier image
    this.middle_image_2 = image_barrier_square[0];//Bottom of middle sode barrier image

  }
  generate() {//Draw barrier
    var barrier_left_1 = {//Designate top of left side position
        x: this.x - this.image_size,
        y: this.y - this.image_size
      },
      barrier_left_2 = {//Designate middle of left side position
        x: this.x - this.image_size,
        y: this.y
      },
      barrier_left_3 = {//Designate bottom of left side position
        x: this.x - this.image_size,
        y: this.y + this.image_size
      },
      barrier_right_1 = {//Designate top of right side position
        x: this.x + this.image_size,
        y: this.y - this.image_size
      },
      barrier_right_2 = {//Designate middle of right side position
        x: this.x + this.image_size,
        y: this.y
      },
      barrier_right_3 = {//Designate bottom of right side position
        x: this.x + this.image_size,
        y: this.y + this.image_size
      },
      barrier_midle_1 = {//Designate top of middle side position
        x: this.x,
        y: this.y - this.image_size
      },
      barrier_midle_2 = {//Designate bottom of middle side position
        x: this.x,
        y: this.y
      },
      barrier_midle_3 = {//Designate tail of bottom of middle side position
        x: this.x,
        y: this.y + this.image_size
      };

    push();
    imageMode(CENTER);
    image(this.left_image_1, barrier_left_1.x, barrier_left_1.y, this.image_size, this.image_size);
    image(this.left_image_2, barrier_left_2.x, barrier_left_2.y, this.image_size, this.image_size);
    image(this.left_image_3, barrier_left_3.x, barrier_left_3.y, this.image_size, this.image_size);

    image(this.right_image_1, barrier_right_1.x, barrier_right_1.y, this.image_size, this.image_size);
    image(this.right_image_2, barrier_right_2.x, barrier_right_2.y, this.image_size, this.image_size);
    image(this.right_image_3, barrier_right_3.x, barrier_right_3.y, this.image_size, this.image_size);

    image(this.middle_image_1, barrier_midle_1.x, barrier_midle_1.y, this.image_size, this.image_size);
    image(this.middle_image_2, barrier_midle_2.x, barrier_midle_2.y, this.image_size, this.image_size);

    if (this.down_damaged == 0 && this.up_damaged != this.middle_damage_max) {
      image(image_barrier_bottom_edge, barrier_midle_3.x, barrier_midle_3.y, this.image_size, this.image_size);
    }

    pop();
  }
  update() {
    if(this.left_up_damaged + this.left_down_damaged >= this.left_damage_max){//Prevent damage beyond the limit.
      this.left_up_damaged = this.left_damage_max;
      this.left_down_damaged = 0;
    }
    if(this.right_up_damaged + this.right_down_damaged >= this.right_damage_max){
      this.right_up_damaged = this.right_damage_max;
      this.right_down_damaged = 0;
    }
    if(this.up_damaged + this.down_damaged >= this.middle_damage_max){
      this.up_damaged = this.middle_damage_max;
      this.down_damaged = 0;
    }

var square_image_num = [//Number of square image by damage
      [0, 5, 9, 12, 14, 15],//horizontal direction is down_damaged
      [1, 6, 10, 13, 15],
      [2, 7, 11, 15],
      [3, 8, 15],
      [4, 15],
      [15]
    ];//vertical direction is up_damaged

    var left_tri_image_num = [//Number of left_triangle image by damage
      [0, 3, 5, 6],
      [1, 4, 6],
      [2, 6],
      [6]
    ];

    var right_tri_image_num = [//Number of right_triangle image by damage
      [0, 3, 5, 6],
      [1, 4, 6],
      [2, 6],
      [6]
    ];

var middle_barrier_image = [ //up_damaged
      [ //down_damaged
        [image_barrier_square[square_image_num[0][0]]/*Top*/, image_barrier_square[square_image_num[0][0]]]/*Bottom*/,
        [image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_square[square_image_num[0][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_square[square_image_num[0][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_square[square_image_num[0][3]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_square[square_image_num[0][4]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_square[square_image_num[1][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_square[square_image_num[1][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_square[square_image_num[1][3]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_square[square_image_num[1][4]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_square[square_image_num[2][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_square[square_image_num[2][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_square[square_image_num[2][3]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_square[square_image_num[3][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_square[square_image_num[3][2]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_square[square_image_num[4][1]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][0]]],
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][1]]],
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][2]]],
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][3]]],
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][4]]],
      ],
      [
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][0]]],
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][1]]],
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][2]]],
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][3]]],
      ],
      [
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[3][0]]],
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[3][1]]],
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[3][2]]],
      ],
      [
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[4][0]]],
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[4][1]]],
      ],
      [
        [image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[5][0]]],
      ]
    ];

    var left_barrier_image = [ //up_damaged
      [ //down_damaged
        [image_barrier_left[left_tri_image_num[0][0]]/*Top*/, image_barrier_square[square_image_num[0][0]]/*Middle*/, image_barrier_square[square_image_num[0][0]]]/*Bottom*/,
        [image_barrier_left[left_tri_image_num[0][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_left[left_tri_image_num[0][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_left[left_tri_image_num[0][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_left[left_tri_image_num[0][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_left[left_tri_image_num[0][0]], image_barrier_square[square_image_num[0][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[0][0]], image_barrier_square[square_image_num[0][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[0][0]], image_barrier_square[square_image_num[0][3]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[0][0]], image_barrier_square[square_image_num[0][4]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[0][1]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[0][2]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[0][3]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[1][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_left[left_tri_image_num[1][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_left[left_tri_image_num[1][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_left[left_tri_image_num[1][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_left[left_tri_image_num[1][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_left[left_tri_image_num[1][0]], image_barrier_square[square_image_num[0][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[1][0]], image_barrier_square[square_image_num[0][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[1][0]], image_barrier_square[square_image_num[0][3]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[1][0]], image_barrier_square[square_image_num[0][4]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[1][1]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[1][2]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[2][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_left[left_tri_image_num[2][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_left[left_tri_image_num[2][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_left[left_tri_image_num[2][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_left[left_tri_image_num[2][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_left[left_tri_image_num[2][0]], image_barrier_square[square_image_num[0][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[2][0]], image_barrier_square[square_image_num[0][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[2][0]], image_barrier_square[square_image_num[0][3]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[2][0]], image_barrier_square[square_image_num[0][4]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[2][1]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[1][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[1][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[1][3]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[1][4]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[2][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[2][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[2][3]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[3][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[3][2]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[4][1]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][0]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][1]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][2]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][3]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][4]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][0]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][1]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][2]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][3]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[3][0]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[3][1]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[3][2]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[4][0]]],
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[4][1]]],
      ],
      [
        [image_barrier_left[left_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[5][0]]],
      ],
    ];

var right_barrier_image = [ //up_damaged
      [ //down_damaged
        [image_barrier_right[right_tri_image_num[0][0]]/*Top*/, image_barrier_square[square_image_num[0][0]]/*Middle*/, image_barrier_square[square_image_num[0][0]]]/*Bottom*/,
        [image_barrier_right[right_tri_image_num[0][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_right[right_tri_image_num[0][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_right[right_tri_image_num[0][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_right[right_tri_image_num[0][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_right[right_tri_image_num[0][0]], image_barrier_square[square_image_num[0][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[0][0]], image_barrier_square[square_image_num[0][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[0][0]], image_barrier_square[square_image_num[0][3]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[0][0]], image_barrier_square[square_image_num[0][4]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[0][1]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[0][2]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[0][3]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[1][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_right[right_tri_image_num[1][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_right[right_tri_image_num[1][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_right[right_tri_image_num[1][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_right[right_tri_image_num[1][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_right[right_tri_image_num[1][0]], image_barrier_square[square_image_num[0][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[1][0]], image_barrier_square[square_image_num[0][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[1][0]], image_barrier_square[square_image_num[0][3]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[1][0]], image_barrier_square[square_image_num[0][4]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[1][1]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[1][2]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[2][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_right[right_tri_image_num[2][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_right[right_tri_image_num[2][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_right[right_tri_image_num[2][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_right[right_tri_image_num[2][0]], image_barrier_square[square_image_num[0][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_right[right_tri_image_num[2][0]], image_barrier_square[square_image_num[0][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[2][0]], image_barrier_square[square_image_num[0][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[2][0]], image_barrier_square[square_image_num[0][3]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[2][0]], image_barrier_square[square_image_num[0][4]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[2][1]], image_barrier_square[square_image_num[0][5]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[1][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[1][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[1][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[1][3]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[1][4]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[2][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[2][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[2][2]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[2][3]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[3][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[3][1]], image_barrier_square[square_image_num[0][5]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[3][2]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][0]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][1]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][2]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][3]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[4][0]], image_barrier_square[square_image_num[0][4]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[4][1]], image_barrier_square[square_image_num[0][5]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][0]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][1]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][2]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][3]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[1][4]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][0]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][1]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][2]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[2][3]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[3][0]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[3][1]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[3][2]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[4][0]]],
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[4][1]]],
      ],
      [
        [image_barrier_right[right_tri_image_num[3][0]], image_barrier_square[square_image_num[5][0]], image_barrier_square[square_image_num[5][0]]],
      ],
    ];

    this.middle_image_1 = middle_barrier_image[this.up_damaged][this.down_damaged][0];
    this.middle_image_2 = middle_barrier_image[this.up_damaged][this.down_damaged][1];

    this.left_image_1 = left_barrier_image[this.left_up_damaged][this.left_down_damaged][0];
    this.left_image_2 = left_barrier_image[this.left_up_damaged][this.left_down_damaged][1];
    this.left_image_3 = left_barrier_image[this.left_up_damaged][this.left_down_damaged][2];

    this.right_image_1 = right_barrier_image[this.right_up_damaged][this.right_down_damaged][0];
    this.right_image_2 = right_barrier_image[this.right_up_damaged][this.right_down_damaged][1];
    this.right_image_3 = right_barrier_image[this.right_up_damaged][this.right_down_damaged][2];
  }

  crash_effect(a){//Effect of crash when a bullet collide with a barrier it'll work

    mx = a.bullet[0].position_x
    my = a.bullet[0].position_y
    a.bullet[0].bullet_break = 1;//bullet_break is 1 bullet will deleted
    monsterBulletEffectTimer = frameCount;
  }

  m_hitRange(object, currentlevel) {//Check monster bullet position and if it hits barrier, barrier has 1 up damage. 
    var left_x = this.x - this.image_size;
    var right_x = this.x + this.image_size;
    var Y = this.y;
    var object_size = 16;

    if (object.position_x < left_x + this.image_size / 2 && object.position_x >= left_x - this.image_size / 2 ) {
        this.monster_object_status = 1;
    }
    if (object.position_x <= right_x + this.image_size / 2 && object.position_x > right_x - this.image_size / 2 ) {
        this.monster_object_status = 3;
    }
    if (object.position_x <= this.x + this.image_size / 2 && object.position_x >= this.x - this.image_size / 2 ) {
        this.monster_object_status = 2;
    } //Check left, right, and middle

    switch (this.monster_object_status) {
      case 1://Collision range according to damage and position
        if (this.left_up_damaged < 3 ) {
          Y = this.y - object_size;
        } else if (this.left_up_damaged < 7) {
          Y = this.y - object_size / 2;
        } else if (this.left_up_damaged < 11) {
          Y = this.y + object_size / 2;
        }

        if (object.position_y >= Y && object.position_y <= Y + this.image_size / 2 && (this.left_up_damaged + this.left_down_damaged < 11)) {
            this.crash_effect(currentlevel)
          this.left_up_damaged++;
          this.monster_object_status = 0;
        }
        
        break;
      case 2:
        if (this.up_damaged < 4) {
          Y = this.y - object_size - object_size / 2;
        } else if (this.up_damaged < 8) {
          Y = this.y - object_size / 2;
        } else if (this.up_damaged < 9) {
          Y = this.y + object_size / 2;
        }

        if (object.position_y >= Y && object.position_y <= Y + this.image_size / 2 && (this.up_damaged + this.down_damaged < 9)) {
            this.crash_effect(currentlevel)
          this.up_damaged++;
          this.monster_object_status = 0;
        }
        break;
      case 3:
        if (this.right_up_damaged < 3) {
          Y = this.y - object_size;
        } else if (this.right_up_damaged < 7) {
          Y = this.y - object_size / 2;
        } else if (this.right_up_damaged < 11) {
          Y = this.y + object_size / 2;
        }

        if (object.position_y >= Y && object.position_y <= Y + this.image_size / 2 && (this.right_up_damaged + this.right_down_damaged < 11)) {
            this.crash_effect(currentlevel)
          this.right_up_damaged++;
          this.monster_object_status = 0;
        }
        break;
    }
}

  p_hitRange(object, currentlevel) {//Check player bullet position and if it hits barrier, barrier has 1 down damage. 
    var left_x = this.x - this.image_size;
    var right_x = this.x + this.image_size;
    var Y = this.y;
    var object_size = 16;

    if (object.position_x < left_x + this.image_size / 2 && object.position_x >= left_x - this.image_size / 2 ) {
        this.player_object_status = 1;

    }
    if (object.position_x <= right_x + this.image_size / 2 && object.position_x > right_x - this.image_size / 2 ) {
        this.player_object_status = 3;
    }
    if (object.position_x <= this.x + this.image_size / 2 && object.position_x >= this.x - this.image_size / 2 ) {
        this.player_object_status = 2;
    }//Check left, right, and middle

    switch (this.player_object_status) {
      case 1://collision range according to damage and position
        if (this.left_down_damaged < 3) {
          Y = this.y + object_size + object_size / 2;
        } else if (this.left_down_damaged < 7) {
          Y = this.y + object_size / 2;
        } else if (this.left_down_damaged < 11) {
          Y = this.y - object_size / 2;
        }

        if (object.position_y >= Y - this.image_size / 2 && object.position_y <= Y && (this.left_up_damaged + this.left_down_damaged < 11)) {
          bullet_removed(attackArray)
          this.left_down_damaged++;
          this.player_object_status = 0;
        }
        break;
      case 2:
        if (this.down_damaged < 5) {
          Y = this.y + object_size / 2;
        } else if (this.down_damaged < 9) {
          Y = this.y - object_size / 2;
        }

        if (object.position_y >= Y - this.image_size / 2 && object.position_y <= Y && (this.up_damaged + this.down_damaged < 9)) {
          bullet_removed(attackArray);
          this.down_damaged++;
          this.player_object_status = 0;
        }
        break;
      case 3:
        if (this.right_down_damaged < 3) {
          Y = this.y + object_size + object_size / 2;
        } else if (this.right_down_damaged < 7) {
          Y = this.y + object_size / 2;
        } else if (this.right_down_damaged < 11) {
          Y = this.y - object_size / 2;
        }

        if (object.position_y >= Y - this.image_size / 2 && object.position_y <= Y && (this.right_up_damaged + this.right_down_damaged < 11)) {
          bullet_removed(attackArray)
          this.right_down_damaged++;
          this.player_object_status = 0;
        }
        break;
    }
    }


  monsterCollision(object){//When a monster collide with a barrier barrier has damage
    var barrier_range = {
       left_bar : {
        right_x : this.x - this.image_size+this.image_size/2,
        left_x : this.x - this.image_size-this.image_size/2
      },
       right_bar : {
        right_x : this.x + this.image_size+this.image_size/2,
        left_x : this.x + this.image_size-this.image_size/2
       },
       hor_middle_bar : {
        right_x : this.x + this.image_size/2,
        left_x : this.x - this.image_size/2
       },
       up_bar : {
        up_y : this.y - this.image_size - this.image_size/2,
        down_y : this.y - this.image_size + this.image_size/2
       },
       down_bar : {
        up_y : this.y + this.image_size - this.image_size/2,
        down_y : this.y + this.image_size + this.image_size/2
       },
       ver_middle_bar : {
        up_y : this.y - this.image_size/2,
        down_y : this.y + this.image_size/2
       }
    }
    var object_size = 14;
    var object_range = {
       object_right_x : object.position_x+ object_size/2,
       object_left_x : object.position_x-object_size/2,
       object_down_y : object.position_y+object_size/2,
       object_up_y : object.position_y-object_size/2
    }
  if(collision(object_range,barrier_range.left_bar,barrier_range.up_bar) && this.left_up_damaged<3){

      this.left_up_damaged = 3;

      
   } if(collision(object_range,barrier_range.left_bar,barrier_range.ver_middle_bar) && this.left_up_damaged<7){
      this.left_up_damaged = 7;
   } if(collision(object_range,barrier_range.left_bar,barrier_range.down_bar) && this.left_up_damaged<11){
      this.left_up_damaged = 11;
   }
   if(collision(object_range,barrier_range.right_bar,barrier_range.up_bar) && this.right_up_damaged<3){
      this.right_up_damaged = 3;
   
   } if(collision(object_range,barrier_range.right_bar,barrier_range.ver_middle_bar) && this.right_up_damaged<7){
      this.right_up_damaged = 7;
   } if(collision(object_range,barrier_range.right_bar,barrier_range.down_bar) && this.right_up_damaged<11){
      this.right_up_damaged = 11;
   }

   if(collision(object_range,barrier_range.hor_middle_bar,barrier_range.up_bar) && this.up_damaged<5){
    
      this.up_damaged = 5;
 
   } if(collision(object_range,barrier_range.hor_middle_bar,barrier_range.ver_middle_bar) && this.up_damaged<9){
      this.up_damaged = 9;
   }
  }

}
function collision(object,barr_horsec,barr_versec){//Collision range
  if(object.object_right_x>=barr_horsec.left_x && object.object_left_x <= barr_horsec.right_x && object.object_up_y<=barr_versec.down_y && object.object_down_y>=barr_versec.up_y){
    return true;
  }
  return false;
}