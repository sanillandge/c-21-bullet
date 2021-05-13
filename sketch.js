var wall, thickness;

var bullet, speed, weight;


function setup() {
createCanvas(1600,400);

speed=random(223, 321);
weight=random(30, 52);

thickness=random(22,83)

bullet=createSprite(50, 200, 50, 5);
bullet.velocityX=speed
bullet.shapeColor=color(255);

wall=createSprite(1500, 200, thickness, height/2)
wall.shapeColor=color(80,80,80)
}

function draw() {
  background("GRAY");  




  hascollided();
  drawSprites();
}

function hascollided(bullet, wall){

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge);
{
  return true
}
  return false;
}
  if(hascollided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5 * speed* speed/(thickness *thickness *thickness);

if (damage>10)
{
wall.shapecolor=color(255,0,0)
}
if(damage<10)
{
wall.shapecolor=color(0,255,0);
}
  
}



  

