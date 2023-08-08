
var trex,trex_img;
var bordas;
var chao;

function preload(){
  //pré carrega as imagens do jogo
  trex_img = loadAnimation("trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200);

  trex = createSprite(50,100,20,20);
  trex.addAnimation("running",trex_img);
  trex.scale = 0.5;

  bordas = createEdgeSprites();
}

function draw(){
  background('white');

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  //gravidade
  trex.velocityY = trex.velocityY + 0.9;

  trex.collide(bordas);

  drawSprites();
}


