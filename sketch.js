var PLAY = 1;
var END=0;
var gameState = PLAY;
var mar, player, woody, lotsoImg, lotso, lotsofunc;
var rexImg, rex, rexfunc, hammImg, hamm, hammfunc;
var score=0;
var lostoG, rexG, hammG, restartImg, reset;
var aliensG, aliensImg, aliens, aleinsfunc;


function preload(){
    room=loadImage("andy.jpeg");
    player = loadAnimation("woody1.png","woody2.png")
    lotsoImg = loadImage("lotso.png");
    rexImg = loadImage("rex.png");
    hammImg = loadImage("hamm.png");
    aliensImg = loadImage("aliens.png");
    restartImg = loadImage("restart.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //andy = createSprite(width/2,height/2);
    //andy.addImage("andy",room);

    woody=createSprite(width/2,height+20,20,20);
    woody.addAnimation("woody",player);
    woody.scale=0.3;

    lostoG=new Group ();
    rexG=new Group ();
    hammG=new Group ();
    aliensG=new Group();

    restart=createSprite(width/2,height/2);
    restart.addImage("restart",restartImg);

}

function draw() {
    background(room);
    text("PUNTUACIÓN: "+ score, 500,50);
    textSize(17);

if(gameState === PLAY){
    background(0);
    restart.visible=false;
    woody.visible=true;

    score=0;
    room.velocityY = 2;

    woody.x=World.mouseX;

    edges = createEdgeSprites();
    woody.collide(edges);
    score = score + Math.round(frameCount/60);
    
    if (room.y < 100){
      room.y = room.height/2;
    }
    if (room.y >500){
        room.y = 400;
        }

    lotsofunc();
    rexfunc();
    hammfunc();
    aleinsfunc();

    if (rexG.isTouching(woody)) {
        rexG.destroyEach();
        score=score + 50;
      }
      else if (hammG.isTouching(woody)) {
        hammG.destroyEach();
        score=score + 100;
        
      }
      else if(aliensG.isTouching(woody)) {
        aliensG.destroyEach();
        score= score + 150;  
      }
      else if (lostoG.isTouching(woody)){
        gameState=END;
      }
    }   

else if(gameState==END) {
        
    woody.visible=false;
    restart.visible=true;

    room.velocityY=0;
        
    rexG.destroyEach();
    hammG.destroyEach();
    lostoG.destroyEach();
    aliensG.destroyEach();
        
    rexG.setVelocityYEach(0);
    hammG.setVelocityYEach(0);
    aliensG.setVelocityYEach(0);
    lostoG.setVelocityYEach(0);
    }
  if (mousePressedOver(restart)){
      gameState=PLAY;
      }

  
  drawSprites();
    }
function rexfunc() {
    if (World.frameCount % 200 == 0) {
        var rex = createSprite(Math.round(random(50, 350),40, 10, 10));
        rex.addImage(rexImg);
        rex.scale=0.4;
        rex.velocityY = 9;
        rex.lifetime = 200;
        rexG.add(rex);
        }
      }
      
function hammfunc() {
    if (World.frameCount % 320 == 0) {
        var hamm = createSprite(Math.round(random(50, width),40, 10, 10));
        hamm.addImage(hammImg);
        hamm.scale=0.4;
        hamm.velocityY = 8;
        hamm.lifetime = 200;
        hammG.add(hamm);
        }
    }

function aleinsfunc() {
    if (World.frameCount % 410 == 0) {
        var aliens = createSprite(Math.round(random(50, width),40, 10, 10));
        aliens.addImage(aliensImg);
        aliens.scale=0.2;
        aliens.velocityY = 9;
        aliens.lifetime = 200;
        aliensG.add(aliens);
        }
      }
function lotsofunc(){
    if (World.frameCount % 530 == 0) {
        var lotso = createSprite(Math.round(random(50, width),40, 10, 10));
        lotso.addImage(lotsoImg);
        lotso.scale=0.2;
        lotso.velocityY = 7;
        lotso.lifetime = 200;
        lostoG.add(lotso);
        }
      }

