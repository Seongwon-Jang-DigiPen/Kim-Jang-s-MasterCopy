class diescene extends EmptyScene{
    constructor(){
        super();
    }

    Update()
    {

    }
    Draw()
    {
          push()
          fill(255)
          textSize(15)
          text('GAME OVER', 130, 130);
          pop()
    }
    OnKeyPressed()
    {

    }
   
}