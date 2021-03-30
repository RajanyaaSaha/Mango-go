
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(900,150,30);
	mango4=new mango(970,200,30);
	mango5=new mango(1050,200,30);
	mango6=new mango(1099,200,30);
	stone=new Stone(100,100);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stone.body,{x:235,y:420});
	var render=Render.Create({
		element:document.body,
		engine:engine,
		options:{
			width:1300,
			height:600,
			wireframes:false
		}
	});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();

detectollosion(stoneObj,mango1);
detectollosion(stoneObj,mango2);
detectollosion(stoneObj,mango3);
detectollosion(stoneObj,mango4);
detectollosion(stoneObj,mango5);
detectollosion(stoneObj,mango6);



  

  groundObject.display();
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});	
}
function mouseReleased(){
	launcherObject.fly();
}
function keyPressed(){
	if(keyCode ===32){
	matter.body.setPosition(stoneObj.body,{x:235,y:420})
	launcherObject.attach(stoneObject.body);
	}
	}