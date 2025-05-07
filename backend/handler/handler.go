package handler

import (
	"encoding/json"
	"github.com/JavierL00/backend/cache"
	"github.com/JavierL00/backend/service"
	"net/http"
)

func HandlePokemon(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	if data, ok := cache.GetFromCache("pokemon:all"); ok {
		json.NewEncoder(w).Encode(data)
		return
	}

	pokemons, err := service.FetchAllPokemon()
	if err != nil {
		http.Error(w, "Error fetching data", http.StatusInternalServerError)
		return
	}

	cache.SaveToCache("pokemon:all", pokemons)
	json.NewEncoder(w).Encode(pokemons)
}
