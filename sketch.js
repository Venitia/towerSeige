const Bodies= Matter.Bodies;
const Engine= Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;


//create the variables for the sprites
var engine, world;
var block,ground,polygon;
var ball, slingshot;

function preload(){
    polygon = loadImage("polygon.png");
}


function setup () {
createCanvas(1600,800);

engine= Engine.create();
world = engine.world;
Engine.run(engine);

//create the ground and the stands for base
ground = new Ground(800,600,1600,20);
stand1= new Stand(1250,300,500,20);
stand2 = new Stand(700,450,600,20);

//top ground blocks
block1 = new Blocks(1250,100,80,80);
block2 = new Blocks(1330,100,80,80);
block3 = new Blocks(1170,100,80,80);
block4 = new Blocks(1250,100,80,80);
block5 = new Blocks(1410,100,80,80);
block6 = new Blocks(1090,100,80,80);
block7 = new Blocks(1330,100,80,80);
block8 = new Blocks(1170,100,80,80);


//lower ground blocks
block9 = new Blocks(700,100,80,80);
block10 = new Blocks(780,100,80,80);
block11 = new Blocks(860,100,80,80);
block12 = new Blocks(940,100,80,80);
block13 = new Blocks(620,100,80,80);
block14 = new Blocks(540,100,80,80);
block15 = new Blocks(460,100,80,80);
block16 = new Blocks(700,100,80,80);
block17 = new Blocks(780,100,80,80);
block18 = new Blocks(860,100,80,80);
block19 = new Blocks(620,100,80,80);
block20 = new Blocks(540,100,80,80);
block21 = new Blocks(700,100,80,80);
block22 = new Blocks(780,100,80,80);
block23 = new Blocks(620,100,80,80);


ball = Bodies.circle(100,200,100);
World.add(world,ball);
  



slingshot = new Polygon(this.ball,{x:100,y:200})


}

function draw () {
    background("white"); 
  
    
    ground.display();
    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    imageMode (CENTER);
    image(polygon,ball.position.x,ball.position.y,100,100);
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode ===32){
        slingshot.attach(this.ball);
    }
}