import SearchInput from "../components/SearchInput/SearchInput";
import { useState, useEffect } from "react";
import { fetchByQuery } from "../servises/films-api";
import { useRouteMatch } from "react-router-dom";
import { StyledLink, Film, FilmPoster, Films } from "../styled/Homepage.styled";

export default function Moviespage() {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);

  const { url } = useRouteMatch();
  useEffect(() => {
    const fetch = async () => {
      if (query.trim()) {
        const films = await fetchByQuery(query);
        setFilms(films);
      }
    };
    fetch();
  }, [query]);

  return (
    <>
      <SearchInput onSubmit={setQuery} />
      <Films>
        {films.map((film) => (
          <Film key={film.id}>
            <StyledLink to={`${url}/${film.id}`}>
              <FilmPoster
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              />
              <p>{film.title}</p>
            </StyledLink>
          </Film>
        ))}
      </Films>
    </>
  );
}
