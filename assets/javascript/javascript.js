let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'black';
context.fillRect(10, 10, 100, 100);

let btn = document.getElementById('roll-button');

function randomNumber(num){
    let random = Math.floor(Math.random()*((num + 1) - 1) + 1);
    return random;
}

function buttonClick(){
    let output = document.getElementById('roll-number');
    output.innerHTML = randomNumber(6);
}