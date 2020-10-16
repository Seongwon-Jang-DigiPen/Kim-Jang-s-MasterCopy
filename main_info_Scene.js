class InfoScene extends EmptyScene{
	constructor(){
		super();
		this.play ={
			text : 'PLA',
			x:161,
			y:78,
			color:'#50dd2e'
		}
		this.game_name = {
			text : 'SPACE INVADERS',
			x:81,
			y:126,
			color : '#51ccd3'
		}
		this.score_advance = {
			text : 'SCORE ADVANCE TABLE',
			x:49,
			y:190,
			color:'#972d1f'
		}
		this.ufo_point ={
			text : '= ? MYSTERY',
			x:113,
			y:238,
			rate:0,
			color:'#972d1f'
		}
		this.squid_point ={
			text:'= 30 POINTS',
			x:113,
			y:270,
			rate:0,
			color:'#50dd2e'
		}
		this.crab_point ={
			text:'= 20 POINTS',
			x:113,
			y:302,
			rate:0,
			color:'#50dd2e'
		}
		this.octopus_point ={
			text:'= 10 POINTS',
			x:113,
			y:334,
			rate:0,
			color : '#51ccd3'
		}
		this.TAITO_CORP={
			text: '   TAITO CORP.MCMLXXXV',
			x:31,
			y:414,
			color:'#972d1f'
		};
		this.score_board=0;//make scoreboard.js
		this.static_text =[this.play,this.game_name,this.score_advance,this.TAITO_CORP]
		this.ufo =true;
		this.squid =false;
		this.crab =false;
		this.octopus =false;
	}
	Draw(){
		push();
		textSize(16);
		background(0);
		fill(255);
		for(var i =0;i<this.static_text.length;i++){
			push();
		fill(this.static_text[i].color)
		text(this.static_text[i].text,this.static_text[i].x,this.static_text[i].y);
		pop();
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
	text_animation(info_text){
if(info_text.rate>=info_text.text.length){
			info_text.rate = info_text.text.length;
		}
		for(var i =0;i<info_text.rate;i++){
			var text_size = 16
			// console.log(info_text.text[i]);
			push();
			fill(info_text.color);
			text(info_text.text[i],info_text.x+i*text_size,info_text.y);
			pop();
		}
		if(info_text.rate<info_text.text.length){
			info_text.rate +=0.1;
		}
	}
	OnKeyPressed(){}
	
}