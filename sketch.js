var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImg('path.png');
  boyImg=loadAnimation('Runner-1.png','Runner-2.png');
}

function setup(){

createCanvas(400,400);

// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation('JakeRunning',boyImg);

//create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
}

function draw(){
  background(0);
  path.velocityY=4;

//boy moving on Xaxis with mouse
boy.x= World.mouseX;

edges=createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);

//code to reset the background
if(path.y > 400){
   path.y=height/2;
}

drawSprites();
}

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  invisibleGround=createSprite(200,190,400,20);
  invisibleGround.visible=false;
}

function draw() {
  background(220);

  //jump when the space button is pressed
  if (keyDown("space")&&trex.y>155) { 
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(invisibleGround);
  drawSprites();
}