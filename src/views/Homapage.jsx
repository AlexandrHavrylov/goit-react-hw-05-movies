import { fetchPopularFilms } from "../servises/films-api";
import { useState, useEffect } from "react";
import { Films, Film, FilmPoster, StyledLink } from "../styled/Homepage.styled";

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
            <StyledLink to={`movies/${film.id}`}>
              <FilmPoster
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.name}
                width="150px"
              />
              <p>{film.title}</p>
            </StyledLink>
          </Film>
        ))}
      </Films>
      ;
    </>
  );
}
