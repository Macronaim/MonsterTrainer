/* Defining Canvas */
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
document.body.appendChild(canvas);

/* Gameplay Background */
let backgroundReady = false;
let background = new Image();
background.src = "assets/img/monsterTrainerbg.jpg";
background.onload = function () {
    backgroundReady = true;
};

/* Loading Images */
function loadImage(){
    if(backgroundReady){
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    }
}

/* Game Loop */
function gameLoop() {
    loadImage();
    requestAnimationFrame(gameLoop);
}
gameLoop();