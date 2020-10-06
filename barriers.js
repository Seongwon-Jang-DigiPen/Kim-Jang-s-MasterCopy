class barrier {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.up_damaged = 0;
    this.down_damaged = 0;
    this.right_up_damaged = 0;
    this.right_down_damaged = 0;
    this.left_up_damaged = 0;
    this.left_down_damaged = 0;
    this.image_size = 16;
    this.status_check_count = 0;
    this.object_status = 0;

    this.left_image_1 = image_barrier_left[0];
    this.left_image_2 = image_barrier_square[0];
    this.left_image_3 = image_barrier_square[0];

    this.right_image_1 = image_barrier_right[0];
    this.right_image_2 = image_barrier_square[0];
    this.right_image_3 = image_barrier_square[0];

    this.middle_image_1 = image_barrier_square[0];
    this.middle_image_2 = image_barrier_square[0];

  }
  generate() {
    var barrier_left_1 = {
        x: this.x - this.image_size,
        y: this.y - this.image_size
      },
      barrier_left_2 = {
        x: this.x - this.image_size,
        y: this.y
      },
      barrier_left_3 = {
        x: this.x - this.image_size,
        y: this.y + this.image_size
      },
      barrier_right_1 = {
        x: this.x + this.image_size,
        y: this.y - this.image_size
      },
      barrier_right_2 = {
        x: this.x + this.image_size,
        y: this.y
      },
      barrier_right_3 = {
        x: this.x + this.image_size,
        y: this.y + this.image_size
      },
      barrier_midle_1 = {
        x: this.x,
        y: this.y - this.image_size
      },
      barrier_midle_2 = {
        x: this.x,
        y: this.y
      },
      barrier_midle_3 = {
        x: this.x,
        y: this.y + this.image_size
      };

    push();
    imageMode(CENTER);
    image(this.left_image_1, barrier_left_1.x, barrier_left_1.y,this.image_size,this.image_size);
    image(this.left_image_2, barrier_left_2.x, barrier_left_2.y,this.image_size,this.image_size);
    image(this.left_image_3, barrier_left_3.x, barrier_left_3.y,this.image_size,this.image_size);

    image(this.right_image_1, barrier_right_1.x, barrier_right_1.y,this.image_size,this.image_size);
    image(this.right_image_2, barrier_right_2.x, barrier_right_2.y,this.image_size,this.image_size);
    image(this.right_image_3, barrier_right_3.x, barrier_right_3.y,this.image_size,this.image_size);

    image(this.middle_image_1, barrier_midle_1.x, barrier_midle_1.y,this.image_size,this.image_size);
    image(this.middle_image_2, barrier_midle_2.x, barrier_midle_2.y,this.image_size,this.image_size);

    if (this.down_damaged == 0 && this.up_damaged != 9) {
      image(image_barrier_bottom_edge, barrier_midle_3.x, barrier_midle_3.y,this.image_size,this.image_size);
    }

    pop();
  }
  update() {
    switch (this.up_damaged) {
      case 0:
        switch (this.down_damaged) {
          case 0:
            break;
          case 1:
            this.middle_image_2 = image_barrier_square[5];
            break;
          case 2:
            this.middle_image_2 = image_barrier_square[9];
            break;
          case 3:
            this.middle_image_2 = image_barrier_square[12];
            break;
          case 4:
            this.middle_image_2 = image_barrier_square[14];
            break;
          case 5:
            this.middle_image_2 = image_blackspace; //delete
            this.middle_image_1 = image_barrier_square[5];
            break;
          case 6:
            this.middle_image_1 = image_barrier_square[9];
            break;
          case 7:
            this.middle_image_1 = image_barrier_square[12];
            break;
          case 8:
            this.middle_image_1 = image_barrier_square[14];
            break;
          case 9:
            this.middle_image_1 = image_blackspace; //delete
            break;
        }
        break;
      case 1:
        switch (this.down_damaged) {
          case 0:
            this.middle_image_1 = image_barrier_square[1];
            break;
          case 1:
            this.middle_image_2 = image_barrier_square[5];
            break;
          case 2:
            this.middle_image_2 = image_barrier_square[9];
            break;
          case 3:
            this.middle_image_2 = image_barrier_square[12];
            break;
          case 4:
            this.middle_image_2 = image_barrier_square[14];
            break;
          case 5:
            this.middle_image_2 = image_blackspace; //delete
            this.middle_image_1 = image_barrier_square[1 + 5];
            break;
          case 6:
            this.middle_image_1 = image_barrier_square[1 + 9];
            break;
          case 7:
            this.middle_image_1 = image_barrier_square[1 + 12];
            break;
          case 8:
            this.middle_image_1 = image_blackspace; //delete
            break;
        }
        break;
      case 2:
        switch (this.down_damaged) {
          case 0:
            this.middle_image_1 = image_barrier_square[2];
            break;
          case 1:
            this.middle_image_2 = image_barrier_square[5];
            break;
          case 2:
            this.middle_image_2 = image_barrier_square[9];
            break;
          case 3:
            this.middle_image_2 = image_barrier_square[12];
            break;
          case 4:
            this.middle_image_2 = image_barrier_square[14];
            break;
          case 5:
            this.middle_image_2 = image_blackspace; //delete
            this.middle_image_1 = image_barrier_square[2 + 5];
            break;
          case 6:
            this.middle_image_1 = image_barrier_square[2 + 9];
            break;
          case 7:
            this.middle_image_1 = image_blackspace;
            break;
        }
        break;
      case 3:
        switch (this.down_damaged) {
          case 0:
            this.middle_image_1 = image_barrier_square[3];
            break;
          case 1:
            this.middle_image_2 = image_barrier_square[5];
            break;
          case 2:
            this.middle_image_2 = image_barrier_square[9];
            break;
          case 3:
            this.middle_image_2 = image_barrier_square[12];
            break;
          case 4:
            this.middle_image_2 = image_barrier_square[14];
            break;
          case 5:
            this.middle_image_2 = image_blackspace; //delete
            this.middle_image_1 = image_barrier_square[3 + 5];
            break;
          case 6:
            this.middle_image_1 = image_blackspace;
            break;
        }
        break;
      case 4:
        switch (this.down_damaged) {
          case 0:
            this.middle_image_1 = image_barrier_square[4];
            break;
          case 1:
            this.middle_image_2 = image_barrier_square[5];
            break;
          case 2:
            this.middle_image_2 = image_barrier_square[9];
            break;
          case 3:
            this.middle_image_2 = image_barrier_square[12];
            break;
          case 4:
            this.middle_image_2 = image_barrier_square[14];
            break;
          case 5:
            this.middle_image_2 = image_blackspace; //delete
            this.middle_image_1 = image_blackspace; //delete
            break;
        }
        break;
      case 5:
        switch (this.down_damaged) {
          case 0:
            this.middle_image_1 = image_blackspace;
            this.middle_image_2 = image_barrier_square[1];
            break;
          case 1:
            this.middle_image_2 = image_barrier_square[1 + 5];
            break;
          case 2:
            this.middle_image_2 = image_barrier_square[1 + 9];
            break;
          case 3:
            this.middle_image_2 = image_barrier_square[1 + 12];
            break;
          case 4:
            this.middle_image_2 = image_blackspace;
            break;
        }
        break;
      case 6:
        switch (this.down_damaged) {
          case 0:
            this.middle_image_1 = image_blackspace;
            this.middle_image_2 = image_barrier_square[2];
            break;
          case 1:
            this.middle_image_2 = image_barrier_square[2 + 5];
            break;
          case 2:
            this.middle_image_2 = image_barrier_square[2 + 9];
            break;
          case 3:
            this.middle_image_2 = image_blackspace;
            break;
        }
        break;
      case 7:
        switch (this.down_damaged) {
          case 0:
            this.middle_image_1 = image_blackspace;
            this.middle_image_2 = image_barrier_square[3];
            break;
          case 1:
            this.middle_image_2 = image_barrier_square[3 + 5];
            break;
          case 2:
            this.middle_image_2 = image_blackspace;
            break;
        }
        break;
      case 8:
        switch (this.down_damaged) {
          case 0:
            this.middle_image_1 = image_blackspace;
            this.middle_image_2 = image_barrier_square[4];
            break;
          case 1:
            this.middle_image_2 = image_blackspace;
        }
        break;
      case 9:
        switch (this.down_damaged) {
          case 0:
            this.middle_image_1 = image_blackspace;
            this.middle_image_2 = image_blackspace;
            break;
        }
        break;
    }

    switch (this.left_up_damaged) {
      case 0:
        switch (this.left_down_damaged) {
          case 0:
            break;
          case 1:
            this.left_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.left_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.left_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.left_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.left_image_3 = image_blackspace;
            this.left_image_2 = image_barrier_square[5];
            break;
          case 6:
            this.left_image_2 = image_barrier_square[9];
            break;
          case 7:
            this.left_image_2 = image_barrier_square[12];
            break;
          case 8:
            this.left_image_2 = image_barrier_square[14];
            break;
          case 9:
            this.left_image_2 = image_blackspace;
            this.left_image_1 = image_barrier_left[3];
            break;
          case 10:
            this.left_image_1 = image_barrier_left[5];
            break;
          case 11:
            this.left_image_1 = image_blackspace;
            break;
        }
        break;
      case 1:
        switch (this.left_down_damaged) {
          case 0:
            this.left_image_1 = image_barrier_left[1];
            break;
           case 1:
            this.left_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.left_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.left_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.left_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.left_image_3 = image_blackspace;
            this.left_image_2 = image_barrier_square[5];
            break;
          case 6:
            this.left_image_2 = image_barrier_square[9];
            break;
          case 7:
            this.left_image_2 = image_barrier_square[12];
            break;
          case 8:
            this.left_image_2 = image_barrier_square[14];
            break;
         case 9:
            this.left_image_2 = image_blackspace;
            this.left_image_1 = image_barrier_left[1+3];
            break;
          case 10:
            this.left_image_1 = image_blackspace;
            break;
        }
        break;
      case 2:
        switch (this.left_down_damaged) {
          case 0:
            this.left_image_1 = image_barrier_left[2];
            break;
           case 1:
            this.left_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.left_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.left_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.left_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.left_image_3 = image_blackspace;
            this.left_image_2 = image_barrier_square[5];
            break;
          case 6:
            this.left_image_2 = image_barrier_square[9];
            break;
          case 7:
            this.left_image_2 = image_barrier_square[12];
            break;
          case 8:
            this.left_image_2 = image_barrier_square[14];
            break;
         case 9:
            this.left_image_2 = image_blackspace;
            this.left_image_1 = image_blackspace;
            break;
        }
        break;
      case 3:
        switch (this.left_down_damaged) {
          case 0:
            this.left_image_1 = image_blackspace;
            this.left_image_2 = image_barrier_square[1];
            break;
           case 1:
            this.left_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.left_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.left_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.left_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.left_image_3 = image_blackspace;
            this.left_image_2 = image_barrier_square[1+5];
            break;
          case 6:
            this.left_image_2 = image_barrier_square[1+9];
            break;
          case 7:
            this.left_image_2 = image_barrier_square[1+12];
            break;
          case 8:
            this.left_image_2 = image_blackspace;
            break;
        }
        break;
      case 4:
        switch (this.left_down_damaged) {
          case 0:
            this.left_image_1 = image_blackspace;
            this.left_image_2 = image_barrier_square[2];
            break;
           case 1:
            this.left_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.left_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.left_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.left_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.left_image_3 = image_blackspace;
            this.left_image_2 = image_barrier_square[2+5];
            break;
          case 6:
            this.left_image_2 = image_barrier_square[2+9];
            break;
          case 7:
            this.left_image_2 = image_blackspace;
            break;
        }
        break;
      case 5:
        switch (this.left_down_damaged) {
          case 0:
            this.left_image_1 = image_blackspace;
            this.left_image_2 = image_barrier_square[3];
            break;
           case 1:
            this.left_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.left_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.left_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.left_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.left_image_3 = image_blackspace;
            this.left_image_2 = image_barrier_square[3+5];
            break;
          case 6:
            this.left_image_2 = image_blackspace;
            break;
        }
        break;
      case 6:
        switch (this.left_down_damaged) {
          case 0:
            this.left_image_1 = image_blackspace;
            this.left_image_2 = image_barrier_square[4];
            break;
           case 1:
            this.left_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.left_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.left_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.left_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.left_image_3 = image_blackspace;
            this.left_image_2 = image_blackspace;
            break;
        }
        break;
      case 7:
        switch (this.left_down_damaged) {
          case 0:
            this.left_image_1 = image_blackspace;
            this.left_image_2 = image_blackspace;
            this.left_image_3 = image_barrier_square[1];
            break;
           case 1:
            this.left_image_3 = image_barrier_square[1+5];
            break;
          case 2:
            this.left_image_3 = image_barrier_square[1+9];
            break;
          case 3:
            this.left_image_3 = image_barrier_square[1+12];
            break;
          case 4:
            this.left_image_3 = image_blackspace;
            break;
        }
        break;
      case 8:
        switch (this.left_down_damaged) {
          case 0:
            this.left_image_1 = image_blackspace;
            this.left_image_2 = image_blackspace;
            this.left_image_3 = image_barrier_square[2];
            break;
           case 1:
            this.left_image_3 = image_barrier_square[2+5];
            break;
          case 2:
            this.left_image_3 = image_barrier_square[2+9];
            break;
          case 3:
            this.left_image_3 = image_blackspace;
            break;
        }
        break;
      case 9:
        switch (this.left_down_damaged) {
          case 0:
            this.left_image_1 = image_blackspace;
            this.left_image_2 = image_blackspace;
            this.left_image_3 = image_barrier_square[3];
            break;
           case 1:
            this.left_image_3 = image_barrier_square[3+5];
            break;
          case 2:
            this.left_image_3 = image_blackspace;
            break;
        }
        break;
      case 10:
        switch (this.left_down_damaged) {
         case 0:
            this.left_image_1 = image_blackspace;
            this.left_image_2 = image_blackspace;
            this.left_image_3 = image_barrier_square[4];
            break;
           case 1:
            this.left_image_3 = image_blackspace;
            break;
        }
        break;
      case 11:
        switch (this.left_down_damaged) {
          case 0:
            this.left_image_1 = image_blackspace;
            this.left_image_2 = image_blackspace;
            this.left_image_3 = image_blackspace;
            break;
        }
        break;
    }
    
    switch (this.right_up_damaged) {
      case 0:
        switch (this.right_down_damaged) {
          case 0:
            break;
          case 1:
            this.right_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.right_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.right_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.right_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.right_image_3 = image_blackspace;
            this.right_image_2 = image_barrier_square[5];
            break;
          case 6:
            this.right_image_2 = image_barrier_square[9];
            break;
          case 7:
            this.right_image_2 = image_barrier_square[12];
            break;
          case 8:
            this.right_image_2 = image_barrier_square[14];
            break;
          case 9:
            this.right_image_2 = image_blackspace;
            this.right_image_1 = image_barrier_right[3];
            break;
          case 10:
            this.right_image_1 = image_barrier_right[5];
            break;
          case 11:
            this.right_image_1 = image_blackspace;
            break;
        }
        break;
      case 1:
        switch (this.right_down_damaged) {
          case 0:
            this.right_image_1 = image_barrier_right[1];
            break;
           case 1:
            this.right_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.right_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.right_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.right_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.right_image_3 = image_blackspace;
            this.right_image_2 = image_barrier_square[5];
            break;
          case 6:
            this.right_image_2 = image_barrier_square[9];
            break;
          case 7:
            this.right_image_2 = image_barrier_square[12];
            break;
          case 8:
            this.right_image_2 = image_barrier_square[14];
            break;
         case 9:
            this.right_image_2 = image_blackspace;
            this.right_image_1 = image_barrier_right[1+3];
            break;
          case 10:
            this.right_image_1 = image_blackspace;
            break;
        }
        break;
      case 2:
        switch (this.right_down_damaged) {
          case 0:
            this.right_image_1 = image_barrier_right[2];
            break;
           case 1:
            this.right_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.right_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.right_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.right_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.right_image_3 = image_blackspace;
            this.right_image_2 = image_barrier_square[5];
            break;
          case 6:
            this.right_image_2 = image_barrier_square[9];
            break;
          case 7:
            this.right_image_2 = image_barrier_square[12];
            break;
          case 8:
            this.right_image_2 = image_barrier_square[14];
            break;
         case 9:
            this.right_image_2 = image_blackspace;
            this.right_image_1 = image_blackspace;
            break;
        }
        break;
      case 3:
        switch (this.right_down_damaged) {
          case 0:
            this.right_image_1 = image_blackspace;
            this.right_image_2 = image_barrier_square[1];
            break;
           case 1:
            this.right_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.right_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.right_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.right_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.right_image_3 = image_blackspace;
            this.right_image_2 = image_barrier_square[1+5];
            break;
          case 6:
            this.right_image_2 = image_barrier_square[1+9];
            break;
          case 7:
            this.right_image_2 = image_barrier_square[1+12];
            break;
          case 8:
            this.right_image_2 = image_blackspace;
            break;
        }
        break;
      case 4:
        switch (this.right_down_damaged) {
          case 0:
            this.right_image_1 = image_blackspace;
            this.right_image_2 = image_barrier_square[2];
            break;
           case 1:
            this.right_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.right_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.right_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.right_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.right_image_3 = image_blackspace;
            this.right_image_2 = image_barrier_square[2+5];
            break;
          case 6:
            this.right_image_2 = image_barrier_square[2+9];
            break;
          case 7:
            this.right_image_2 = image_blackspace;
            break;
        }
        break;
      case 5:
        switch (this.right_down_damaged) {
          case 0:
            this.right_image_1 = image_blackspace;
            this.right_image_2 = image_barrier_square[3];
            break;
           case 1:
            this.right_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.right_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.right_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.right_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.right_image_3 = image_blackspace;
            this.right_image_2 = image_barrier_square[3+5];
            break;
          case 6:
            this.right_image_2 = image_blackspace;
            break;
        }
        break;
      case 6:
        switch (this.right_down_damaged) {
          case 0:
            this.right_image_1 = image_blackspace;
            this.right_image_2 = image_barrier_square[4];
            break;
           case 1:
            this.right_image_3 = image_barrier_square[5];
            break;
          case 2:
            this.right_image_3 = image_barrier_square[9];
            break;
          case 3:
            this.right_image_3 = image_barrier_square[12];
            break;
          case 4:
            this.right_image_3 = image_barrier_square[14];
            break;
          case 5:
            this.right_image_3 = image_blackspace;
            this.right_image_2 = image_blackspace;
            break;
        }
        break;
      case 7:
        switch (this.right_down_damaged) {
          case 0:
            this.right_image_1 = image_blackspace;
            this.right_image_2 = image_blackspace;
            this.right_image_3 = image_barrier_square[1];
            break;
           case 1:
            this.right_image_3 = image_barrier_square[1+5];
            break;
          case 2:
            this.right_image_3 = image_barrier_square[1+9];
            break;
          case 3:
            this.right_image_3 = image_barrier_square[1+12];
            break;
          case 4:
            this.right_image_3 = image_blackspace;
            break;
        }
        break;
      case 8:
        switch (this.right_down_damaged) {
          case 0:
            this.right_image_1 = image_blackspace;
            this.right_image_2 = image_blackspace;
            this.right_image_3 = image_barrier_square[2];
            break;
           case 1:
            this.right_image_3 = image_barrier_square[2+5];
            break;
          case 2:
            this.right_image_3 = image_barrier_square[2+9];
            break;
          case 3:
            this.right_image_3 = image_blackspace;
            break;
        }
        break;
      case 9:
        switch (this.right_down_damaged) {
          case 0:
            this.right_image_1 = image_blackspace;
            this.right_image_2 = image_blackspace;
            this.right_image_3 = image_barrier_square[3];
            break;
           case 1:
            this.right_image_3 = image_barrier_square[3+5];
            break;
          case 2:
            this.right_image_3 = image_blackspace;
            break;
        }
        break;
      case 10:
        switch (this.right_down_damaged) {
         case 0:
            this.right_image_1 = image_blackspace;
            this.right_image_2 = image_blackspace;
            this.right_image_3 = image_barrier_square[4];
            break;
           case 1:
            this.right_image_3 = image_blackspace;
            break;
        }
        break;
      case 11:
        switch (this.right_down_damaged) {
          case 0:
            this.right_image_1 = image_blackspace;
            this.right_image_2 = image_blackspace;
            this.right_image_3 = image_blackspace;
            break;
        }
        break;
    }


  }
  bulletCheck(){
    this.status_check_count = 0;
    this.object_status = 0;
  }
  hitRange(object) {
    var left_x = this.x - this.image_size;
    var right_x = this.x + this.image_size;
    var Y = this.y;
    var object_size = 16;


    if (object.position_x < left_x + this.image_size / 2 && object.position_x >= left_x - this.image_size / 2 && this.status_check_count == 0) {
      this.object_status = 1;
    }
    if (object.position_x <= right_x + this.image_size / 2 && object.position_x > right_x - this.image_size / 2 && this.status_check_count == 0) {
      this.object_status = 3;
    }
    if (object.position_x <= this.x + this.image_size / 2 && object.position_x >= this.x - this.image_size / 2 && this.status_check_count == 0) {
      this.object_status = 2;
    } //Check left, right, and middle

    if (object.position_y - 20> this.y && this.status_check_count == 0) {
      this.object_status *= -1;
      this.status_check_count = 1;
    } //Check upside and downside

    switch (this.object_status) {
      case 1:
        if (this.left_up_damaged < 3) {
          Y = this.y - object_size;
        } else if (this.left_up_damaged < 7) {
          Y = this.y - object_size / 2;
        } else if (this.left_up_damaged < 11) {
          Y = this.y + object_size / 2;
        }

        if (object.position_y >= Y && object.position_y <= Y + this.image_size / 2 && (this.left_up_damaged + this.left_down_damaged != 11)) {
          bullet_removed()
          this.left_up_damaged ++;
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

        if (object.position_y >= Y && object.position_y <= Y + this.image_size / 2 && (this.up_damaged + this.down_damaged !=9)) {
          bullet_removed()
          this.up_damaged ++;
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

        if (object.position_y >= Y && object.position_y <= Y + this.image_size / 2 && (this.right_up_damaged + this.right_down_damaged != 11)) {
          bullet_removed()
          this.right_up_damaged ++;
        }

        break;
      case -1:
        if (this.left_down_damaged < 3) {
          Y = this.y + object_size + object_size / 2;
        } else if (this.left_down_damaged < 7) {
          Y = this.y + object_size / 2;
        } else if (this.left_down_damaged < 11) {
          Y = this.y - object_size / 2;
        }

        if (object.position_y >= Y - this.image_size / 2 && object.position_y <= Y && (this.left_up_damaged + this.left_down_damaged != 11)) {
          bullet_removed()
          this.left_down_damaged ++;
        }

        break;
      case -2:
        if (this.down_damaged < 5) {
          Y = this.y + object_size / 2;
        } else if (this.down_damaged < 9) {
          Y = this.y - object_size / 2;
        }

        if (object.position_y >= Y - this.image_size / 2 && object.position_y <= Y && (this.up_damaged + this.down_damaged < 9)) {
          bullet_removed()
          this.down_damaged ++;
        }

        break;
      case -3:
        if (this.right_down_damaged < 3) {
          Y = this.y + object_size + object_size / 2;
        } else if (this.right_down_damaged < 7) {
          Y = this.y + object_size / 2;
        } else if (this.right_down_damaged < 11) {
          Y = this.y - object_size / 2;
        }

        if (object.position_y >= Y - this.image_size / 2 && object.position_y <= Y && (this.right_up_damaged + this.right_down_damaged != 11)) {
          bullet_removed()
          this.right_down_damaged ++;
        }

        break;
    }


  }

}