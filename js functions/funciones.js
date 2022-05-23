//Iteración #1: Buscar el máximo//

const hello = 'hello';
console.log(hello);

function maxNumber(num1 , num2) {
  let max = 0;  
  if(num1 >= num2){
      max = num1;
  }else{
      max = num2;
    };
    return max;
  };
  
  console.log(maxNumber(8,2));
  console.log(maxNumber(9,15));
  console.log(maxNumber(10,1));
  
 
//Iteración #2: Buscar la palabra más larga/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain. A', 'Spiderman', 'Captain M.'];

function findLongestWord(avenger) {
  let name = "";
  for (let i = 0; i < avenger.length; i++) {
    
    if(name.length < avenger[i].length){
      name = avenger[i];
    };
  };
  return name;
};
console.log(findLongestWord(avengers));

//Iteración #3: Calcular la suma//

const numbers1 = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
    let sumaDeTodo = 0;
    for (let i = 0; i < numbers.length; i++) {
    sumaDeTodo += numbers[i];
      
    };
    return sumaDeTodo;
};
console.log(sumAll(numbers1));

//sumaDeTodo += numbers[i] es lo mismo que sumaDeTodo = sumaDeTodo + numbers[i]

//Iteración #4: Calcular el promedio//

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(numbers) {
  let suma = sumAll(numbers);
  let promedio = suma / numbers.length;
  return promedio;
};

console.log(average(numbers2));

//Iteración #5: Calcular promedio de strings//

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(mixed) {
  let suma = 0;
for (let i = 0; i < mixed.length; i++) {
  if(typeof mixed[i] === 'string') {
    suma += mixed[i].length;
  }else{
    suma += mixed[i];
  };
};
return suma;
};

console.log(averageWord(mixedElements));

//Iteración #6: Valores únicos//
/*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:*/

const duplicates = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings','pasta','soda'];

let dupli = [];
function removeDuplicates(array) {
 for (let i = 0; i < array.length; i++) {
      if(!dupli.includes(array[i])){
       dupli.push(array[i]);  
  };  
  };
  return dupli;
};
console.log(removeDuplicates(duplicates));


//Iteración #7: Buscador de nombres//
/*Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:*/

const nameFinder = ['Peter','Steve','Tony','Natasha','Clint','Logan','Xabier','Bruce','Peggy','Jessica','Marc'];
  
function finderName(search, palabra) {
    let elemento = false;
    for (let i = 0; i < search.length; i++) {
       if(palabra === search[i]){
         elemento = true;
       };
      };
      return elemento;
  };
console.log(finderName(nameFinder, 'Peter'));
console.log(finderName(nameFinder, 'Clint'));
console.log(finderName(nameFinder, 'Pepe'));
console.log(finderName(nameFinder, 'Antonio'));


  //Iteration #8: Contador de repeticiones//
  //Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.


  const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code'];
  
  function repeatCounter(numero, palabra) {
    let contador = 0;
    for (let i = 0; i < numero.length; i++){
      if(palabra === numero[i]){
        contador++;
      };
    };
    return contador;
  };
 console.log(repeatCounter(counterWords, 'code'));
 console.log(repeatCounter(counterWords, 'repeat'));
 console.log(repeatCounter(counterWords, 'eat'));
 console.log(repeatCounter(counterWords, 'sleep'));
 console.log(repeatCounter(counterWords, 'enjoy'));
 console.log(repeatCounter(counterWords, 'upgrade'));

 /*ejercicio funciones clase 4/5/22*/

 function myFirstFunction() {
   console.log('Git Gud b*tch');
 };

 myFirstFunction();

 function mySecondFunction(text) {
   console.log('If u arent learning', text);
 };
 mySecondFunction('Git Gut b*tch');


 function myFunctionInsideFunction() {
  console.log('Not learning yet?');

  function myFuctioninside(){ //puede ser anónima con function()
  console.log('U know what?, guess it');

  return 'Git Gud';
};
  return myFuctioninside;
};

let inside = myFunctionInsideFunction();
let insideSecondFuction = inside();
console.log('Try again peasant: ' , insideSecondFuction);

/*hacer dos bucles for i y j de indices
for(){
  for()
}
if (array[i] === array[j] && i != j)
array.splice(j, 1);
j--;
}*/ 
