//mainScene.js
//Master Copy - Space Invaders II
//GAM100
//Fall, 2020
//Junsu Jang
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class MainScene{
	constructor(){//Information of mainScene texts
		this.PLEASE_SELECT = {
			text : '  PLEASE SSELECT',
			x : 49,
			y : 174,
			color : '#51ccd3'
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
		player1_Score = 0;
		player2_Score = 0;
		
		if(this.squid.squid_animate){//Delete 's' animation
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

		if(7<this.changeinfoCount)//To infoScene
		{
			toInfoScene()
		}
		this.changeinfoCount+=1/60
	}
	Draw(){// Draw texts and animation
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

		if(this.ONE_OR_TWO_PLAYER.state==1){
			image(this.ONE_OR_TWO_PLAYER.one_image,this.ONE_OR_TWO_PLAYER.one_x,this.ONE_OR_TWO_PLAYER.one_y)
		}
		else if(this.ONE_OR_TWO_PLAYER.state==2){
			image(this.ONE_OR_TWO_PLAYER.two_image,this.ONE_OR_TWO_PLAYER.two_x,this.ONE_OR_TWO_PLAYER.two_y)
		}

		pop();
		if(this.squid.squid_draw){
			image(this.squid.image[floor(this.squid.image_num)],this.squid.x,this.squid.y);
		}
		if(this.squid.bullet_draw){
			image(this.squid.bullet_image[floor(this.squid.bullet_image_num)],this.squid.bullet_x,this.squid.bullet_y);
		}
		image(this.TAITO_CORP.cicle_c,this.TAITO_CORP.c_x,this.TAITO_CORP.c_y);
		draw_text();//High score board
		push();
		fill(0);
		rect(447, 300,50,50);
		pop();
	}
	OnKeyPressed(){
		if(keyCode == 16){//Choose 1-p mode and 2-p mode 
			this.changeinfoCount = 0
			if(this.ONE_OR_TWO_PLAYER.state==1){
				this.ONE_OR_TWO_PLAYER.state = 2;
			}
			else if(this.ONE_OR_TWO_PLAYER.state==2){
				this.ONE_OR_TWO_PLAYER.state = 1;
			}
		}
		if(keyCode == 13)//Enter to playScene
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