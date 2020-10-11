var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 
var sec,min,hrs, start, stop, reset, simg, stimg, rimg
var gameState = 0


function preload(){
rimg = loadImage("reset.png")
simg = loadImage("start.png")
stimg = loadImage("stop.png")
}

function setup(){
    createCanvas(displayWidth,displayHeight); 
    //To use angle in Degrees
    angleMode(DEGREES); 
    sec=0
    min=0
    hrs=0  
    gameState = 0
    
}

function draw(){
    background(0);

    hr = hour();
    mn = minute();
    sc = second();

    if(gameState === 0){
        start = createSprite(displayWidth/4,displayHeight/1.33,100,100)
        //start.addImage(simg)
        start.scale = 0.1
        stop = createSprite(displayWidth/1.33,displayHeight/1.33,100,100)
       // stop.addImage(stimg)
        stop.scale = 0.1
        reset = createSprite(displayWidth/1.86,displayHeight/4,100,100)
        //reset.addImage(rimg)
        reset.scale = 0.2
        sec = sec
    }

    if(gameState === 1){
        sec = 1304/1304+1+sec
        
    }

    

    if(mousePressedOver(start)){
        gameState = 1
    }

    if(mousePressedOver(stop)){
        gameState = 0
    }

    if(mousePressedOver(reset)){
        min = 0
        sec = 0
        hrs = 0
    }

    
    //Calculating time using predefined func from p5.js
   

    if(sec === 60){
min = min+1
sec = 0
    }

    if(min === 60){
        hrs = hrs+1
        min = 0
            }
fill(255)
    //text("time   "+hr+":"+mn+":"+sc,200,200)
    text(+hrs+":"+min+":"+sec,displayWidth/2,displayHeight/2)
    text("start",displayWidth/4,displayHeight/1.33)
    text("stop",displayWidth/1.33,displayHeight/1.33)
    text("reset",displayWidth/1.86,displayHeight/4)
    drawSprites()
}
