//maininfo2Scene
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//Junsu Jang
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class Info2Scene extends EmptyScene{
	constructor(){
		super();
		this.game_name = {
			text : 'SPACE INVADERS I',
            I : 'I',
            I_interval : 16*16-8,
			x:65,
			y:126,
			color : '#51ccd3'
		}
		this.score_advance = {
			text : 'SCORE ADVANCE TABLE',
			x:49,
			y:190,
			color:'#972d1f',
			choose_image : info_scene_image[1],
			image_x1:39,
			image_y1:181,
			image_x2:359,
			image_y2:181
		}
		this.red_ufo_point ={
			text : '=500 POINTS',
			x:113,
			y:238,
			rate:0,
			color:'#972d1f',
			image : info_2_image[0],
			image_x:95,
			image_y:230
		}
		this.green_ufo_point ={
			text : '= ? MYSTERY',
			x:113,
			y:270,
			rate:0,
			color:'#50dd2e',
			image : info_2_image[1],
			image_x:90,
			image_y:262
		}
		this.baby_squid_point ={
			text:'= 30 POINTS',
			x:113,
			y:302,
			rate:0,
			color:'#50dd2e',
			image : info_2_image[2],
			image_x:103,
			image_y:296,
            baby_image : info_2_image[5],
            baby_x: 60,
            baby_y:296
		}
		this.crab_point ={
			text:'= 20 POINTS',
			x:113,
			y:334,
			rate:0,
			color : '#51ccd3',
			image : info_2_image[3],
			image_x:102,
			image_y:328,
		}
		this.octopus_point ={
			text:'= 10 POINTS',
			x:113,
			y:366,
			rate:0,
			color : '#51ccd3',
			image : info_2_image[4],
			image_x:103,
			image_y:360
		}
		this.TAITO_CORP={
			text: '  TAITO CORP.MCMLXXXV',
			x:31,
			y:414,
			color:'#972d1f',
			cicle_c: circle_c_image,
			c_x:39,
			c_y:405
		}
		this.static_text =[this.game_name,this.score_advance,this.TAITO_CORP]
		this.red_ufo =true;
		this.green_ufo =false;
		this.baby_squid =false;
		this.crab =false;
		this.octopus =false;
		this.timer =0;
	}
	Draw(){
		push();
		textSize(16);
		background(0);
		fill(255);
        fill(this.game_name.color);
        text(this.game_name.I,this.game_name.x+this.game_name.I_interval,this.game_name.y);
		for(var i =0;i<this.static_text.length;i++){
			push();
		fill(this.static_text[i].color)
		text(this.static_text[i].text,this.static_text[i].x,this.static_text[i].y);
		pop();
	}
	image(this.score_advance.choose_image,this.score_advance.image_x1,this.score_advance.image_y1);
	image(this.score_advance.choose_image,this.score_advance.image_x2,this.score_advance.image_y2);
	image(this.red_ufo_point.image,this.red_ufo_point.image_x,this.red_ufo_point.image_y);
	image(this.green_ufo_point.image,this.green_ufo_point.image_x,this.green_ufo_point.image_y);
	image(this.baby_squid_point.image,this.baby_squid_point.image_x,this.baby_squid_point.image_y);
    image(this.baby_squid_point.baby_image,this.baby_squid_point.baby_x,this.baby_squid_point.baby_y);
	image(this.crab_point.image,this.crab_point.image_x,this.crab_point.image_y);
	image(this.octopus_point.image,this.octopus_point.image_x,this.octopus_point.image_y);
	image(this.TAITO_CORP.cicle_c,this.TAITO_CORP.c_x,this.TAITO_CORP.c_y);
	if(this.red_ufo){
		this.text_animation(this.red_ufo_point);
	}
	if(this.green_ufo){
		this.text_animation(this.green_ufo_point);
	}
	if(this.baby_squid){
		this.text_animation(this.baby_squid_point);
	}
	if(this.crab){
		this.text_animation(this.crab_point);
	}
	if(this.octopus){
		this.text_animation(this.octopus_point);
	}
	pop();
	draw_text();
    draw_life();
	}
	Update(){
		if(this.red_ufo_point.rate ==this.red_ufo_point.text.length){
			this.green_ufo = true;
		}
		if(this.green_ufo_point.rate ==this.green_ufo_point.text.length){
			this.baby_squid = true;
		}
		if(this.baby_squid_point.rate ==this.baby_squid_point.text.length){
			this.crab = true;
		}
		if(this.crab_point.rate ==this.crab_point.text.length){
			this.octopus = true;
		}
		if(this.octopus_point.rate ==this.octopus_point.text.length){
			this.timer +=1/60;
			if(this.timer>5){
				toPlayScene();
			}
		}
	}
	text_animation(info_text){
if(info_text.rate>=info_text.text.length){
			info_text.rate = info_text.text.length;
		}
		for(var i =0;i<info_text.rate;i++){
			var text_size = 16
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