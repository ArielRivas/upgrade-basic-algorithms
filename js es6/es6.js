//**Iteración #1: Arrows**
/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.*/

//1.1 Ejecuta esta función sin pasar ningún parametro

const myFirstArrowFunction = (a = 10, b = 5) => a + b;
  
console.log(myFirstArrowFunction());

//1.2 Ejecuta esta función pasando un solo parametro

console.log(myFirstArrowFunction(50));

//1.3 Ejecuta esta función pasando dos parametros

console.log(myFirstArrowFunction(50, 40));

//Iteración #2: Destructuring

/*2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.*/

const game = {
	title: 'The last us 2', 
	genre: ['action', 'zombie', 'survival'], 
	year: 2020
};

const {title, genre, year} = game;
console.log(title, genre, year);

/*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/

let fruits = ['Banana', 'Strawberry', 'Orange'];
let [fruit1, fruit2, fruit3] = fruits; 
console.log(fruit1, fruit2, fruit3);


/*2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const animalFunct = ["Bengal", "Tiger"];
console.log(animalFunction("name", "race"));

/*2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.*/

const car = {
	name: 'Mazda 6', 
	itv: [2015, 2011, 2020] 
};

let newCar = { ...car};
console.log(newCar);
console.log(newCar.itv[0], newCar.itv[1], newCar.itv[2]);

/*//Iteración #3: Spread Operator
/*3.1 Dado el siguiente array, crea una copia usando spread operators.*/

const pointsList = [32, 54, 21, 64, 75, 43];

let myPoints = [...pointsList];
console.log(myPoints);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {
	name: 'Bus laiyiar',
	date: '20-30-1995', 
	color: 'multicolor'
};

const { name, ...restOfDetails } = toy;
console.log(name, restOfDetails);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
//spread operatos.


const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54,87,99,65,32];

let pointsJoint = [...pointsList2, ...pointsLis3];
console.log(pointsJoint);

/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.*/

const toy2 = {
	name: 'Bus laiyiar', 
	date: '20-30-1995', 
	color: 'multicolor'
};
const toyUpdate = {
	lights: 'rgb', 
	power: ['Volar like a dragon', 'MoonWalk']
};

let newToys = { ...toy2, ...toyUpdate};
console.log(newToys);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
//pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let newColors = [red, blue, yellow, green, orange] = colors;
newColors.splice(2, 1);
console.log(newColors);

//Iteración #4: Map

/*4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/

const usersNames = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const findMyUser = usersNames.map(user =>({id: user.id, name: user.name}));
console.log(findMyUser);

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/


const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const names = users.map(user =>{
	
	if (user.name.startsWith("A")){
		return "Anacleto";
	}else{
		return user.name;
	};
	//console.log(firstLetter);
});
console.log(names);

/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const myCities = cities.map(city => {
	if(city.isVisited === true){
		return {isVisited: city.isVisited, Visitado: city.name};
	}else{
		return {isVisited: city.isVisited, name: city.name}
	};
});

console.log(myCities);

//Iteración #5: Filter

/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const myAges = ages
.filter(function (age){
	if(age > 18){
	return age;
}	
});

console.log(myAges);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean par.


const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const myAgesEven = ages2
.filter(function (age){
	if(age % 2 === 0){
	return age;
}	
});

console.log(myAgesEven);

/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/


const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const stream = streamers
    .filter((streamer) => streamer.gameMorePlayed.includes("League of Legends"));

console.log(stream);

/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];*/

const stream2 = streamers
    .filter((streamer) => streamer.name.includes("u"));

	console.log(stream2);

/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/

const streamerAge = streamers
.filter((streamer) => streamer.gameMorePlayed.includes("League of Legends"))
.map((streamer) => {
	if(streamer.age > 35) {
		streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
	}
	return streamer;
});

console.log(streamerAge);

/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

/*<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>*/

/*5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.*/

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

/*<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
  <button data-function="toShowFilterStreamers">Filter</button>
</body>
</html>*/

//Iteración #6: Find

//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const findNumber = numbers.find(number => number=== 100);
console.log(findNumber);

//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const findMovie = movies.find(movie => movie.date === 2010);
console.log(findMovie);

/*6.3 Dado el siguiente javascript, usa .find() para encontrar el alien de nombre 
'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado.*/

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const foundAlien = aliens.find(element => element.name === "Cucushumushu");
const foundMutation = mutations.find(mutat => mutat.name === "Porompompero");

const myAlien = [...foundAlien, ...foundMutation, foundMutation.name];


//console.log(foundAlien, foundMutation);
console.log(myAlien);

//Iteración #7: Reduce

/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const mySum = exams
.reduce(function (acc, current){
	return acc + current.score;
	
},0);

console.log(mySum);

//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
//alumnos que esten aprobados usando la función .reduce().

//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().*/

const myExams = exams
.reduce(function (acc, current){
	return (acc + current.score) / 2;
}, 0);

console.log(myExams);

//Iteración #8: Bonus

/*6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para encontrar el genero 'RPG' en el 
array .gender.*/

const videogames = [
    {name: 'Final Fantasy VII',  genres: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genres: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genres: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genres: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genres: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genres: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
];

const filterGame = videogames.filter(game =>{
//console.log(game.genres);
const RPGFilter = game.genres.includes("RPG");
return RPGFilter;
})
.reduce((acc, current, index, array) =>{
acc.totalScore += current.score;
acc.totalGames++;
if(index === array.lengh - 1){
	//el acc va un numero despues del indice
	acc = acc.totalScore / acc.totalGames;
}
return acc;
}, {totalScore: 0, totalGames: 0});

console.log(filterGame);