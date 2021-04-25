var PLAY = 1;
var END = 0;
var gameState = PLAY;
var boy_collided;
var boy, boy_running, boy_jumping;
var ground, invisibleGround ;
var starsGroup ,obj;

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var jombs;
var score=0;

var gameOver, restart;
var back,backs;

function preload(){
  boy_running =   loadAnimation("imeges/boy5.png","imeges/boy2.png","imeges/boy3.png","imeges/boy4.png");
  boy_jumping = loadAnimation("imeges/boy1.png");
  boy_collided = loadAnimation("imeges/boy2.png");
  jombs = loadAnimation("imeges/j2.png","imeges/j3.png");
  
  backs = loadImage("imeges/back.webp");
  overSound=loadSound("gameovers.wav");
  jumpSound=loadSound("jumps.mp3");
  obj = loadImage("imeges/star.png");

  obstacle1 = loadImage("imeges/obstacle1.png");
   obstacle2 = loadImage("imeges/obstacle1.png");
 
  
  gameOverImg = loadImage("imeges/Capture.JPG");
  
}

function setup() {
  createCanvas(800,400);
  
 back = createSprite(100,100,800,200);
//  back.addImage("back",backs);
 back.velocityX=-5;
 back.scale=3.5;




back = createSprite(450, 200);
 back.addImage("back", backs);
  back.velocityX = -2;
   back.scale = 2; 
   back.debug = true;
    back2 = createSprite(1350, 200); 
    back2.addImage("back", backs);
    back2.velocityX = -2; 
    back2.scale = 2;
     back2.debug = true;
   
boy = createSprite(200,350,20,50);
  boy.addAnimation("running", boy_running);
  boy.addAnimation("jumping", boy_jumping);
  boy.scale = .75;
  
  jomb= createSprite(75,350,displayWidth,displayWidth);
  jomb.addAnimation("run",jombs);

 


  
  gameOver = createSprite(200,100,40,40);
  gameOver.addImage("over",gameOverImg);
  
  //restart = createSprite(250,250,40,40);
  //restart.addImage(restartImg);
  
  gameOver.scale = 0.2;
  // restart.scale = 0.5;

  gameOver.visible = false;
  // restart.visible = false;
  
  invisibleGround = createSprite(200,400,400,10);
  invisibleGround.visible = false;
  
  
  
  obstaclesGroup = new Group();
  starsGroup = new Group();
  score = 0;
}

function draw() {

  //trex.debug = true;
  background(255);
  //console.log(boy.x);
  




  if (gameState===PLAY){
    


    //score = score + Math.round(getFrameRate()/60);
    if(keyDown("space") )  {
      boy.velocityY = -12;
     // boy.changeAnimation("jumping",boy_jumping); 
     jumpSound.play();
    }
    boy.velocityY = boy.velocityY + 0.8;
    boy.collide(invisibleGround);
    //boy.changeAnimation("running",boy_running);
    //ground.velocityX = -(6 + 3*score/100);
    //console.log(back.x);
    // if(back.x<-30){ 
    
    //   back.x=800;
    //  }
    
   // boy.changeAnimation("running",boy_running);
   if (back.x < -400) {
     back.x = 1200; 
    } 
     if (back2.x < -400) {
        back2.x = 1200;
       }
    
  
    
      back = displayWidth
       if (back.x < 0){
    //  back.x = displayWidth/2;
    //   }

    // camera.ground.x=displayWidth/2;
    // camera.poisition.y=cars[index-1].y
  
    
    spawnObstacles();
    spawnStars();
    
    if(starsGroup.isTouching(boy)){
    score+=1;
    starsGroup.destroyEach();
    }  
      if(obstaclesGroup.isTouching(boy)){
          gameState = END;
     }
   }
  
   else if (gameState === END) {
     gameOver.visible = true;
    // restart.visible = true;
    overSound.play();
     //set velcity of each game object to 0
    // ground.velocityX = 0;
     boy.velocityX = 0;
     back.velocityX =0;
     //obstaclesGroup.setVelocityXEach(0);
    boy.changeAnimation("collided",boy_collided);
    
     //change the trex animation
     //boy.changeAnimation("jumping",boy_jumping);
    
     //set lifetime of the game objects so that they are never destroyed
     //obstaclesGroup.setLifetimeEach(-1);
    
    
    //  if(mousePressedOver(restart)) {
    //    reset();
    // }
   }
  
   jomb.collide(invisibleGround); 
   

  drawSprites();
  stroke("blue");
   textSize(20);
   text("score"+score,400,50);
   }
  
// back.depth =jomb.depth;
// jomb.depth = jomb.depth +2;
    
// back.depth =ground.depth;
// ground.depth = ground.depth +3;     
    
// back.depth =boy.depth;
// boy.depth = boy.depth +1;  
  
// back.depth =obstacle.depth;
// obstacle.depth = obstacle.depth +1;


function spawnObstacles() {
  if(frameCount % 100 === 0) {
     obstacle = createSprite(500,350);
     
    obstacle.debug = true;
    obstacle.velocityX = -8;
    obstacle.scale = .25;
    obstacle.lifetime = 100;
    obstacle.setCollider("rectangle",0,0,300,500);
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle1);
              break;
       case 3: obstacle.addImage(obstacle1);
               break;
      
      default: break;

    }
    
    obstaclesGroup.add(obstacle);
  }





    //assign scale and lifetime to the obstacle 
            
    
    //add each obstacle to the group
    
  }
  function spawnStars(){

    if(frameCount % 100 === 0) {
      stars = createSprite(500,100);
      stars.addImage(obj);
     stars.debug = true;
     stars.velocityX = -7;
     stars.scale = .10;
     stars.lifetime = 100;
     stars.y=Math.round(random(100,200));

     stars.setCollider("rectangle",0,0,70,70);
     starsGroup.add(stars);
   }
   }


















  



  
  






// function reset(){
//   gameState = PLAY;
//   gameOver.visible = false;
//   restart.visible = false;
  
//   obstaclesGroup.destroyEach();
  
  //}
  }
