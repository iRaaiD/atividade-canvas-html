var canvas;
var ctx;
var dx = 5;
var dy = 5;
var x = 250;
var y = 250;
var WIDTH = 500;
var HEIGHT = 500;

function circulo() {
    ctx.beginPath();
    ctx.fillStyle = "Black";
    ctx.arc(x, y, 12, 0, Math.PI*2, true);
    ctx.fill();
}

function LimparTela() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function Iniciar() {
    canvas = document.getElementById("canvasCirculo");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 10);
}

function KeyDown(evt){
    switch (evt.keyCode) {
        case 37:  
            if (x - dx > 0){
                x -= dx;
            }
            break;
        case 38:  
            if (y - dy > 0){
                y -= dy;
            }
            break;
        case 39: 
            if (x + dx < WIDTH){
                x += dx;
            }
            break;    
        case 40:  
            if (y + dy < HEIGHT){
                y += dy;
            }
            break;
    }
}

function Atualizar() {
    LimparTela();    
    circulo();
}
window.addEventListener('keydown', KeyDown, true);
Iniciar();
