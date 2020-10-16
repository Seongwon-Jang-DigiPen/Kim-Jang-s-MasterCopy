class SOSScene extends EmptyScene {
  constructor () {
    super()
    this.x = 60;
    this.y = 350;
    this.changeD = false;
    this.switchpink = false
    this.switchblue = false;
    this.switcht = 0;
    this.a = false;
    this.start = true;
  }
  
  draw()
  {
    this.UFOdraw()
    this.SOStext()
  }
  
    timer() {
        if(frameCount % 8 <4) {
            this.a = true;
        }
        if(frameCount % 8 >= 4) {
            this.a = false;
        }
    }

  update() {
    if(!this.a){
    this.y -= 1.10;
    } else if(this.a) {
        this.y += 0.05;
    }

    if(!this.changeD){
    this.x += 2;
    } else
      {
        this.x -= 2;
      }
    if(this.start ){
        sound_sos.play()
        this.start = false;
    }
  }


  changeDirection() {
    if(this.x > 250){
      this.changeD = true;
      this.switcht += 1
    } else if(this.x < 50) {
      this.changeD = false;
    }
  }


  changeColor() {
        if(this.x>=150){
            this.switchpink = true
        }
        if(this.x<=50 && this.changeD){
            this.switchpink = false
            this.switchblue = true
        }
  }

  UFOdraw() {
    push()
  if(!this.switchpink && !this.switchblue) {
    push()
    image(image_SOS_green,this.x,this.y-10,18, 18);
    image(image_UFO_green,this.x,this.y+10,60, 20);
    pop()
}
 if (this.switchpink){
    push()
    image(image_SOS_pink,this.x,this.y-10,18, 18);
    image(image_UFO_1,this.x,this.y+10,60, 20);
    pop()
} if (this.switchblue) {
    push()
    image(image_SOS_blue,this.x,this.y-10,18, 18);
    image(image_UFO_blue,this.x,this.y+10,60, 20);
    pop()
  } 
  pop()
}

  SOStext() {
    push()
    textSize(15)
    if(this.switcht > 0){
    push()
    fill(242,72,255)
    text("SOS!!", 300, 310)
    pop()
} if (this.switcht > 1){
    push()
    fill(24,226,229)
    text("SOS!!", 300, 200)
    pop()
} if (this.switcht > 2) {
    push()
    fill(43,244,3)
    text("SOS!!", 300, 90)
    pop()
  }
  pop()
}
}