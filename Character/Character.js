var canvas;
var moveBy = 10;
var framesPerSecond = 60;
var playerImage = loadImage("./Player.png");
var playerX = 0;
var playerY = 0;
var leftPressed = false;
var rightPressed =  false;
var downPressed = false;
var upPressed = false;

window.addEventListener('load', () =>{
    canvas = document.getElementById("my-canvas");
    setInterval(gameLoop, 1000/framesPerSecond);
});

window.addEventListener('keydown', (event) =>{
    switch(event.key){
        case 'ArrowLeft':
            leftPressed = true;
            break;
        case 'ArrowRight':
            rightPressed = true;
            break;
        case 'ArrowUp':
            upPressed = true;
            break;
        case 'ArrowDown':
            downPressed = true;
            break;
    }
});

window.addEventListener('keyup', (event) =>{
    switch(event.key){
        case 'ArrowLeft':
            leftPressed = false;
            break;
        case 'ArrowRight':
            rightPressed = false;
            break;
        case 'ArrowUp':
            upPressed = false;
            break;
        case 'ArrowDown':
            downPressed = false;
            break;
    }
});

function loadImage (name){
    var img = new Image();
    img.src = name;
    return img;
}

function gameLoop()
{
    if (leftPressed == true){
        playerX -= moveBy;
    }
    if (rightPressed == true){
        playerX += moveBy;
    }
    if (upPressed == true){
        playerY -= moveBy;
    }
    if (downPressed == true){
        playerY += moveBy;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(playerImage, playerX, playerY, 200, 60);
    
}