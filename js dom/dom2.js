//2.1 Inserta dinamicamente en un html un div vacio con javascript.


	let newDiv = document.createElement("div");
	document.body.appendChild(newDiv);
  

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.


	let newDiv2 = document.createElement("div");
	let newP = document.createElement("p");
	newDiv2.appendChild(newDiv);
	newP.body.appendChild(newDiv2);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDiv3 = document.createElement("div");

for (let index = 0; index <= 6; index++) {
	let newParr = document.createElement("p");
	newDiv3.appendChild(newParr);
};

document.body.appendChild(newDiv3);


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.


let pWithText = document.createElement("p");
pWithText.innerHTML = ("Soy Dinámico");
document.body.appendChild(pWithText);


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let firstH2 = document.createElement("h2");
firstH2.innerHTML = ("Soy Dinámico");

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


let newulFirst = document.createElement("ul");

for (let index = 0; index <= 6; index++) {
	let newList = document.createElement("li");
	newListText.innerHTML = ('Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter');
	newDiv3.appendChild(newList);
};

document.body.appendChild(newulFirst);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const remove = document.querySelector(".fn-remove-me");
remove.innerHTML = ``;

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	//Recuerda que no solo puedes insertar elementos con .appendChild.

let parr = document.createElement("p");
parr.innerHTML = ("Voy en medio!");

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


let parr2 = document.createElement("p");
parr2.innerHTML = ("Voy dentro!");
