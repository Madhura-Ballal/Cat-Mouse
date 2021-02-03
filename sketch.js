var tom,tomImg;
var jerry,jerryImg;
var ground,groundImg;





function preload() {
    //load the images here
 tomImg= loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png")
 jerryImg= loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png")
 groundImg=loadImage(garden.png)
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  tom= createSprite(200,150,20,20)
  
}

function draw() {

    background(groundImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
