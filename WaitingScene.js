class WaitingScene extends EmptyScene{
	constructor(){
		super();
		this.waiting_patterns = [waiting_pattern[0],waiting_pattern[1],waiting_pattern[2]];
		this.pattern_num = round(random(0,2));
		this.timer = 0;
		this.current = true;
		
	}
	Draw(){
		var scalex = 1.65;
		var scaley = 1;
		image(this.waiting_patterns[this.pattern_num],240,224,480*scalex, 448*scaley);
		if(this.current){
			// this.waiting_patterns[this.pattern_num].size(50,50)
		this.waiting_patterns[this.pattern_num].play();
		this.current = false;
	}
	// push();
	// noStroke();
	// fill(0,100);
	// rect(0,0,width,height);
	// pop();
	}
	Update(){
		this.timer += 1/60;
		if(this.timer>15){
			this.waiting_patterns[this.pattern_num].stop();
			//mainmenu
		}
	}
	OnKeyPressed(){
		if(false){
		this.waiting_patterns[this.pattern_num].stop();
		}
	}
}