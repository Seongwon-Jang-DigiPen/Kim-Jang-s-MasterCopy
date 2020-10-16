class InfoScene extends EmptyScene{
	constructor(){
		super();
		this.play ={
			text : 'PLA',
			x:161,
			y:78
		}
		this.game_name = {
			text : 'SPACE INVADERS',
			x:81,
			y:126
		}
		this.score_advance = {
			text : 'SCORE ADVANCE TABLE',
			x:49,
			y:190
		}
		this.ufo_point ={
			text : '= ? MYSTERY',
			x:113,
			y:238,
			rate:0
		}
		this.squid_point ={
			text:'= 30 POINTS',
			x:113,
			y:270,
			rate:0
		}
		this.crab_point ={
			text:'= 20 POINTS',
			x:113,
			y:302,
			rate:0
		}
		this.octopus_point ={
			text:'= 10 POINTS',
			x:113,
			y:334,
			rate:0
		}
		this.TAITO_CORP={
			text: 'ⓒ  TAITO CORP.MCMLXXXV',
			x:31,
			y:414
		};//will make 
		this.score_board=0;//make scoreboard.js
		this.static_text =[this.play,this.game_name,this.score_advance]
		this.ufo =true;
		this.squid =false;
		this.crab =false;
		this.octopus =false;
	}
	Draw(){
		push();
		for(var i =0;i<this.static_text.length;i++){
		text(this.static_text[i].text,this.static_text[i].x,this.static_text[i].y);
	}
	if(this.ufo){
		this.text_animation(this.ufo_point);
	}
	if(this.squid){
		this.text_animation(this.squid_point);
	}
	if(this.crab){
		this.text_animation(this.crab_point);
	}
	if(this.octopus){
		this.text_animation(this.octopus_point);
	}
	//draw score boards
	//input some images
	pop();
	}
	Update(){
		if(this.ufo_point.rate ==this.ufo_point.text.length){
			this.squid = true;
		}
		if(this.squid_point.rate ==this.squid_point.text.length){
			this.crab = true;
		}
		if(this.crab_point.rate ==this.crab_point.text.length){
			this.octopus = true;
		}

		//
		//animation 'y' and squid
	}
	text_animation(text){

		for(var i =0;i<text.rate;i++){
			var text_size = 5
			text(text.text[i],text.x+i*text_size,text.y);
		}
		if(text.rate<text.text.length){
			text.rate +=0.2;
		}
		else{
			text.rate =text.text.length;
		}
	}
	OnKeyPressed(){}
	
}