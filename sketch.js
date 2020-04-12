var square, r, g, b

function setup() {
  createCanvas(1000,1000);
  square= createSprite(500,500,25,25)
  r=0
  g=0
  b=0
}

function draw() {
  background(r,g,b); 
  square.x = World.mouseX;
  square.y = World.mouseY;
  
  r= World.mouseX;
  g= World.mouseY;
  b= 100
  
  drawSprites();
}