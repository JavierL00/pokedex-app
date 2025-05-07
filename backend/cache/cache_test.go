package cache

import (
	"testing"

	"github.com/JavierL00/backend/model"
)

func TestCacheSetGet(t *testing.T) {
	key := "pokemon:all"
	expected := []model.Pokemon{
		{ID: "25", Name: "pikachu", Image: "https://img.png"},
	}

	SaveToCache(key, expected)

	result, ok := GetFromCache(key)
	if !ok {
		t.Fatal("Expected item in cache, got none")
	}

	if len(result) != 1 || result[0].Name != "pikachu" {
		t.Errorf("Unexpected cache result: %+v", result)
	}
}
