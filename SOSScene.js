class SOSScene extends EmptyScene {
  constructor () {
    this.x = 60;
    this.y = 350;
    this.changeD = false;
    this.switch = 0;
  }
  
  draw()
  {
    ellipse(this.x,this.y-20,20, 20);
    ellipse(this.x,this.y,50, 20);
  }
  
  update() {
    this.y -= 0.43;
    if(!this.changeD){
    this.x += 2;
    } else
      {
        this.x -= 2;
      }
  }
  changeDirection() {
    if(this.x > 300){
      this.changeD = true;
      this.switch += 1
    } else if(this.x < 50) {
      this.changeD = false;
    }
  }

  SOStext() {
    if(this.switch > 0){
    push()
    fill(242,72,255)
    text("SOS!!", 300, 300)
    pop()
} else if (this.switch > 1){
    push()
    fill(24,226,229)
    text("SOS!!", 300, 200)
    pop()
} else if (this.switch > 2) {
    push()
    fill(43,244,3)
    text("SOS!!", 300, 100)
    pop()
  }
}