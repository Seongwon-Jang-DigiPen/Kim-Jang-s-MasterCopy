//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
class crash {
  constructor() {
    this.switch_bullet = false;
    this.switch1_UFO_1 = false;
  }

  return_delete(a, b) {
    if (a.length > 0 && b.length > 0) {
      if (b[0].position_x + b[0].width / 3< a[0].position_x - a[0].width / 3 || b[0].position_x - b[0].width / 3 > a[0].position_x + a[0].width / 3 || b[0].position_y + b[0].height / 3 < a[0].position_y - a[0].height / 3 || b[0].position_y - b[0].height / 3 > a[0].position_y + a[0].height / 3) {
        return false;
      } else {
        return true;
      }
    }
  }

  delete(a, b) {
    for(let i = b.monster.length - 1; i >=0; i--) {
      var center = b.monster[i];
      
      var min_x = center.position_x 
      var max_x = center.position_x + center.x_size;
      
      var min_y = center.position_y;
      var max_y = center.position_y + center.y_size;
      if(a.position_x >= min_x && a.position_x <= max_x && a.position_y >= min_y && a.position_y <= max_y) {

        b.stiffen = true;
        b.monster[i].dead=true;
        attackArray.splice(0,1)

      }
    }  
  }

  crash_one(a) {
    a.splice(-1, 1);
  }

  crash_two(a, b) {
    a.splice(-1, 1);
    b.splice(-1, 1);
  }
}