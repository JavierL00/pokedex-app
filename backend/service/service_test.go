package service

import (
	"testing"
)

func TestFetchAllPokemon(t *testing.T) {
	pokemons, err := FetchAllPokemon()
	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}

	if len(pokemons) == 0 {
		t.Fatalf("Expected non-empty list of pokemons")
	}

	if pokemons[0].ID == "" || pokemons[0].Name == "" || pokemons[0].Image == "" {
		t.Errorf("Expected valid pokemon fields, got %+v", pokemons[0])
	}
}
