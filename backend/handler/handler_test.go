package handler

import (
	"github.com/JavierL00/backend/cache"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestHandlePokemon(t *testing.T) {
	cache.SaveToCache("pokemon:all", nil)

	req := httptest.NewRequest("GET", "/pokemon", nil)
	w := httptest.NewRecorder()

	HandlePokemon(w, req)

	resp := w.Result()
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("Expected status 200, got %d", resp.StatusCode)
	}
}
