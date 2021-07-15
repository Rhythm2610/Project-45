var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16;







function setup (){
createCanvas(600,400);
}

function draw(){
  background("brown");

//Creating all the walls 
wall1 = createSprite(110,20,15,120);
wall2 = createSprite(37,120,75,15);
wall3 = createSprite(47,180,105,15);
wall4 = createSprite(170,300,15,300);
wall5 = createSprite(117,250,105,15);
wall5 = createSprite(107,330,135,15);
wall6 = createSprite(217,50,105,15);
wall7 = createSprite(320,60,15,125);
wall8 = createSprite(260,115,115,15);
wall9 = createSprite(247,240,155,15);
wall10 = createSprite(387,300,15,300);
wall11 = createSprite(330,300,125,15);
wall12 = createSprite(275,385,15,95);
wall13 = createSprite(440,60,15,135);
wall14 = createSprite(545,170,115,15);
wall15 = createSprite(445,240,125,15);
wall7 = createSprite(540,320,125,15);

  drawSprites();
}