import validator from './validator.js';
//cree el evento para guardar el input en una variable.

const botonValidar= document.getElementById("boton")
botonValidar.addEventListener("click",comportamientoBoton);
//ingresar un string y volverlo un array
function comportamientoBoton(event){
  event.preventDefault();
  const creditCardNumber=document.getElementById("numtarjeta").value;
  const resultado = validator.maskify(creditCardNumber); //llamo al método de mi validator
  console.log(resultado);
  const valid = validator.isValid(creditCardNumber); 
  console.log(valid)

}


console.log(validator);
