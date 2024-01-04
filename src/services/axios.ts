import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: { "X-Custom-Header": "foobar" },
});
