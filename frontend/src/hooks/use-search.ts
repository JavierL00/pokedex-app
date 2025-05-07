import type {Pokemon} from "../interfaces/pokemon.ts";
import {useEffect, useState} from "react";

export function useSearch(pokemons: Pokemon[]) {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 20;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	const [search, setSearch] = useState('');
	const [debouncedSearch, setDebouncedSearch] = useState(search);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(search);
		}, 300);

		return () => {
			clearTimeout(handler);
		};
	}, [search]);

	const filteredPokemons = pokemons.filter(p =>
	 p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
	);

	const currentPokemons = filteredPokemons.slice(indexOfFirstItem, indexOfLastItem);

	return {
		search,
		setSearch,
		currentPage,
		setCurrentPage,
		itemsPerPage,
		filteredPokemons,
		currentPokemons,
	}
}