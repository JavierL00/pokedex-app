import axios from "axios";

const baseURL =
 import.meta.env.VITE_APP_ENV === "production"
	? import.meta.env.VITE_API_URL
	: "http://localhost:8080"

const authApi = axios.create({baseURL});

export default authApi;
