var bee,flower1,flower2;
var flower1Gr,flower2Gr;
var score=0;
var lives=3;
function setup() {
  createCanvas(800,800);
  bee=createSprite(400,700,10,10);
 bee.shapeColor="yellow"
}

function draw() {
  background("green");
  textSize(15)
  text("Score :"+score,400,100);
  text("Live :"+ lives,200,100);
if(keyDown("LEFT_ARROW")){
  bee.x=bee.x-2;
}
if(keyDown("RIGHT_ARROW")){
  bee.x=bee.x+2;
}
if(bee.isTouching(flower1Gr)){
score=score+1;
}
if(bee.isTouching(flower2Gr)){
  live=live-1;
}
 spawnflower1();
 spawnflower2();
 drawSprites();
}
function spawnflower1(){
  if(frameCount%20===0){
  flower1=createSprite(200,200,10,10);
  flower1.shapeColor="purple";
  flower1.velocityY=3;
  flower1.x=Math.round(random(1,800));
  }
  flower1Gr.add(flower1);
}
function spawnflower2(){
  if(frameCount%30===0){
  flower2=createSprite(200,0,10,10);
  flower2.shapeColor="red";
  flower2.velocityY=4;
  flower2.x=Math.round(random(1,800));
  }
  flower2Gr.add(flower2);
}