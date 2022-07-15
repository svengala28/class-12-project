var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var invisibleGround
var cloud, cloudimage
function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    cloudimage = loadImage("cloud.png")
}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    invisibleGround = createSprite(200,193,400,20)
    invisibleGround.visible = false
}

function draw() {
    background(255);
    //jump when the space button is pressed
    if (keyDown("space")&&trex.y>150) {
        trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);
    spawncloud()
    
    drawSprites();
}

function spawncloud(){
    if(frameCount%60==0){
    cloud = createSprite(630, random(30, 100))
    cloud.addImage(cloudimage)
    cloud.velocityX = random(-1, -3)
    cloud.scale = 0.1
    if(cloud.velocityX<-2){
        cloud.scale = 0.2
    }
}
}
