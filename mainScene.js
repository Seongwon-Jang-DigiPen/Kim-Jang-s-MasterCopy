class mainScene{
	constructor(){
		this.PLEASE_SELECT = {
			text : '    PLEASE SSELECT',
			x : 49,
			y : 174
		};
		this.ONE_OR_TWO_PLAYER = {
			text : ' <  1 OR 2 PLAYERS  >',
			x : 49,
			y : 222,
			state : 1
		}
		this.ONE_PLAYER ={
			text : '        1 PLAYER',
			x : 49,
			y : 286
		}
		this.TWO_PLAYER = {
			text : '        2 PLAYERS',
			x : 49,
			y : 318
			}
		this.TAITO_CORP = {
			text : 'ⓒ  TAITO CORP.MCMLXXXV',
			x : 49,
			y : 414
		}
		this.HIGH_SCORE = {
			text : ['HIGHT',' SCORE',' 05000','1UP',' 00000','2UP','ROUND'],
			x : 385,
			y : [47,63,95,127,159,191,271]
		}
	}
	update(){}
	Draw(){
		push();
		textSize(25);
		background(0);
		fill(255);
		text(this.PLEASE_SELECT.text,this.PLEASE_SELECT.x,this.PLEASE_SELECT.y);
		text(this.ONE_OR_TWO_PLAYER.text,this.ONE_OR_TWO_PLAYER.x,this.ONE_OR_TWO_PLAYER.y);
		text(this.ONE_PLAYER.text,this.ONE_PLAYER.x,this.ONE_PLAYER.y);
		text(this.TWO_PLAYER.text,this.TWO_PLAYER.x,this.TWO_PLAYER.y);
		text(this.TAITO_CORP.text,this.TAITO_CORP.x,this.TAITO_CORP.y);
		for(var i = 0;i<this.HIGH_SCORE.text.length;i++){
			text(this.HIGH_SCORE.text[i],this.HIGH_SCORE.x,this.HIGH_SCORE.y[i]);
		}
		pop();
	}
	OnKeyPressed(){}
}