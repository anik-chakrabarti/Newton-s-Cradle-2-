
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;
const MouseConstraint = Matter.MouseConstraint ;

var engine,world ;
var bob1,bob2,bob3,bob4,bob5 ;
var chain1,chain2,chain3,chain4,chain5 ;
var roof1,roof2,roof3,roof4,roof5 ; 
var roof ;

function setup() {
	canvas = createCanvas(850,370);
	engine = Engine.create();
  world = engine.world;

  mConstraint =  MouseConstraint.create(engine);
  World.add(world,mConstraint);

	//Creating Bodies

	roof = createSprite(400,50,180,17); // this is just a sprite

	roof1 = new Roof(400,50,50,20);
	roof2 = new Roof(360,50,50,20);
	roof3 = new Roof(320,50,50,20);
	roof4 = new Roof(440,50,50,20);
	roof5 = new Roof(480,50,50,20);
	
	bob1 = new Bob(400,250,40,0,0);
	bob2 = new Bob(360,250,40,0,0);
	bob3 = new Bob(320,250,40,-0.02,0);
	bob4 = new Bob(440,250,40,0,0);
	bob5 = new Bob(480,250,40,0,0);

	chain1 = new Chain(roof1.body,bob1.body,0,0);
	chain2 = new Chain(roof2.body,bob2.body,0,0);
	chain3 = new Chain(roof3.body,bob3.body,0,0);
	chain4 = new Chain(roof4.body,bob4.body,0,0);
	chain5 = new Chain(roof5.body,bob5.body,0,0);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  airFriction =0 ;

  //displaying bodies

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function mouseDragged(){
  Body.setPosition(bob3.body , {x: mouseX, y: mouseY });
}



