const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

const urlPokeDex = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
 return fetch(urlPokeDex)
 .then((res) => res.json())
 .then((jsonBody) => jsonBody.results)
 .catch((error) => console.error(error));
}