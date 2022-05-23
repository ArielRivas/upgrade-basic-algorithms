

/*
* #1 Añade una nueva marca a tu array de Marcas con los datos que quieras.
* 
* #2 Elimina la marca con menos valoración. No nos gustan las cutreces.
* 
* #3 Imprime un mensaje por cada marca que diga
* La marca XXXXXXX tiene una valoración de XX en el mercado.
* 
* #4 Ordena las marcas según su valoración. Pista: función de sort, accediendo
* a la propiedad rating de la marca.
* 
* #5 Crea un nuevo array con este dato ficticio.
* marca.unitsSelled = (multiplicar rating * 100)
*/
const marcas = [
    {
        name: 'Mercedes',
        rating: 10,
    },
    {
        name: 'Tata',
        rating: 2,
    },
    {
        name: 'Ford',
        rating: 7,
    },
    {
        name: 'Seat',
        rating: 8,
    },
    {
        name: 'Dacia',
        rating: 5,
    },
]

//1
marcas.push({
    name: 'Fiat',
    rating: 4,
}
)   


//2
let marcaConMenosValoracion;

for (let marca of marcas) {
    if (!marcaConMenosValoracion){
        marcaConMenosValoracion = marca;
    }
    if (marcaConMenosValoracion.rating > marca.rating) {
        marcaConMenosValoracion = marca;
    }
    
}
const  indexMarcaMasChunga = marcas.indexOf(marcaConMenosValoracion);
marcas.splice(indexMarcaMasChunga, 1);




//3

marcas.forEach(function(marca){
    console.log('El coche ' + marca.name + ' ' + ' tiene una valoración de ' + marca.rating);
});

