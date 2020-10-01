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

  crash_one(a) {
    a.splice(-1, 1);
  }

  crash_two(a, b) {
    a.splice(-1, 1);
    b.splice(-1, 1);
  }
}