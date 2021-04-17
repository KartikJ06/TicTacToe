var database;
var circle1; 
var x,y;



function preload(){
  backgroundImage = loadImage("background.jpg"); 
  
}
function setup() {
  createCanvas(displayWidth - 40, displayHeight - 200);
  database = firebase.database();

  circle1 = new Circle(); 
  circle2 = new Circle(); 
  circle3 = new Circle(); 
}

function draw() {
  background(backgroundImage);
  line1 = createSprite(600,350,20,500); 
  line1.shapeColor = "black";
  line2 = createSprite(900,350,20,500); 
  line2.shapeColor = "brown";
  line3 = createSprite(750,250,800,20);
  line3.shapeColor = "blue";  
  line4 = createSprite(750,450,800,20); 
  line4.shapeColor = "white"
  circle1.display(x,y); 

  drawSprites();  
}

function mouseReleased(){
  x = World.mouseX; 
  y = World.mouseY; 
  if (x>590,y>250){
    circle1.position.x = 470
    circle1.position.y = 150
  }
  
}
