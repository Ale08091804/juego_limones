let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const Altura_PERSONAJE=60;
const ANCHO_PERSONAJE=40;

let personajeX=canvas.width/2;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}
function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+Altura_PERSONAJE),ANCHO_PERSONAJE,Altura_PERSONAJE);
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
}

function moverDerecha(){
    personajeX=personajeX +10;
    actualizarPantalla();
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}