
var trex,trex_img;
var bordas;
var ground,groundImg;

function preload(){
  //pré carrega as imagens do jogo
  trex_img = loadAnimation("trex3.png","trex4.png");
  groundImg - loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200);

  trex = createSprite(50,100,20,20);
  trex.addAnimation("running",trex_img);
  trex.scale = 0.5;

  ground = createSprite(300,190,600,20);
  ground.addImage(groundImg);
  ground.x = ground.width/2;
  ground.velocityX = -5;

  bordas = createEdgeSprites();
}

function draw(){
  background('white');

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  if(ground.x < 0){
    ground.x = ground.width/2
  }

  //gravidade
  trex.velocityY = trex.velocityY + 0.9;

  trex.collide(ground);

  drawSprites();
}


