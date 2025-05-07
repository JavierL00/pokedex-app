import PokemonCard from "./pokemon-card.tsx";
import PaginationButtons from "./pagination-buttons.tsx";
import SearchInput from "./search-input.tsx";
import {useFetch} from "../hooks/use-fetch.ts";
import {useSearch} from "../hooks/use-search.ts";

export default function PokemonsList() {
	const {pokemons, loading, error} = useFetch();

	const {
		search,
		setSearch,
		currentPage,
		setCurrentPage,
		itemsPerPage,
		filteredPokemons,
		currentPokemons,
	} = useSearch(pokemons);

	if (loading) return (
	 <div className="flex justify-center items-center">
		 <p className="text-2xl text-white">Loading...</p>
	 </div>
	);

	if (error) return (
	 <div className="flex justify-center items-center">
		 <p className="text-2xl text-white">{error}</p>
	 </div>
	);

	return (
	 <>
		 <SearchInput search={search} setSearch={setSearch} setCurrentPage={setCurrentPage}/>

		 <div className="p-4 overflow-y-auto h-full">
			 <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto">
				 {currentPokemons.map((pokemon) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon}/>
				 ))}
			 </ul>

			 <PaginationButtons
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				pokemons={filteredPokemons}
				itemsPerPage={itemsPerPage}
			 />
		 </div>
	 </>
	);
}
