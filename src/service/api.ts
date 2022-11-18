import axios from "axios";


const api = axios.create({
  baseURL: "https://anime-db.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_ANIME_DB_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_ANIME_DB_HOST,
  },
});

export { api };
