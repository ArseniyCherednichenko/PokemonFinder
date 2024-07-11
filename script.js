const pokemonCard = document.getElementById('pokemon-card');
const regenerateButton = document.getElementById('regenerate-button');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 809) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    fetch(url)
     .then(response => response.json())
     .then(data => {
            const pokemonName = data.name;
            const pokemonImage = data.sprites.front_default;
            const pokemonId = data.id;
            const pokemonHeight = data.height / 10;
            const pokemonWeight = data.weight / 10;

            const pokemonCardContent = `
                <h2>${pokemonName}</h2>
                <img src="${pokemonImage}" alt="${pokemonName}">
                <p>ID: #${pokemonId}</p>
                <p>Height: ${pokemonHeight}m</p>
                <p>Weight: ${pokemonWeight}kg</p>
            `;
            pokemonCard.innerHTML = pokemonCardContent;
      });
}

regenerateButton.addEventListener('click', getRandomPokemon);

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    fetch(url)
     .then(response => response.json())
     .then(data => {
            const pokemonName = data.name;
            const pokemonImage = data.sprites.front_default;
            const pokemonId = data.id;
            const pokemonHeight = data.height / 10;
            const pokemonWeight = data.weight / 10;

            const pokemonCardContent = `
                <h2>${pokemonName}</h2>
                <img src="${pokemonImage}" alt="${pokemonName}">
                <p>ID: #${pokemonId}</p>
                <p>Height: ${pokemonHeight}m</p>
                <p>Weight: ${pokemonWeight}kg</p>
            `;
            pokemonCard.innerHTML = pokemonCardContent;
      })
     .catch(() => {
            pokemonCard.innerHTML = `<p>Pokémon not found!</p>`;
      });
});

getRandomPokemon();