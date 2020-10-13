var highScore = 5000;
var barrier_num = 4;
var barrier_pos_y = 350;
var barrier_1_pos_x = 62;
var barrier_2_pos_x = 142;
var barrier_3_pos_x = 222;
var barrier_4_pos_x = 302;

class PlayScene extends EmptyScene{
    constructor(){
        super();
        this.attackArray = [];
        this.UFO_1Array = [];
        this.UFO_2Array = [];
        this.playerArray = [];

        this.randomSwitch
        this.x;
        this.y;
        this.mx;
        this.my;
        this.bulletEffectTimer;
        this.UFOEffectTimer;
        this.Round = 1;
        this.currentlevel = new level(LEVEL_17,this.Round);
        this.barrier_gameplay = [];
        this.player2 = false;

        this.c = new crash();
        this.playerArray.push(new player());
        this.barrier_gameplay.push(new barrier(barrier_1_pos_x,barrier_pos_y));
        this.barrier_gameplay.push(new barrier(barrier_2_pos_x,barrier_pos_y));
        this.barrier_gameplay.push(new barrier(barrier_3_pos_x,barrier_pos_y));
        this.barrier_gameplay.push(new barrier(barrier_4_pos_x,barrier_pos_y));
    }

    Update()
    {
      this.playerArray[0].update();
      this.currentlevel.update(this.playerArray);

      if(!this.playerArray[0].IsPlayerDie)
        {this.currentlevel.attack(this.playerArray[0]);}

    for (let a of this.attackArray) {
        a.draw(this.playerArray);
        a.update();
    }
    for (let u of this.UFO_1Array) {
        u.draw();
        u.update();
        if(u.IsThisUfo2){
            u.canmakecheck(this.currentlevel.monster);
            u.makemonster(this.currentlevel);
        }
    }
    if(this.UFO_1Array.length > 0 && this.UFO_1Array[0].goneUFO()) {
        this.c.crash_one(UFO_1Array)
    }

    for(var barrier_make = 0;barrier_make<barrier_num;barrier_make++){
        this.barrier_gameplay[barrier_make].generate();
        this.barrier_gameplay[barrier_make].update();

     for(var make_barr = 0;make_barr<this.currentlevel.bullet.length;make_barr++){
          this.barrier_gameplay[barrier_make].m_hitRange(this.currentlevel.bullet[0],'monster',this.currentlevel);
        }

        for(var bullet_count = 0;bullet_count<this.attackArray.length;bullet_count++){
            this.barrier_gameplay[barrier_make].p_hitRange(this.attackArray[bullet_count],'player', this.currentlevel);
        }
        for(var monster_hit_check = 0;monster_hit_check<this.currentlevel.monster.length;monster_hit_check ++){
          this.barrier_gameplay[barrier_make].monsterCollision(this.currentlevel.monster[monster_hit_check]);
      }
  }

  if (this.attackArray.length > 0 && this.attackArray[0].deleteBullet() && this.UFO_1Array.length > 0 && this.UFO_1Array[0].deleteUFO()) {
    this.UFO_1Array[0].IsUFODie = true;
    this.c.crash_one(attackArray);
} else if (this.attackArray.length > 0 && this.attackArray[0].crashWallBullet()) {
    this.bulletEffectTimer = frameCount
    this.crash_effect_get_position(this.attackArray[0]);
    this.c.crash_one(this.attackArray)
}
if (frameCount < this.monsterBulletEffectTimer + 5) {
  image(image_bullet_break, mx, my, 20, 20);
}
if(this.attackArray.length > 0) {

 this.c.delete_invader(this.attackArray[0], this.currentlevel);
}
if(this.currentlevel.bullet.length > 0) {
 this.c.delete_player(this.playerArray[0], this.currentlevel)
}
}

Draw()
{
  this.playerArray[0].draw();
  this.currentlevel.color(this.playerArray);
  this.currentlevel.draw();
  this.draw_life();
  this.draw_text();
}

OnKeyPressed()
{
   if (key == 'z' && this.attackArray.length == 0 && !this.playerArray[0].IsPlayerDie) {
    this.attackArray.push(new bullet(this.playerArray[0].position_x));
}
if (key == 'u') {
    this.callUFO_1();
}
}
crash_effect_get_position (a) {
 this.x = a.position_x;
 this.y = a.position_y;
}

callUFO_1() {
  this.UFO_1Array.push(new UFO_1());
  this.UFO_1Array[0].IsThisSpecialUFO = false;
}

bullet_UFO_1_crash() {
    return this.c.return_delete(this.attackArray,this.UFO_1Array)
}

bullet_removed(bullet_name){
  this.bulletEffectTimer = frameCount
  this.crash_effect_get_position(bullet_name[0]);
  // c.crash_one(attackArray)
  this.c.crash_one(bullet_name);
}

draw_text() {
    push()
    fill(255)
    textFont(Font);
    textSize(17);
    text('HIGH\n SCORE', 385, 50);
    if(highScore < 10000){
        text('0' + highScore, 402, 104);
    } else {
        text(highScore, 402, 104);
    }
    text('1UP', 385, 140);
    if(this.playerArray[0].currentScore < 10){
        text('0000' + this.playerArray[0].currentScore, 402, 176);
    }else if(this.playerArray[0].currentScore < 100){
        text('000' + this.playerArray[0].currentScore, 402, 176);
    }else if(playerArray[0].currentScore < 1000){
        text('00' + this.playerArray[0].currentScore, 402, 176);
    }else if(this.playerArray[0].currentScore < 10000){
        text('0' + this.playerArray[0].currentScore, 402, 176);
    } else {
        text(this.playerArray[0].currentScore, 402, 176);
    }

    text('2UP', 385, 212);
    if(this.player2){
        if(p2CurrentScore < 10){
            text('0000' + p2CurrentScore, 402, 248);
        }else if(p2CurrentScore < 100){
            text('000' + p2CurrentScore, 402, 248);
        }else if(p2CurrentScore < 1000){
            text('00' + p2CurrentScore, 402, 248);
        }else if(p2CurrentScore < 10000){
            text('0' + p2CurrentScore, 402, 248);
        } else {
            text(p2CurrentScore, 402, 248);
        }
    }
    text('ROUND', 385, 290);
    if(this.Round < 10){
        text('0' + this.Round, 453, 322);
    } else if (this.Round < 100) {
        text(this.Round, 453, 322);
    } else if (this.Round >= 100) {
        this.Round -= 100;
    }
    pop()
}

draw_life() {
    push()
    if(this.playerArray[0].life == 3){
        if(!this.playerArray[0].IsPlayerDie){
            image(image_player, 390, 360, this.playerArray[0].width, this.playerArray[0].height)
            image(image_player, 420, 360, this.playerArray[0].width, this.playerArray[0].height)
            image(image_player, 450, 360, this.playerArray[0].width, this.playerArray[0].height)
        } else if(playerArray[0].IsPlayerDie) {
            image(image_player_R, 390, 360, this.playerArray[0].width, this.playerArray[0].height)
            image(image_player_R, 420, 360, this.playerArray[0].width, this.playerArray[0].height)
            image(image_player_R, 450, 360, this.playerArray[0].width, this.playerArray[0].height)
        }
    } else if(this.playerArray[0].life == 2){
        if(!this.playerArray[0].IsPlayerDie){
            image(image_player, 390, 360, this.playerArray[0].width, this.playerArray[0].height)
            image(image_player, 420, 360, this.playerArray[0].width, this.playerArray[0].height)
        } else if(this.playerArray[0].IsPlayerDie){
            image(image_player_R, 390, 360, this.playerArray[0].width, this.playerArray[0].height)
            image(image_player_R, 420, 360, this.playerArray[0].width, this.playerArray[0].height)
        }
    } else if(this.playerArray[0].life == 1){
        if(!this.playerArray[0].IsPlayerDie){
            image(image_player, 390, 360, this.playerArray[0].width, this.playerArray[0].height)
        } else if(this.playerArray[0].IsPlayerDie){
            image(image_player_R, 390, 360, this.playerArray[0].width, this.playerArray[0].height)
        }
    }
    pop()
}
}