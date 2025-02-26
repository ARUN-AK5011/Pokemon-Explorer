export default function SearchBar({ setSearchQuery }: { setSearchQuery: (query: string) => void }) {
    return (
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
      />
    );
  }
  