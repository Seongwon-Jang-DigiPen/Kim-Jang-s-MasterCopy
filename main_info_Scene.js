class InfoScene extends EmptyScene{
	constructor(){
		super();
		this.play ={
			text : 'PLA',
			x:161,
			y:78,
			color:'#50dd2e',
			y_image : info_scene_image[0],
			y_x:217,
			y_y:69,
			y_angle:0,
			y_draw:true
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
			color:'#972d1f',
			choose_image : info_scene_image[1],
			image_x1:39,
			image_y1:181,
			image_x2:359,
			image_y2:181
		}
		this.ufo_point ={
			text : '= ? MYSTERY',
			x:113,
			y:238,
			rate:0,
			color:'#972d1f',
			image : info_scene_image[2],
			image_x:95,
			image_y:230
		}
		this.squid_point ={
			text:'= 30 POINTS',
			x:113,
			y:270,
			rate:0,
			color:'#50dd2e',
			image : info_scene_image[5],
			image_x:103,
			image_y:264
		}
		this.crab_point ={
			text:'= 20 POINTS',
			x:113,
			y:302,
			rate:0,
			color:'#50dd2e',
			image : info_scene_image[3],
			image_x:102,
			image_y:296
		}
		this.octopus_point ={
			text:'= 10 POINTS',
			x:113,
			y:334,
			rate:0,
			color : '#51ccd3',
			image : info_scene_image[4],
			image_x:103,
			image_y:328
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
		this.fix_y_ani ={
			squid_image : [info_scene_image[5],info_scene_image[6],info_scene_image[7],info_scene_image[8]],
			image_num : 0,
			squid_x:300,
			squid_y:69,
			speed:1,
			y_point:225,
			hide_point:300,
			squid_draw:false,
			squid_animate:false,
			squid_state : 'going',
		}
		this.static_text =[this.play,this.game_name,this.score_advance,this.TAITO_CORP]
		this.ufo =true;
		this.squid =false;
		this.crab =false;
		this.octopus =false;
		this.timer =0;
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
	push();
	if(this.play.y_draw){
		translate(this.play.y_x,this.play.y_y);
		rotate(this.play.y_angle);
		image(this.play.y_image,0,0);
	}
	pop();
	image(this.score_advance.choose_image,this.score_advance.image_x1,this.score_advance.image_y1);
	image(this.score_advance.choose_image,this.score_advance.image_x2,this.score_advance.image_y2);
	image(this.ufo_point.image,this.ufo_point.image_x,this.ufo_point.image_y);
	image(this.squid_point.image,this.squid_point.image_x,this.squid_point.image_y);
	image(this.crab_point.image,this.crab_point.image_x,this.crab_point.image_y);
	image(this.octopus_point.image,this.octopus_point.image_x,this.octopus_point.image_y);
	image(this.TAITO_CORP.cicle_c,this.TAITO_CORP.c_x,this.TAITO_CORP.c_y);
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
	if(this.fix_y_ani.squid_draw){
		image(this.fix_y_ani.squid_image[floor(this.fix_y_ani.image_num)],this.fix_y_ani.squid_x,this.fix_y_ani.squid_y);
	}
	//draw score boards
	pop();
	draw_text();
	push();
	fill(0);
	rect(447, 300,50,50);
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
		if(this.octopus_point.rate ==this.octopus_point.text.length){
			this.fix_y_ani.squid_animate = true;
		}
		if(this.fix_y_ani.squid_animate){
			// console.log(this.fix_y_ani.squid_state);
			this.fix_y_ani.image_num = (this.fix_y_ani.image_num+0.25)%2
			if(this.fix_y_ani.squid_state =='going'){
				this.fix_y_ani.squid_draw = true;
				this.fix_y_ani.squid_x-=this.fix_y_ani.speed;
				if(this.fix_y_ani.squid_x<=this.fix_y_ani.y_point){
					this.fix_y_ani.squid_state = 'getY';
				}
			}
			if(this.fix_y_ani.squid_state =='getY'){
				if(this.fix_y_ani.squid_x<this.fix_y_ani.hide_point){
					this.fix_y_ani.image_num +=2;
					this.fix_y_ani.squid_x+=this.fix_y_ani.speed;
					this.play.y_x+=this.fix_y_ani.speed;
				}
				if(this.fix_y_ani.squid_x>=this.fix_y_ani.hide_point){
					this.fix_y_ani.squid_draw = false;
					this.play.y_draw = false;
					this.play.y_angle = PI;
					this.timer +=0.1;
					// console.log(this.timer);
					if(this.timer > 5){
						// console.log('on!!!!!!!!');
						// console.log(this.fix_y_ani)
						this.fix_y_ani.squid_state ='returnY'
					}
				}
			}
			if(this.fix_y_ani.squid_state == 'returnY'){
				this.fix_y_ani.image_num +=2;
				this.play.y_draw = true;
				// console.log(this.play.y_x);
				this.fix_y_ani.squid_draw = true;
				this.fix_y_ani.squid_x-=this.fix_y_ani.speed;
				this.play.y_x-=this.fix_y_ani.speed;
				if(this.fix_y_ani.squid_x<=this.fix_y_ani.y_point){
					this.fix_y_ani.squid_state = 'ani_end';
				}
			}
			if(this.fix_y_ani.squid_state == 'ani_end'){
				this.fix_y_ani.squid_draw = false;
			}
		}
		//
		//animation 'y' and squid

			if(this.fix_y_ani.squid_state == 'ani_end')
		{
			toWaitScene()
		}
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
	OnKeyPressed(){

		if(keyCode == 13)
		{
			toMainScene()
		}
	}
	
}