/*

 ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}
*/
const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number1 => number2) {
  console.log("10 es estrictamente distinto a 2");
}

if (number3 && number1) {
  console.log("2 es distinto 10");
}
const resto= 2 * 5;
if (resto == 10) {
  console.log("2 por 5 es igual a 10");
}
const resto2 = 2 * 5;
const resto3 = 10 * 2;
if ( resto2 || resto3) {
  console.log("2 por 5 es igual a 10 Y 10 por 2 es igual a 10");
}
const resto4 = 20 / 2;
const resto5 = 10 / 5;
if (resto4 && resto5) {
  console.log("10 entre 2 es igual a 10 O 10 entre 5 es igual a 2");
}
