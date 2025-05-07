package cache

import (
	"github.com/hashicorp/golang-lru"

	"github.com/JavierL00/backend/model"
)

var cache, _ = lru.New(128)

func GetFromCache(key string) ([]model.Pokemon, bool) {
	if val, ok := cache.Get(key); ok {
		if pokemons, ok := val.([]model.Pokemon); ok {
			return pokemons, true
		}
	}
	return nil, false
}

func SaveToCache(key string, value []model.Pokemon) {
	cache.Add(key, value)
}
