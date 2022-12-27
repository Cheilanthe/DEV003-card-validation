const validator = {
  //Función de enmascarar
  maskify: function(userCard){
    const card = Array.from(userCard);
    //condición para que la tarjeta mayor a 4 digitos se enmascare
    if (card.length>4){  
      for (let i=0; i<card.length-4; i++){
        card[i]="#";
      }
      return card.join(``);//tranforma el array a string
    }else{
      return card.join(``);
    } 
  },
  isValid: function(userCard){
    const card = Array.from(userCard);    
    const numbers = (card.reverse()); // voltear el array
    // console.log(numbers);
    // del array debo encontrar las posiciones pares
    // otra forma de encontrar las posiciones pares y multiplicar cada elemento x2
    const inverseImPar = [];
    for(let i=0; i<numbers.length; i++){
      if(i%2!==0){
        let impares = (numbers[i]*2); 
        if(impares>9){// si la multiplicación de cada elemento de "inversePar" da como resultado un valor > 9 
          impares = (impares-9);
          inverseImPar.push(impares)//debo sustituirlo por la resta de index-9
        }else{
          inverseImPar.push(impares) //guarde cada uno de los elementos en un nuevo array
        }         
      }
    }
    //console.log(inversePar);          
    // las posiciones impares se quedan igual
    const inversePar = [];
    for (let i=0;i<numbers.length;i++){
      if(i%2===0){
        const pares = (numbers [i]*1);
        inversePar.push(pares)
      }
    }
    //console.log(inverseImpar);
    // En una variable nueva debo juntar los dos array que genere
    const arrFinal = inversePar.concat(inverseImPar);
    //console.log(arrFinal)
    //sumar todos los valores que se obtengan en este nuevo array 
    let sumaFinal = 0;
    for (const n of arrFinal){
      sumaFinal +=n;
    }
    //console.log(sumaFinal);
    //la suma le aplico el modulo 10 y me tiene que dar 0 para que retorne true
    if (card.length >= 11 && card.length <= 16 && sumaFinal%10===0){
      return true
    }else{
      return false
    }
  },
};
export default validator;
