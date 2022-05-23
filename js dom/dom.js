window.onload = function() {
    addContent();
  };

//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let newDiv = document.querySelector('.showme');

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let newH1 = document.querySelector('#pillado');

//1.3 Usa querySelector para mostrar por consola todos los p

let newP = document.querySelectorAll('p');

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

let newpoke = document.querySelectorAll('.pokemon');

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

let newTest = document.querySelectorAll('.testMe');

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

let newCharac = document.getElementByName('testMe').nextSibling;
