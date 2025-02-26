import Link from "next/link";

export default function PokemonCard({ name, id }: { name: string; id: number }) {
  return (
    <Link href={`/pokemon/${id}`}>
      <div className="bg-white p-4 shadow-lg rounded-lg text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={name}
          className="w-24 mx-auto transition-transform duration-300 hover:rotate-6"
        />
        <p className="text-lg text-gray-800 font-bold capitalize mt-2">{name}</p>
      </div>
    </Link>
  );
}
