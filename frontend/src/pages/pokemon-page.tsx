import type {ReactElement} from "react";
import PokemonsList from "../components/pokemons-list.tsx";

export default function PokemonPage(): ReactElement {
	return (
	 <div className="min-h-screen bg-gradient-to-b from-[#E12025] to-[#941d25] text-white">
		 <header className="bg-[#FFCC0D] text-black text-center py-6 shadow-lg">
			 <h1 className="text-4xl font-bold tracking-wide uppercase">Pokédex</h1>
			 <p className="text-sm mt-1">Busca y explora todos los Pokémon</p>
		 </header>

		 <main className="px-4 py-6">
			 <div className="max-w-7xl mx-auto">
				 <div className="p-4 bg-[#3274B9] border-2 border-black overflow-y-auto h-full rounded-lg">
					 <PokemonsList/>
				 </div>
			 </div>
		 </main>
	 </div>
	);
};