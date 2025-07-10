const API_URL = 'https://pokeapi.co/api/v2'

export const getPokemons = async(limit=151, offset=0) => {
    try {
        const response = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();

        const promises = data.results.map(async (pokemon) => {
            const pokemonDatailsResponse = await fetch(pokemon.url);
            return await pokemonDatailsResponse.json();
        });

        const detailedPokemon = await Promise.all(promises);
        return detailedPokemon;
    } catch (error){
        console.log("Falha ao buscar a lista de pokémons: ", error);
        return [];
    }
}

export const getPokemonDetails = async (pokemonIdOrName) => {
    try {
        const response = await fetch(`${API_URL}/pokemon/${pokemonIdOrName}`);
        const data = await response.json();
        return data;
    } catch(error){
        console.error(`Falha ao buscar o ${pokemonIdOrName}`, error);
        return null;
    }
}