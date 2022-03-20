const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
   background1 = loadImage("Images/background_1.jpg");
   background2 = loadImage("Images/background_2.jpg");
   boyAnimation = loadAnimation("Images/boy_running1.png","Images/boy_running2.png","Images/boy_running3.png","Images/boy_running4.png");
   building1 = loadImage("Images/Building1.png");
   building2 = loadImage("Images/building2.png");
   building3 = loadImage("Images/building3.png");
}
    
function setup(){

createCanvas(1200,650);
    
path = createSprite(540,370);
path.addImage(background1);
path.x=-5
path.scale= 1.1

boy = createSprite()


}

function draw(){
    
background("white")



drawSprites();

}



