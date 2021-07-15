class Bin{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.binWidth=200;
		this.binHeight=100;
		this.wallThickness=20;
		this.angle=0;	

    var option={
      isStatic:true
    }
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.binWidth, this.wallThickness,option)
		this.leftWallBody=Bodies.rectangle(this.x-this.binWidth/2, this.y-this.binHeight/2, this.wallThickness, this.binHeight, option)
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.binWidth/2, this.y-this.binHeight/2, this.wallThickness, this.binHeight, option)
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			angleMode(RADIANS);
      stroke("red");
			fill("red");
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.binHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			angleMode(RADIANS)
      stroke("red");
			fill("red");
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.binHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER);
      stroke("red");
			angleMode(RADIANS)
			fill("red")
			rect(0,0,this.binWidth, this.wallThickness);
			pop()
			
	}

}
