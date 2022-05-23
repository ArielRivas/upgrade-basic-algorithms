/*Iteración #1: Mix for e includes**

Dado el siguiente javascript usa forof para recorrer el array de películas, 
genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. 
Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()*/

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categories = [];

for (const movie of movies) {
  movie.categories.forEach((item) => {
    if (!categories.includes(item)) {
      categories.push(item);
    }
  });
}

console.log(categories);

/***Iteración #2: Mix Fors**

Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let sum = 0;
let count = 0;

for (const music of users) {
  for (const volum in music.favoritesSounds) {
   sum += music.favoritesSounds[volum].volume;
   count++;
  }
};

let avg = sum / count;

console.log("La media del volumen es:", avg);

/***Iteración #3: Mix Fors**

Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y 
usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript*/

const users2 = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const soundFavCount = {};

for (const sounds of users2) {
  for (const fav in sounds.favoritesSounds) {
    
   if(soundFavCount[fav]){
    soundFavCount[fav]++;
   }else{
    soundFavCount[fav] = 1;
   }
  }
};

console.log("El contador de es:",  soundFavCount);


/*Iteración #4: Métodos findArrayi**

Crea una función llamada `findArrayi` 
que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array 
sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.*/

let arrayOfText = ["Hello", "Bye", "Good morning", "Cya"];

function findArrayi(array, text) {
  if (array.includes(text)){
  return array.indexOf(text);
  };
};

console.log(findArrayi(arrayOfText, "Bye"));
console.log(findArrayi(arrayOfText, "Cya"));

/*Iteración #5: Función rollDice**

Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que 
queramos que tenga el dado que deberá silumar el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. 
Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();*/

function rollDice(dice) {
  return Math.floor(Math.random(dice) * 6) + 1;
};

const tiradas = [1, 1, 1, 1];
tiradas.forEach(function () {
  console.log(rollDice(1));
});


/*Iteración #6: Función swap**

/*Crea una función llamada `swap()` que reciba un array y 
dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.*/

let arrayRandom = ["Hello", "Bye", "Good morning", "Cya", "Farewell"];


function swap(array, i, j) {
 let saveIndex = array[i];
 array[i] = array[j];
 array[j] = saveIndex;
 return arrayRandom;
};


console.log(swap(arrayRandom, 0, 3));
console.log(swap(arrayRandom, 1, 4));