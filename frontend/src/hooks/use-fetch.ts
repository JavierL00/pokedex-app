import {useEffect, useState} from "react";
import axios from "../lib/axios.ts";
import type {Pokemon} from "../interfaces/pokemon.ts";

export function useFetch() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPokemonList = async () => {
			const cached = localStorage.getItem("pokemon_cache");
			if (cached) {
				const {data, timestamp} = JSON.parse(cached);
				const isExpired = Date.now() - timestamp > 1800000;

				if (!isExpired) {
					setPokemons(data);
					setLoading(false);
					return;
				} else {
					localStorage.removeItem("pokemon_cache");
				}
			}

			try {
				const {data} = await axios.get<Pokemon[]>(`/pokemon`);
				setPokemons(data);
				localStorage.setItem("pokemon_cache", JSON.stringify({
					data,
					timestamp: Date.now()
				}));
			} catch (err: any) {
				setError(`Error fetching pokemons: ${err.message ?? err}`);
			} finally {
				setLoading(false);
			}
		};

		fetchPokemonList();
	}, []);

	return {pokemons, loading, error};
}