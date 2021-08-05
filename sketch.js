const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  button = createButton("click to blow");
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mousePressed(blow);

  drawSprites();
}

function blow()
  {
    Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
  }
