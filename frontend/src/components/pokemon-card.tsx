import type {ReactElement} from "react";
import type {Pokemon} from "../interfaces/pokemon.ts";

export default function PokemonCard({pokemon}: Readonly<{ pokemon: Pokemon }>): ReactElement {
	return (
	 <li className="bg-white flex flex-col items-center justify-center p-4 rounded-lg shadow-lg">
		 <h2 className="uppercase bg-[#FFCC0D] w-full text-center rounded-lg">{pokemon.name}</h2>
		 <img
			src={pokemon.image}
			alt={pokemon.name}
			className="w-24 h-24 object-contain"
		 />
	 </li>
	);
};
