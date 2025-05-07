package main

import (
	"github.com/JavierL00/backend/handler"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	r := mux.NewRouter().StrictSlash(true)
	r.HandleFunc("/pokemon", handler.HandlePokemon).Methods("GET")
	log.Println("Server running on :8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
