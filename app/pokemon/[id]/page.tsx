import { fetchPokemonById } from "@/api/PokeAPI";


export async function generateStaticParams() {
    const ids = Array.from({ length: 400 }, (_, i) => (i + 1).toString());  
    return ids.map((id) => ({ id }));
}

export default async function PokemonDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; 

  if (!resolvedParams?.id) {
    return <p className="text-center text-red-500">Invalid Pokémon ID</p>;
  }

  const pokemon = await fetchPokemonById(resolvedParams.id);

  return (
    <main className="p-6 max-w-2xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold capitalize text-center text-gray-900 dark:text-white mb-4">
        {pokemon.name}
      </h1>

      <div className="flex justify-center">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-40 h-40 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Type:</h2>
        <p className="capitalize text-gray-800 dark:text-gray-400 mt-1">
          {pokemon.types.map((t: any) => t.type.name).join(", ")}
        </p>
      </div>

      <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Abilities:</h2>
        <p className="capitalize mt-1 text-gray-800 dark:text-gray-400">
          {pokemon.abilities.map((a: any) => a.ability.name).join(", ")}
        </p>
      </div>

      <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Base Stats:</h2>
        <ul className="mt-3 space-y-2">
          {pokemon.stats.map((s: any) => (
            <li
              key={s.stat.name}
              className="flex justify-between px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200"
            >
              <span className="font-medium capitalize">{s.stat.name}</span>
              <span className="font-bold">{s.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
