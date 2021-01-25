const poke_container = document.getElementById('poke-container');
const POKEMON_COUNT = 150;
const colors = {
  bug: '#A6B91A',
  dark: '#705746',
  dragon: '#6F35FC',
  electric: '#F7D02C',
  fairy: '#D685AD',
  fighting: '#C22E28',
  fire: '#EE8130',
  flying: '#A98FF3',
  ghost: '#735797',
  grass: '#7AC74C',
  ground: '#E2BF65',
  ice: '#96D9D6',
  normal: '#A8A77A',
  poison: '#A33EA1',
  psychic: '#F95587',
  rock: '#B6A136',
  steel: '#B7B7CE',
  water: '#6390F0',
};

const fetchPokemons = async () => {
  for (let i = 1; i <= POKEMON_COUNT; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const number = pokemon.id.toString().padStart(3, '0');
  const type = pokemon.types.map((type) => type.type.name)[0];
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  pokemonEl.innerHTML = `
  <div class="img-container">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
      alt="${pokemon.name}"
    />
  </div>
  <div class="info">
    <span class="number">#${number}</span>
    <h3 class="name">${name}</h3>
    <small class="type">
      Type: <span>${type}</span>
    </small>
  </div>
  `;

  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
