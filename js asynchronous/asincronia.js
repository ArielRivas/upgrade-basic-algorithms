/*1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js.*/

const callApi = async () => {

   
    const apiCall = await fetch("https://api.agify.io?name=michael");
    const apiCallJSON = await apiCall.json(); 
    console.log(apiCallJSON);
  };
  callApi();
  
/*2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/

//const baseUrl = 'https://api.nationalize.io';

const callApiWithButton = () => {
    document.getElementById('button-id').addEventListener("click", function(event) {
        event.fetch("https://api.nationalize.io?name=michael").then(res => res.json())
     });
};

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button id="button-id">Consultar</button>
</body>
</html>
</head>*/

/*2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.*/
const body = document.querySelector(".body");
const createDinamicElement = (people) => {
const countries = people.country.map(countries => countries.country_id.probability);
body.innerHTML = `
<div class="main">
<h1>El nombre ${people.name} tiene un ${people.country[0].probability} de ser de ${people.country[0].country_id} y un ${people.country[1].probability} de ser de ${people.country[1].country_id} </h1>
</div>`
};

callApiWithButton(createDinamicElement);

/*2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.*/

//2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
//async-await.


/*const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    promise.then(() => {console.log('Time out!')})
};

runTimeOut();*/

const runTimeOut = async (resolve) => {
    try {
        const promise = await addItem(resolve)
        console.log(result);
    }  
         catch (error) {
            console.error("error", error);
}};
    

runTimeOut();


/*2.2 Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;*/


//function getCharacters () {
  //  fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
//}

//getCharacters();

const getCharacters = async () => {
    const callApi = await fetch('https://rickandmortyapi.com/api/character');
    const callApiJson = await callApi.json();
    console.log(callApiJson);
};
getCharacters();