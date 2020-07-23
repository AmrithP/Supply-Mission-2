//variables are defined

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground2;
var leftBox,middleBox,rightBox;
var backgroundIMG;
var text1, text1Image, text2, text2Image;

//Namespaces are created

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	//Images are being loded to corresponding var name

	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	backgroundIMG = loadImage("AcZacvL.jpg");
	text1Image = loadImage("text.png");
	text2Image = loadImage("text2.png");

}

function setup(){

	//Canvas is formed

	var canvas = createCanvas(800, 700);

	engine = Engine.create();
    world = engine.world;

	//Placement of the rectangle

	rectMode(CENTER);

	//Sprites and objects are created and images are being added to them

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//Drop zone objects are created



	leftBox = new Box(290,610,20,100);
	middleBox = new Box(400,650,200,20);
	rightBox = new Box(510,610,20,100);

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	//Text sprites show reader what to do

	text1 = createSprite(660,140,50,50);
	text1.addImage(text1Image);
	text1.scale = 0.2;

	text2 = createSprite(660,340,50,50);
	text2.addImage(text2Image);
	text2.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	//Supplies sprite is creates and added to world

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	ground2 = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true} );
 	World.add(world, ground2);

	Engine.run(engine);

}


function draw() {

  rectMode(CENTER);

  //Background is created

  background(backgroundIMG);

  //Engine is being updated

  Engine.update(engine);

  //packagesprite and body have same x position

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //Objects are being displayed

  leftBox.display();
  middleBox.display();
  rightBox.display();

  //Sprites are drawn

  drawSprites(); 
 
}

function keyPressed() {

	//Supplies fall to gorund with down arrow

 	if (keyCode === DOWN_ARROW){

		Matter.Body.setStatic(packageBody, false);
		
	  
	}

}


