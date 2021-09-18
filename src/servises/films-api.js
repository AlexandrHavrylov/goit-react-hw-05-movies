import axios from "axios";

const KEY = "5fa4bb8a58c85ac583b1447954dde7e6";

async function fetchPopularFilms() {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
  const response = await axios.get(url);

  return response.data.results;
}
async function fetchFilmById(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url);

  return response.data;
}

export { fetchPopularFilms, fetchFilmById };
