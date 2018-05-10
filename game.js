// functions

function createGameState(){
    var game = {};
    game.playerX = 5;
    game.playerY = 10;


    var grid = [];
    grid.push([1,1,1,1,1])
    grid.push([1,0,0,0,1])
    grid.push([1,0,0,0,1])
    grid.push([1,0,0,0,1])
    grid.push([1,0,0,0,1])
    grid.push([1,0,0,0,1])
    grid.push([1,1,1,1,1])

    game.grid = grid;

    return game;
}

//To get certain coordinate, have to specify which row/array and then which element in that row (instead of x,y)
//Remember to count from 0!

function createEmptyGrid(){}
function createLevel(){}
function setRandomCoin(){}
function drawGameState(){}
function updateGameState(){}
function addNextCoin(){}
function handleKeyboard(){}
function checkPlayerPosition(){}