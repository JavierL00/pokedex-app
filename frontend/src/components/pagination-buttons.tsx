import type {Dispatch, ReactElement, SetStateAction} from "react";
import type {Pokemon} from "../interfaces/pokemon.ts";

interface Props {
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	pokemons: Pokemon[];
	itemsPerPage: number;
}

export default function PaginationButtons(
 {
	 currentPage,
	 setCurrentPage,
	 pokemons,
	 itemsPerPage,
 }: Readonly<Props>
): ReactElement {
	return (
	 <div className="flex justify-center mt-4 gap-2">
		 <button
			className="px-4 py-2 bg-yellow-300 rounded disabled:opacity-50"
			onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
			disabled={currentPage === 1}
		 >
			 Previous
		 </button>
		 <button
			className="px-4 py-2 bg-yellow-300 rounded disabled:opacity-50"
			onClick={() =>
			 setCurrentPage((prev: number) =>
				prev < Math.ceil(pokemons.length / itemsPerPage) ? prev + 1 : prev
			 )
			}
			disabled={currentPage === Math.ceil(pokemons.length / itemsPerPage)}
		 >
			 Next
		 </button>
	 </div>
	);
};