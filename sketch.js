//Global Variables
var sceneImage,scene;
var monkey,monkey_running;
var ground,groundImage;

var bananaGroup,bananaImage;
var obstacleGroup,obstacleImage;

var gameOver=0;
var score=0;




function preload(){
  sceneImage=loadImage("jungle.jpg");
  monkey_running= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png" ,"Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("Banana.png");
  obstacleImage=loadImage("stone.png");
  
}


function setup() {
  createCanvas(600,300);
  
  scene=createSprite(200,180,400,20);
  scene.addImage(sceneImage);
  scene.scale=1.5;
   scene.x = scene.width /2;
  scene.velocityX = -4;
  
  
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.5;
  
   ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
  
}


function draw(){
 background(255); 
  
   if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(scene.x<100){
    scene.x=scene.width/2;
  }
  
    if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);
  
    spawnFood();
    spawnObstacles();
 
    if(obstaclesGroup.isTouching(monkey)){ 
        monkey.scale=0.08;
    } 
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : "+ score,500,50);
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var rock = createSprite(400,320,10,40);
    rock.velocityX = - (6 + 3*count/100);
    rock.addImage(stone.png);
    
      
    rock.scale = 0.15;
    rock.lifetime = 70;
     
    obstacleGroup.add(rock);
  }
}

function spawnFood(){
  if(frameCount % 80 === 0) {
    var banana = createSprite(400,365,10,40);
    banana.velocityX = - (6 + 3*count/100);
    banana.y=randomNumber(120,200);
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-3;
    banana.lifetime=134;
    monkey.depth = banana.depth + 1;
    
    bananaGroup.add(banana);
  }
    
  
}

