String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); }

const AHORCADO = document.getElementById('ahorcado')
const PALABRAS = ['loro', 'raton', 'cerdo', 'perro', 'gato', "elefante", "rana", 'toro', 'vaca', 'gallo', 'delfin', 'ballena'];
const PALABRA = PALABRAS[Math.floor(Math.random()*PALABRAS.length)];
const GUIONES = document.getElementById('guiones')
const BUSCAR = document.getElementById('buscar')
const GANADOR = document.getElementById('ganador')

let palabraConGuiones = PALABRA.replace(/./g, '_ ');
let contadorFallos = 0;

GUIONES.innerHTML = palabraConGuiones;
document.getElementById("letra").focus();
BUSCAR.addEventListener('click', () => {
    const LETRA = document.getElementById('letra').value;
    let fallo = true;
    for (i in PALABRA){
        if (LETRA === PALABRA[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, LETRA);
            fallo = false;
        }
    }
    if (fallo){
        contadorFallos++;
        AHORCADO.style.backgroundPosition = -(200*contadorFallos) + 'px 0';
        if(contadorFallos === 4){
            alert("Perdiste el juego")

        }
    }else{
        if(palabraConGuiones.indexOf("_") < 0){
            GANADOR.style.display = "flex";
        }
    }
    GUIONES.innerHTML = palabraConGuiones;
    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();
    
})