function setup() {
  createCanvas(1600,400);
  createBackground(rgb(150,220,210));
  createSprite(400, 200, 50, 50);
  speed = random(55,90)
  weight = random(400,1500)
}

var car, wall;
var speed, weight;

function draw() {
  background(255,255,255);  
  drawSprites();
  car = createSprite(50,200,50,50);
  wall = createSprite(1500, 200, 60, height/2);
  car.collides = wall;
  car.velocityX = speed;

  if(wall.x - car.x < (car.weight + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500
  }

  if(deformation > 180){
    car.shapeColor = color(255,0,0);
  }

  if(deformation < 100){
    car.shapeColor = color(0,255,0);
  }
  drawSprites();
}