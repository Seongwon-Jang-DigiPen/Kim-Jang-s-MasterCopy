//WatingScene.js
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//Junsu Jang
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
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
			this.waiting_patterns[this.pattern_num].play();
			this.current = false;
		}
}
Update(){
	this.timer += 1/60;
	if(this.timer>15){
		this.waiting_patterns[this.pattern_num].stop();
			toMainScene()
		}
	}
	OnKeyPressed(){
		if(false){
			this.waiting_patterns[this.pattern_num].stop();
		}
		if(keyCode == 13)
		{
			toMainScene()
		}
	}
}