// No cambies los nombres de las funciones.

const { map } = require("@11ty/eleventy/src/TemplateGlob");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var res = Object.keys(objeto).map((key) => [ key , objeto[key]]);
  return(res);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var x = string.split("");
  var y = {};
  for(let i = 0; i< x.length ; i++){
    if(y[x[i]]=== undefined){
      y[x[i]] = 1;
      for(let j= i+1; j<x.length ; j++){
        if (x[i] === x[j]){
          y[x[i]] += 1;
        };
      };
    }; 
  };
  return y;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var y = s.split("");
  s1 = ""; s2 = "";
  y.forEach(a => {
    if(a === a.toUpperCase()){
      s1 = s1 + a;
    }else{s2 = s2 + a;}
  });
  return (s1 + s2);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var x = str.split(" ");
  var z = "";
  x.forEach(a => {
    let y = a.split("");
    for(let i = 0; i< y.length ; i++){
      z = z+ y[y.length-i-1];
    };
    z=z+(" ");
  });
  z = z.substring(0,z.length-1);
  return z
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var y = numero.toString().split("");
  var z = Math.floor(y.length/2);
  var cond1 = true;
  for (let i = 0 ; i< z ; i++){
    if(y[i] != y[y.length - 1 - i]){
      cond1 = false;
    }
  }
  if(cond1){
    return("Es capicua")
  }else{return("No es capicua")}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var x = cadena.split("");
  var y = "";
  x.forEach(a => {
    if(a != "a" && a != "b" && a != "c"){
      y = y + a;
    }
  });
  return y;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var x = arr.sort((a,b) =>{
    if (a.length < b.length){return -1}
    else if(a.length > b.length){return 1}
    else{return 0}
  })
  return x;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var x = []; 
  arreglo1.forEach((a)=>{
    arreglo2.forEach((b) =>{
      if(a===b){
        x.push(a);
      }
    })
  })
  return x;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

