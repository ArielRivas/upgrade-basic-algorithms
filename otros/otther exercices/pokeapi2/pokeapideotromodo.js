const pokedex$$ = document.querySelector(".pokedex");
const searched$$ = document.querySelector(".input");

const fetchPokemon = () => {
  const asynch = [];
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`; 
    asynch.push(fetch(url).then((response) => response.json()));
  }
  Promise.all(asynch).then((results) => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites["front_default"],
      type: data.types.map((type) => type.type.name).join(", "),
    }));
    display(pokemon);
  });
};
searched$$.addEventListener("input", () => searchingPokeFunc(asynch));
const searchingPokeFunc = (pokemon) => {
  const searchingPoke = [];
    for (const poke of pokemon) {
        if(poke.name.toLowerCase().includes(searched$$.value.toLowerCase().trim())){
        searchingPoke.push(poke)
      }
      display(searchingPoke);
      };
    };
const display = (pokemon) => { 
const pokemonInHTML = pokemon.map((poke) => 
`
<div class="cards">
<p class="card__id">${poke.id}</p>
<h2 class="card__name">${poke.name}</h2>
<img class="card__image" src="${poke.image}" alt="${poke.name}"></img>
<p class="card__types>${poke.type}</p>
</div>
`)
.join(", ");

pokedex$$.innerHTML = pokemonInHTML;
}

/*let card$$ = pokemon => pokemonInHTML.getElementByTag("div");
let cards = pokemon.map(card$$);
card$$.appendChild(pokedex$$);

};

fetchPokemon();


otra manera de hacerlo
const pokemon = {};
pokemon["name"] = data.name;
pokemon["id"] = data.id;
pokemon["image"] = data.sprites["front_default"];
pokemon.types.forEach(element => { pokemon["type"] ${pokemon.name.type}
    
});

*/