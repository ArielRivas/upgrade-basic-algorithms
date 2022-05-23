const pokedex = document.getElementById("pokedex")
const container = document.getElementById('container');
const searching = document.getElementById("input")
const quantityOfPokes = 151;
const colorsMap = {
	fire: '#f27059',
	grass: '#74c69d',
	electric: '#FFFF33',
	water: '#6495ED	',
	ground: '#cd9777',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#DA70D6',
	bug: '#90EE90	',
	dragon: '#97b3e6',
	psychic: '#D8BFD8',
	flying: '#bde0fe',
	fighting: '#E9967A',
	normal: '#F5F5F5'
};

const mainTypeColors = Object.keys(colorsMap);

const getPokeFromApi = async () => {
	for (let iD = 1; iD <= quantityOfPokes; iD++) {
		await getPokemons(iD);
	}
};

const getPokemons = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const results = await fetch(url);
	const pokemon = await results.json();
	createPokemonCard(pokemon);
	
	
};

function createPokemonCard(pokemon) {
	const pokecards = document.createElement('div');
	pokecards.classList.add('pokemon');

	const allTypes = pokemon.types.map(type => type.type.name);
	const type = mainTypeColors.find(type => allTypes.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colorsMap[type] || colorsMap.normal;
	
	pokecards.style.backgroundColor = color;

if(pokemon.types[1]){
	const pokeInnerHTML = 
  `
        <div class="img-container">
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h2 class="name">${name}</h2>
            <p class="type"><span>${pokemon.types[0].type.name}, ${pokemon.types[1].type.name}</span></p>
        </div>
    `;

	pokecards.innerHTML = pokeInnerHTML;
    container.appendChild(pokecards);

}
else {
	const pokeInnerHTML = 
    `
        <div class="img-container">
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h2 class="name">${name}</h2>
            <p class="type"><span>${pokemon.types[0].type.name}</span></p>
        </div>
    `;

	pokecards.innerHTML = pokeInnerHTML;
    container.appendChild(pokecards);
}
};

const init = () => {
	getPokeFromApi();
	searching.addEventListener("input", (event) => {
		console.log(event.target.value);
	})
}
window.onload = init;

