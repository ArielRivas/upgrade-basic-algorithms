

/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];*/

/*function addList() {
	const ul = document.createElement("ul");
	const ulFinder = document.getElementById("list");
	const li = document.createElement("li");
	li.appendChild(document.createTextNode('Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'));
	ul.appendChild(li);
  };*/

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let elementToDelete = document.querySelector("fn-remove-me");


/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let ulNew = document.createElement("ul");
document.getElementsByTagName("printHere");

for (let index = 0; index <= 4; index++) {
	let newParr = document.createElement("li");
	ulNew.appendChild(newParr);
};

document.body.appendChild(ulNew);

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let newDivImages = document.createElement("div");

const img = document.createElement("img");
img.src = "https://picsum.photos/300/200?random=1";
img.alt = "Random title";

document.body.appendChild(img);


/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*/

let buttonErase = document.createElement("button");

for (let index = 0; index <=5 ; index++) {
	if(index === 5){

	}
	
};

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/

let buttonAll = document.createElement("button");