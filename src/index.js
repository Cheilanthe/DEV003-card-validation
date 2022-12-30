import validator from './validator.js';
//cree el evento para guardar el input en una variable.

const botonValidar= document.getElementById("boton");
botonValidar.addEventListener("click",comportamientoBoton);
//ingresar un string y volverlo un array
function comportamientoBoton(event){
  event.preventDefault();
  const creditCardNumber=document.getElementById("numtarjeta").value;
  const resultado = validator.maskify(creditCardNumber); //llamo al método de mi validator
  const valid = validator.isValid(creditCardNumber); 
  if (valid === true){
    document.getElementById("error").innerHTML= ("Su tarjeta con terminación "+ resultado + " es válida");
    document.getElementById("error").style.color = "green"
  }else{ 
    document.getElementById("error").innerHTML=("Su tarjeta con terminación "+ resultado + " es inválida");
    document.getElementById("error").style.color = "red"
  }
}
/*
// imprimir los valores de maskify
const entradaTarjeta = document.getElementById("numtarjeta");
entradaTarjeta.addEventListener("keyup",mask);
function mask (){
  const creditCardNumber=document.getElementById("numtarjeta").value;
  const resul = validator.maskify(creditCardNumber); 
  document.getElementById("numtarjeta").value = resul;
}
*/
/*
const digitosTarjeta= document.getElementById("numtarjeta");
digitosTarjeta.addEventListener("keydown",presionarTecla())

function presionarTecla(){
  const tecla = Event.keyCode;
  if (tecla>=48 && tecla<=57 ){
    return true;
  }else{
    alert("solo puede ingresar números")
  }

}*/


console.log(validator);
