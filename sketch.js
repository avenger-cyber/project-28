
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dground,tree,treeimg;
var stones;
var boyimg,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
	boyimg = loadImage("boy.png");
	treeimg = loadImage("tree.png") 
}

function setup() {
	createCanvas(1300, 600);
	
	engine = Engine.create();
	world = engine.world;

	dground = new Ground();
	stones = new Stone(100,460,23)
	
	mango1=new Mango(1100,100,30);
	mango2=new Mango(1100,100,30);
	mango3=new Mango(1100,100,30);
	mango4=new Mango(1100,100,30);
	mango5=new Mango(1100,100,30);
	mango6=new Mango(1100,100,30);
	mango7=new Mango(1100,100,30);
	mango8=new Mango(1100,100,30);
	mango9=new Mango(1100,100,30);
	mango10=new Mango(1100,100,30);
	
	
	
	
	

	tree =new Tree(1050,580);
	ground=new Ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeimg.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();
}
