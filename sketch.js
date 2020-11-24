const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);
//box
    box1 = new Box(540,278,40,40);
    box2 = new Box(580,278,40,40);
    box3 = new Box(620,278,40,40);
    box4 = new Box(660,278,40,40);
    box5 = new Box(700,278,40,40);
    box6 = new Box(740,278,40,40);
    box7 = new Box(780,279,40,40);
    box8 = new Box(660,160,40,40);
    // new one
    box9 = new Box(900,160,40,40);
    box10 = new Box(940,160,40,40);
    box11 = new Box(980,160,40,40);
    box12 = new Box(1020,160,40,40);
    box13 = new Box(1060,160,40,40);
    //log
    log1 = new Log(650,280,300,20);
    log2 = new Log(980,180,200,20);
   //pig[box]
    pig1 = new Pig(580, 240,40,40);
    pig2 = new Pig(620, 240,40,40);
    pig3 = new Pig(660, 240,40,40);
    pig4 = new Pig(700, 240,40,40);
    pig5 = new Pig(740, 240,40,40);
    //second part
    pig6 = new Pig(940,120,40,40);
    pig7 = new Pig(980,120,40,40);
    pig8 = new Pig(1020,120,40,40);
    //new block
    b1 = new Block(620, 200,40,40);
    b2 = new Block(660, 200,40,40);
    b3 = new Block(700, 200,40,40);
    //second part
    b4 = new Block(980,80,40,40)
//[hexagon]
    bird = new Bird(100,100);

   // log6 = new Log(230,180,80, PI/2);
    //chain = new Chain(bird.body,log6.body);
    slingshot=new SlingShot(bird.body,{x:200,y:100})
}

function draw(){
    background("Black");
    Engine.update(engine);
    strokeWeight(4);
    //box
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
   //2nd one
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    
   //block
   b1.display();
   b2.display();
   b3.display();
//2nd one
b4.display();
    //pig
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display(); 
    pig5.display();
    //2nd one
    pig6.display();
    pig7.display();
    pig8.display();
    //log
    log1.display();
    log2.display();
    //others
    bird.display();
    ground.display();
  //  platform.display();
   // log6.display();
    slingshot.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly()

}