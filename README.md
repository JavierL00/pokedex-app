# Pokédex App

Aplicación fullstack que consume la API pública de Pokémon (`https://pokeapi.co`) desde un backend en Go, expone los datos mediante un endpoint, y los presenta en un frontend hecho en React con Vite. La aplicación incluye búsqueda, paginación y mecanismos de caché tanto en el cliente como en el servidor.

---

## ⚙️ Tecnologías utilizadas

### 🖥️ Frontend
- [React 19](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Axios

### 🧠 Backend
- Go 1.24.2
- [gorilla/mux](https://github.com/gorilla/mux) – router HTTP
- [hashicorp/golang-lru](https://github.com/hashicorp/golang-lru) – caché en memoria

---

## 🚀 Instalación local

### 📦 Requisitos previos

- Node.js >= 22
- Go >= 1.24
- Yarn (opcional)
- Git

### 🧪 Clonar y ejecutar

```bash
git clone https://github.com/JavierL00/poke-api-go.git
cd poke-api-go

# FRONTEND
cd frontend
yarn install
yarn dev

# BACKEND
cd backend
go run main.go

