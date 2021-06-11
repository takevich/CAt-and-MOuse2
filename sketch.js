var tom, jerry

function preload() {
    
    gardenImg = loadImg ("garden.png");
    cat1 = loadImg ("cat1.png");
    mouse1 = loadImg ("mouse1.png")
    cat2 = loadImg ("cat2.png");
    mouse2 = loadImg ("mouse2.png");
    cat3 = loadImg ("cat4.png");
    mouse3 = loadImg ("mouse3.png");
}


function setup(){
    createCanvas(1000,800);
    
tom = createSprite (600,600,40,40);
tom.addImage(cat1);

jerry = createSprite (300,600,20,20);
jerry.addImage(mouse2);
}

function draw() {

    background(255);
    background.addImage(gardenImg);
    
    if (keyPressed(left_arrow)){
    
jerry.addImage(mouse3);
tom.addImage(cat2);
tom.velocityX = -3;

}

    if (tom.isTouching(jerry)){

tom.velocityX = 0;
tom.addImage(cat3);
jerry.addImage(mouse1);

}

if (tom.x - jerry.x < (tom.width - jerry.width)/2){

tom.velocityX = 0;
tom.addImage(cat3);
jerry.addImage(mouse1);

}

drawSprites();
}