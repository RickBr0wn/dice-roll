// Global Variables

// Set canvas size
let canvasHeight = 107;
let canvasWidth = 107;

// The position on the spritesheet of each sprite.
// spriteY remains constant
// Face 1 = 0, Face 2 = -107, Face 3 = -214 etc
let spriteX = 0; 
const spriteY = 0;

// The width of each frame on the spritesheet
let spriteWidth = -107;

// Create the dice instance
let dice = new Image();
dice.src = 'DiceSprite.png';

// Create the canvas
let canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
let context = canvas.getContext('2d');

function updateFrame(num){
    // The logic for moving backwards along the spritesheet
    spriteX = (num * spriteWidth) - spriteWidth;
}

function randomNumber(num){
    let random = Math.floor(Math.random()*((num + 1) - 1) + 1);
    // console.log for testing purposes
    console.log(random);
    return random;
}

function buttonClick(){
    let output = randomNumber(6);
    updateFrame(output);
    // Draw on the canvas
    context.drawImage(dice, spriteX, spriteY);
}