
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
const Body = Matter.Body;
 

function preload(){
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(20,400,15);
    ground = new Ground(500,680,1000,20);
    bin=new Bin(830,660);



	  Engine.run(engine);
  
}


function draw() {
  background("aqua");
  
  bin.display();
  paper.display();
  ground.display();


 
}



