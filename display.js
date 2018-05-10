// NOTE: depends on game.js

var game = null;

function setup(){
    var width = 400;
    var height = 400;
    game = createGameState();
    frameRate(2); //calls 'draw' 2x per second
    createCanvas(width, height); 
}

function draw(){
    fill("red");
    background(0);
    drawPoint(0,0);
    drawPoint(10,0);
    drawPoint(0,10);
    drawPoint(10,10);
}

var pointSize = 10;
var pointSpacing = 20;
var colors = [
    "#3f51b5",
    "#03a9f5",
    "#ea1e63",
    "#fec107"
];

//converts logical grid into physical display
function drawPoint(x,y,colorIndex){
    ellipse(x * pointSpacing, y * pointSpacing,  pointSize)
    console.log(`drawPoint: ${keyCode}`);
}

function keyPressed() {
    console.log(`keyPressed: ${keyCode}`);
}