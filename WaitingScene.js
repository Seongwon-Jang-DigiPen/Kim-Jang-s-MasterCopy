class WaitingScene extends EmptyScene{
	constructor(){
		this.waiting_pattern = [waiting_pattern[0],waiting_pattern[1],waiting_pattern[2]];
		this.pattern_num = random(0,2);
		this.timer = 0;
	}
	Draw(){
		this.waiting_pattern[this.pattern_num].play();
	}
	Update(){
		timer += 1/60;
		if(timer>15){
			this.waiting_pattern[this.pattern_num].stop();
			//mainmenu
		}
	}
	OnKeyPressed(){
		if(1){
		this.waiting_pattern[this.pattern_num].stop();
		}
	}
}