const pokedex = document.getElementById("pokedex")
const poke_container = document.getElementById('poke_container');
const searching = document.querySelector(".input");
const pokemons_number = 151;
const colors = {
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
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	//searching.addEventListener("input", () => search(pokemon));
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokecards = document.createElement('div');
	pokecards.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const type2 = main_types.find(type => poke_types.indexOf(type) > 0)
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	pokecards.style.backgroundColor = color;

if(pokemon.type2 === true){
	const pokeInnerHTML = 
  `
        <div class="img-container">
        <img src="${pokemon.image}" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h2 class="name">${name}</h2>
            <p class="type">Type: <span>${type} ${type2}</span></p>
        </div>
    `;

	pokecards.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokecards);
}else {
	const pokeInnerHTML = 
  `
        <div class="img-container">
        <img src="${pokemon.image}" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h2 class="name">${name}</h2>
            <p class="type">Type: <span>${type}</span></p>
        </div>
    `;

	pokecards.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokecards);
}
}

/*const search = (pokimons) => {
	const filter = [];
	pokimons.pokemon.forEach((poke) => {
		if (poke.name.toLoweCase().includes(searching.ariaValueMax.toLocaleLowerCase().trim()
		)){
			filter.push(poke);
		};
	});
	createPokemonCard({ pokemon : filter});
};
*/

fetchPokemons();