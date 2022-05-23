
//Ejercicio 1
const myFavoriteHero = 'Hulk';
const x = 50;
const h = 5;
const y = 10;
const z = h + y;

console.log(z);


//Ejercicio 2.1

let character = {
   name: 'Jack Sparrow', 
   age: 10};

character = {
   name: 'Jack Sparrow', 
   age: 25};

console.log(character);


//Ejercicio 2.2

  const firstName = 'Jon'; 
  const lastName = 'Snow'; 
  const age = 24; 

  console.log('Soy' , firstName  , lastName , 'tengo',  age ,  'años y me gustan los lobos.');

  
//Ejercicio 2.3

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log('La suma de precios de los dos juguetes es:', toy1.price + toy2.price);

//Ejercicio 2.4

   let globalBasePrice = 10000;
   let car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
   let car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

   globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log('El precio del coche 1 es:', car1.finalPrice);
console.log('El precio del coche 2 es:', car2.finalPrice);

   

/* Ejercicio objetos clase 25/04

const coche = {
   color: 'rojo',
   motor: 'gasolina',
   airbag: 'Si',
   puertas: 'seis',
   marca: 'JEEP',
};

console.log(coche.puertas);

const propiedadQueQuieroVer = prompt('¿Qué propiedad quieres ver?');
console.log(coche[propiedadQueQuieroVer]);

*/