var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
    sound2=loadSound("bubblegurggle.mp3");
    sound3=loadSound("Cymbal_Groove.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(10,590,200,20)
    surface2=createSprite(220,590,200,20)
    surface3=createSprite(430,590,200,20)
    surface4=createSprite(640,590,200,20)

    surface1.shapeColor="orange"
    surface2.shapeColor="blue"
    surface3.shapeColor="magenta"
    surface4.shapeColor="green"

    box=createSprite(400, 0,40,40)
    box.x=Math.round(random(20,750))
    box.shapeColor="white"
    box.velocityX=4
    box.velocityY=5

    edges=createEdgeSprites()



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    
    if(box.isTouching(surface1)){
        box.shapeColor=surface1.shapeColor
        sound2.stop()
        sound3.stop()
        box.velocityX=0
        box.velocityY=0
    }
    if(box.isTouching(surface2)){
        box.shapeColor=surface2.shapeColor
        sound2.play()
    }
    if(box.isTouching(surface3)){
        box.shapeColor=surface3.shapeColor
    }
    if(box.isTouching(surface4)){
        box.shapeColor=surface4.shapeColor
        sound3.play()
    }
    box.bounceOff(surface1)
    box.bounceOff(surface2)
    box.bounceOff(surface3)
    box.bounceOff(surface4)
    box.bounceOff(edges)
    drawSprites();
    //add condition to check if box touching surface and make it box
}
