
var rodrigo,rodrigo_run;
var bordas;

function preload(){
  //pré carrega as imagens do jogo
  rodrigo_run = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200);

  rodrigo = createSprite(50,100,20,20);
  rodrigo.addAnimation("running",rodrigo_run);
  rodrigo.scale = 0.5;

  bordas = createEdgeSprites();
}

function draw(){
  background('white');

  if(keyDown("space")){
    rodrigo.velocityY = -10;
  }

  //gravidade
  rodrigo.velocityY = rodrigo.velocityY + 0.9;

  rodrigo.collide(bordas);

  drawSprites();
}


