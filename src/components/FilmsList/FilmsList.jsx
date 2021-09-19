import { fetchPopularFilms } from "../../servises/films-api";
import { useState, useEffect } from "react";
import { Films, Film, FilmPoster } from "./FilmsList.styled";
import { Link } from "react-router-dom";

export default function FilmsList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const films = await fetchPopularFilms();
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
                onError={(e) => {
                  e.target.src =
                    "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1350441335.jpg";
                }}
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
