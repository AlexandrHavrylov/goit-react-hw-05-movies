import { fetchPopularFilms } from "../servises/films-api";
import { useState, useEffect } from "react";
import { Films, Film, FilmPoster } from "./styled/Homepage.styled";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const films = await fetchPopularFilms();
      console.log(films);
      setFilms(films);
    };
    fetch();
  }, []);

  return (
    <>
      <Films>
        {films.map((film) => (
          <Film key={film.id}>
            <Link to={`/${film.id}`}>
              <FilmPoster
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt=""
                width="150px"
              />
              <p>{film.title}</p>
            </Link>
          </Film>
        ))}
      </Films>
      ;
    </>
  );
}
