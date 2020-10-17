class MainScene{
	constructor(){
		this.PLEASE_SELECT = {
			text : '  PLEASE SSELECT',
			x : 49,
<<<<<<< HEAD
			y : 159,
			s_position : 0
=======
			y : 174,
			color : '#51ccd3'
>>>>>>> 32f2404874da5fbae84bdaad9a2bc2771d0bc64d
		};
		this.ONE_OR_TWO_PLAYER = {
			text : '< 1 OR 2 PLAYERS >',
			x : 49,
			y : 222,
			color:'#9a280e',
			state : 1,
			one_image:mainscene_squid_image[0],
			one_x:120,
			one_y:278,
			two_image:mainscene_squid_image[1],
			two_x:120,
			two_y:310
		}
		this.ONE_PLAYER ={
			text : '      1 PLAYER',
			x : 49,
			y : 286,
			color:'#50dd2e'
		}
		this.TWO_PLAYER = {
			text : '      2 PLAYERS',
			x : 49,
			y : 318,
			color:'#3cd6d6'
		}
		this.TAITO_CORP = {
			text : '  TAITO CORP.MCMLXXXV',
			x : 31,
			y : 414,
			color:'#972d1f',
			cicle_c: circle_c_image,
			c_x:39,
			c_y:405
		}
		// this.HIGH_SCORE = {
		// 	text : ['HIGHT',' SCORE',' 05000','1UP',' 00000','2UP','ROUND'],
		// 	x : 385,
		// 	y : [47,63,95,127,159,191,271]
		// }
		this.color_text = [this.PLEASE_SELECT,this.ONE_OR_TWO_PLAYER,this.ONE_PLAYER,this.TWO_PLAYER,this.TAITO_CORP];
		this.squid={
			image:[mainscene_squid_image[6],mainscene_squid_image[7]],
			image_num:0,
			bullet_image:[mainscene_squid_image[2],mainscene_squid_image[3],mainscene_squid_image[4],mainscene_squid_image[5]],
			bullet_image_num :0,
			speed:2,
			bullet_speed:5,
			purpose:199,
			bullet_purpose:167,
			x:40,
			y:74,
			bullet_x:199,
			bullet_y:80,
			squid_draw:true,
			bullet_draw:false,
			squid_animate:true,
			bullet_animate:false
		}

		this.changeinfoCount = 0;
	}
	Update(){
		if(this.squid.squid_animate){
			this.squid.x +=this.squid.speed;
			this.squid.image_num =(this.squid.image_num+0.25)%2;
			if(this.squid.x>=this.squid.purpose){
				this.squid.x=this.squid.purpose;
				this.squid.squid_animate =false;
				this.squid.bullet_animate = true;
				this.squid.bullet_draw = true;
			}
		}
		if(this.squid.bullet_animate){
			this.squid.bullet_y +=this.squid.bullet_speed;
			this.squid.bullet_image_num = (this.squid.bullet_image_num+0.5)%4;
			if(this.squid.bullet_y >=this.squid.bullet_purpose){
				this.PLEASE_SELECT.text ='  PLEASE  SELECT';
				this.squid.bullet_animate = false;
				this.squid.bullet_draw = false;
			}
		}

		if(7<this.changeinfoCount)
		{
			toInfoScene()
		}
console.log(deltaTime)
		this.changeinfoCount += deltaTime;

	}
	Draw(){
		push();
		textSize(16);
		background(0);
		fill(255);
		for(var i =0;i<this.color_text.length;i++){
			push();
			fill(this.color_text[i].color);
			text(this.color_text[i].text,this.color_text[i].x,this.color_text[i].y);
			pop();
		}
		// for(var i = 0;i<this.HIGH_SCORE.text.length;i++){
		// 	text(this.HIGH_SCORE.text[i],this.HIGH_SCORE.x,this.HIGH_SCORE.y[i]);
		// }
		if(this.ONE_OR_TWO_PLAYER.state==1){
			image(this.ONE_OR_TWO_PLAYER.one_image,this.ONE_OR_TWO_PLAYER.one_x,this.ONE_OR_TWO_PLAYER.one_y)
		}
		else if(this.ONE_OR_TWO_PLAYER.state==2){
			image(this.ONE_OR_TWO_PLAYER.two_image,this.ONE_OR_TWO_PLAYER.two_x,this.ONE_OR_TWO_PLAYER.two_y)
		}
		// image()//monster animation
		// image()//player choose image
		pop();
		if(this.squid.squid_draw){
			image(this.squid.image[floor(this.squid.image_num)],this.squid.x,this.squid.y);
		}
		if(this.squid.bullet_draw){
			image(this.squid.bullet_image[floor(this.squid.bullet_image_num)],this.squid.bullet_x,this.squid.bullet_y);
		}
		image(this.TAITO_CORP.cicle_c,this.TAITO_CORP.c_x,this.TAITO_CORP.c_y);
		draw_text();
		push();
		fill(0);
		rect(447, 300,50,50);
		pop();
	}
	OnKeyPressed(){
		if(keyCode == 16){
			this.changeinfoCount = 0
			// console.log(this.ONE_OR_TWO_PLAYER.state)
			if(this.ONE_OR_TWO_PLAYER.state==1){
				this.ONE_OR_TWO_PLAYER.state = 2;
			}
			else if(this.ONE_OR_TWO_PLAYER.state==2){
				this.ONE_OR_TWO_PLAYER.state = 1;
			}
		}
		if(keyCode == 13)
		{
			if(this.ONE_OR_TWO_PLAYER.state==1)
			{
				set_gameScene(false)
				toPlayScene()
			}
			else if(this.ONE_OR_TWO_PLAYER.state==2)
			{
				set_gameScene(true)
				toPlayScene()
			}
		}
	}
}