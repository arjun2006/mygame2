
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var basketball, net, string
var basketballImg,  netImg, boyImg;
var score=0

function preload()
{
	
	boyImg=loadImage("Plucking mangoes/boy.png")
	netImg=loadImage("net.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
	ground=new Ground(400,680,800,60)
	boy=createSprite(150,600,20,10)
	
	boy.addImage("boy",boyImg)
	boy.scale=0.11

	
	
	basketball=new Basketball(90,600,50)
	string=new String(basketball.body,{x:100,y:500}) 
      
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display()
  
  basketball.display();
  image(netImg,width-250,height/5,300,400)
  
 text ("score:"+score,750,20);
  drawSprites();
 
detectCollision(basketball);

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(basketball.body,{x:90,y:530})
		launcherObject.attach(basketball.body)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(basketball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}
function detectCollision(basketball){
	
	basketballBodyPosition=basketball.body.position

	var distance=dist(basketballBodyPosition.x,basketballBodyPosition.y,width-250,height/5)
	console.log(distance)
if(distance>0 && distance<30){
	console.log(distance)
	score++
}
}



