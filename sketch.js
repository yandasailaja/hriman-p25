
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper,ground;
var dustbin1,dustbin2,dustbin3;
var dustbinImage,paperImage

function preload()
{
  //paperImage = loadImage("paper.png");
  //dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(100,350,40,40);
   //paper.addImage("paper",paperImage)
   ground = new Ground(600,height,1200,20);

   dustbin1 = new DustbinImage(1000,440,100,20);
   //dustbin1.scale = "0.5";
  // dustbin1.addImage("dustbin",dustbinImage)
  // dustbin1.shapeColor = "yellow";
   dustbin2 = new Dustbin(800,height-20,20,100);

   dustbin3 = new Dustbin(1200,height-20,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,230,230);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();


  
  drawSprites();
 

}

function keyPressed(){
  if(keyCode == UP_ARROW){
  
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
   }
  }
  
  
  