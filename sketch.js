const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var polygonImg;
var score=0;

function preload() {
polygonImg=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground= new Ground(600,height,1200,20);
    stand1= new Ground(500,300,260,10);
    stand2 = new Ground(900, 180, 220, 10);
//tower 1

    box1 = new Box(400,290,45,45);
    box2 = new Box(450,290,45,45);
    box3 = new Box(500,290,45,45);
    box4 = new Box(550,290,45,45);
    box5 = new Box(600,290,45,45);
    
  //t1level2
  box6 = new Box(450,290,45,45);
  box7 = new Box(500,290,45,45);
  box8 = new Box(550,290,45,45);

  box9 = new Box(500,290,45,45);



//tower 2
  box10 = new Box(850,170,45,45);
  box11 = new Box(900,170,45,45);
  box12 = new Box(950,170,45,45);


  box13 = new Box(870,140,45,45);
  box14 = new Box(920,140,45,45);
  box15 = new Box(895,100,45,45);

polygon=Bodies.circle(50,200,50);
World.add(world,polygon);

slingShot=new SlingShot(this.polygon,{x:50,y:200});

 
}

function draw(){
    background(0);
    textSize(25);
    fill("white");
    text("Drag the hexagonal shape and try to hit the block",290,20);
    text("Score : "+score,50,40);
    Engine.update(engine);
  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    box15.display();
    ground.display();
    
    stand1.display();
    stand2.display();
    
   box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
   


  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  slingShot.fly();
  }

  function keyPressed(){
    if(keyCode === 32 ){
      slingShot.attach(this.polygon);
    }
    }