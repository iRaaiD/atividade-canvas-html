var ctx;
var dx = 5;
var dy = 5;
var x = 190;
var y = 170;
var WIDTH = 500;
var HEIGHT = 500;
nave = new Image();

function imagem(){
    nave.src = "nave.png";
    nave.onload=()=>{
        ctx.drawImage(nave, x, y,120,120);
    }
  }

function LimparTela() {
    ctx.fillStyle = "white";
    ctx.rect(0, 0, WIDTH, HEIGHT)
    ctx.fill();
}

function Iniciar() {
    canvas = document.getElementById("imagem");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 0);
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
    imagem();
}
window.addEventListener('keydown', KeyDown, true);
Iniciar();
