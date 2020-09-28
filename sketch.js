//Kim & Jangs
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020

//전달사항
//모든 그림이 테두리가 없는 것 같아서 setup에 noStroke했음
//열심히 하자 얘들아
let attackArray = []

function setup() {
  createCanvas(480, 448);
  rectMode(CENTER);
  noStroke();
}

p = new player();

function draw() {
  background(0);
  p.update();
  p.draw();

  for (let a of attackArray) {
    a.draw();
    a.update();
  }
  for (let i = attackArray.length - 1; i >= 0; --i) {
    if (attackArray[i].deleteBullet()) {
      attackArray.splice(-1, 1);
    }
  }
}

function keyPressed() {
  if (key == 'z' && attackArray.length == 0) {
    attackArray.push(new bullet(p.position_x))
  }
}