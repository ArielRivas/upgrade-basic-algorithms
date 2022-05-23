/*window.onload = init;

  function addContent () {
    // crear algo en el html
    let newButton = document.createElement("button");
    
  };
*/



 // 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

let handleClick = function(event) {
  console.log(event);
};
document.getElementById("btnToClick").addEventListener("click", handleClick);

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let form = document.getElementById('input');

let password = document.querySelector('input[type="text"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'green';
  console.log(event);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.


const input = document.querySelector('input');
const log = document.getElementById('myInput');

input.addEventListener('input', updateValue);

function updateValue(event) {
  let textContent = event;
  console.log(textContent);
};

