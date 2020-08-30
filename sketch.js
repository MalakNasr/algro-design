var fixedRect, movingRect;
var o1, o2, o3, o4, o5, o6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  // movingRect.debug = true;
  o1 = createSprite(100,100,50,50);
  o2 = createSprite(200,100,50,50);
  o3 = createSprite(300,100,50,50);
  o4 = createSprite(400,100,50,50);
  o5 = createSprite(100,600,50,50);
  o6 = createSprite(600,600,50,50);
  o1.shapeColor = "green";
  o2.shapeColor = "green";
  o3.shapeColor = "green";
  o4.shapeColor = "green";
  o5.velocityX = 5;
  o6.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(o5, o6);

    if(isTouching(o2, movingRect)){
      movingRect.shapeColor = "red";
      o2.shapeColor = "red";
    }
    else{
      movingRect.shapeColor = "green";
      o2.shapeColor = "green";
    }
 
  drawSprites();
}




