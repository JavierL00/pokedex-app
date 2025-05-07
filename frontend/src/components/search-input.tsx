import type {Dispatch, ReactElement, SetStateAction} from "react";

interface Props {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function SearchInput({search, setSearch, setCurrentPage}: Readonly<Props>): ReactElement {
	return (
	 <div className="mb-4 flex justify-center">
		 <input
			type="text"
			value={search}
			onChange={(e) => {
				setSearch(e.target.value)
				setCurrentPage(1);
			}}
			placeholder="Buscar Pokémon..."
			className="px-4 py-2 rounded border border-gray-400 w-64 text-black"
		 />
	 </div>
	);
}
