class PlayScene extends EmptyScene{
    constructor(){
this.attackArray = [];
this.UFO_1Array = [];
this.UFO_2Array = [];
this.playerArray = [];

this.randomSwitch
this.x;
this.y;
this.bulletEffectTimer;
this.UFOEffectTimer;
this.Round = 1;
this.currentlevel = new level(LEVEL_17,Round);
this.barrier_gameplay.push(new barrier(200,350));
this.barrier_gameplay = [];
this.highScore = 5000;
this.player2 = false;
this.c = new crash();
    }

    Update()
    {

    }
    Draw()
    {

    }
    OnKeyPressed()
    {

    }
   
}