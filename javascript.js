String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); }
const palabrasAzar = ['carro', 'jirafa', 'moto', 'hotel','apartamento'];
const palabra = palabrasAzar[Math.floor(Math.random()*palabrasAzar.length)];
let palabraGiones=palabra.replace(/./g, "_ ");
let contadorfallos=0;
document.querySelector('#output').innerHTML = palabraGiones;
document.querySelector('#evaluar').addEventListener('click',()=>
{
    const letra =document.querySelector('#letra').value;
    let fallo = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraGiones = palabraGiones.replaceAt(i*2,letra);
            fallo=false;
        }
    }
    if(fallo){
        contadorfallos++;
        document.querySelector('#ahorcado').style.backgroundPosition=-(307*contadorfallos) + 'px 0';
        if(contadorfallos==3){
            alert('Perdiste el juego')
        }
    }else{
        if(palabraGiones.indexOf('_')<0){
            document.querySelector('.ganador').style.display = 'flex';
        }
    }

    document.querySelector('#output').innerHTML = palabraGiones;
    document.querySelector('#letra').value='';
    document.querySelector('#letra').focus();
});