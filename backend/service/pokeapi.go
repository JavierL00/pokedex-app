package service

import (
	"encoding/json"
	"fmt"
	"net/http"
	"regexp"

	"github.com/JavierL00/backend/model"
)

type ApiResponse struct {
	Results []struct {
		Name string `json:"name"`
		URL  string `json:"url"`
	} `json:"results"`
}

var idRegex = regexp.MustCompile(`/pokemon/(\d+)/$`)

func FetchAllPokemon() ([]model.Pokemon, error) {
	resp, err := http.Get("https://pokeapi.co/api/v2/pokemon?limit=10000")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var apiResp ApiResponse
	if err := json.NewDecoder(resp.Body).Decode(&apiResp); err != nil {
		return nil, err
	}

	var pokemons []model.Pokemon
	for _, p := range apiResp.Results {
		id := extractID(p.URL)
		if id == "" {
			continue
		}
		image := fmt.Sprintf("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/%s.png", id)
		pokemons = append(pokemons, model.Pokemon{
			ID:    id,
			Name:  p.Name,
			Image: image,
		})
	}
	return pokemons, nil
}

func extractID(url string) string {
	matches := idRegex.FindStringSubmatch(url)
	if len(matches) >= 2 {
		return matches[1]
	}
	return ""
}
