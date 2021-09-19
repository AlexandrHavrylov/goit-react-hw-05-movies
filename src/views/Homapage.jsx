import { fetchPopularFilms } from "../servises/films-api";
import { useState, useEffect } from "react";
import { Films, Film, FilmPoster, StyledLink } from "../styled/Homepage.styled";

import { StyledLoader } from "../styled/App.styled";

export default function Homepage() {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetch = async () => {
      setStatus("pending");
      const films = await fetchPopularFilms();
      setFilms(films);
      setStatus("resolved");
    };
    fetch();
  }, []);
  if (status === "resolved" || status === "idle") {
    return (
      <Films>
        {films.map((film) => (
          <Film key={film.id}>
            <StyledLink to={`movies/${film.id}`}>
              <FilmPoster
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.name}
                width="150px"
                onError={(e) => {
                  e.target.src =
                    "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1350441335.jpg";
                }}
              />
              <p>{film.title}</p>
            </StyledLink>
          </Film>
        ))}
      </Films>
    );
  }
  if (status === "pending") {
    return <StyledLoader type="ThreeDots" color="gray" />;
  }
}
