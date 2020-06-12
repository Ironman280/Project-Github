var ball,paddle,ballimg,paddleimg;


function preload() {
  /* preload your images here of the ball and the paddle */
  paddleimg = loadImage("paddle.png");
  ballimg = loadImage("ball.png");
  
}
function setup() {
  createCanvas(400, 400);
  
     /* create the Ball Sprite and the Paddle Sprite */
   ball = createSprite(50,200,15,15);
   paddle = createSprite(380,200,10,100);
  
  
  /* assign the images to the sprites */
  ball.addImage("ball",ballimg);
  paddle.addImage("paddle", paddleimg)
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  if(ball.isTouching(edges[0]) || ball.isTouching(edges[2]) || ball.isTouching(edges[3])){
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3])
  }

  ball.debug = false
  paddle.debug = false
  
  paddle.setCollider("rectangle",0,0,20,100)
  /* Allow the ball to bounceoff from the paddle */
  if(ball.isTouching(paddle)){
   randomVelocity();
  }
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges)
  
  if(keyDown(UP_ARROW)){
    
    paddle.y = paddle.y - 5;    
  }
  
  if(keyDown(DOWN_ARROW)) {

    paddle.y = paddle.y + 5;    
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = -3
  ball.velocityX = -9;
}
