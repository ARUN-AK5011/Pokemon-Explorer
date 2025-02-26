export const fetchAllPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    if (!response.ok) throw new Error("Failed to fetch Pokémon data");
    return response.json();
};
  
export const fetchPokemonById = async (id: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) throw new Error("Failed to fetch Pokémon details");
    return response.json();
};
  