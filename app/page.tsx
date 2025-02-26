"use client";

import { useState, useEffect } from "react";
import { fetchAllPokemon } from "../api/PokeAPI";
import PokemonCard from "@/Components/PokemonCard";
import SearchBar from "@/Components/SearchBar";

export default function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchAllPokemon().then((data) => setPokemonList(data.results));
  }, []);

  const filteredPokemon = pokemonList.filter((p: any) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Pokémon Explorer</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      
      {filteredPokemon.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {filteredPokemon.map((p: any) => {
            const pokemonId = p.url.split("/").filter(Boolean).pop();
            return <PokemonCard key={pokemonId} name={p.name} id={pokemonId} />;
          })}
        </div>
      ) : (
        <div className="mt-8 text-center p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
          <svg
            className="w-10 h-10 mx-auto text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 9h.01M15 9h.01M9 15h6M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"
            />
          </svg>
          <p className="text-lg text-gray-700 font-semibold mt-2">No Pokémon Found</p>
          <p className="text-gray-500 text-sm">Try a different search term.</p>
        </div>
      )}
    </main>
  );
}
