//Iteración #1: Usa includes//

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
//const productsFiltered = [];

for (const product of products) {
    if (product.includes('Camiseta'))
   // productsFiltered.push(product); si lo quieres guardar!
        console.log(product);
};


//si quieres borrar items en un bucle-->
/*for (let i = 0; i < products.length; i++) {
    const element = array[i];
    if (products[i]. includes('Camisetas')){
        products.splice(i, 1);
       
    --i; 
}
}*/

//Iteración #2: Condicionales avanzados//

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

const nuevoArrayAlumnos = alumns.map(function(alumn, i, array){ 
    let AlumIf = alumn;
    let aprobado = false;
    
    if((alumn.T1 === true && alumn.T2 === true) || (alumn.T1 === true && alumn.T3 === true) || (alumn.T2 === true && alumn.T3 === true)){
        AlumIf.isApproved = true;
    }else {
        AlumIf.isApproved = false;
    };
    return AlumIf;
}
);

console.log(nuevoArrayAlumnos);

//Iteración #3: Probando For...of//

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];


for (let places of placesToTravel) {
    console.log(places);
};

//Iteración #4: Probando For...in//

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};
for (let key in alien){
    console.log('El alien tiene ' + key + ' con valor: ' + alien[key]);
};

//Iteración #5: Probando For//

const placesToTravel2 = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
];
for (let i = 0; i < placesToTravel2.length; i++) {
    if (placesToTravel2[i].id === 11 || placesToTravel[i].id === 40){
        placesToTravel2.splice(i, 1);
    };    
};
console.log(placesToTravel2);

//Iteración #6: Mixed For...of e includes//

const toys1 = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

for (let key of toys1) {
    if (key.name.includes('gato')) {
        toys1.splice(key, 3);
    };
};

console.log(toys1);

//Iteración #7: For...of avanzado//
/*Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:*/

const popularToys = [];

const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
];

for (toy of toys2){
    if(toy.sellCount > 15){
        console.log(toy);
    };
};

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i <= 9 ; i++) {
    
    console.log(i);
    
};

/*1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/

let resto = 0;
for (let i = 0; i < 10; i++) {
   if(i % 2 === 0) {
     console.log(i);  
    };
};

/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.*/

for (let i = 0; i <= 10; i++) {
   if(i<10){
    console.log('Intentando dormir')
   }else
   console.log('Dormido');
};