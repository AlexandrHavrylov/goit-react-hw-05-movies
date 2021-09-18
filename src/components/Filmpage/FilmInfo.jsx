import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { fetchFilmById } from "../../servises/films-api";
import { FilmPoster } from "../../views/styled/Homepage.styled";
import { FilmContainer, ImgThumb } from "./Filmpage.styled";

export default function FilmInfo() {
  const [film, setFilm] = useState("");
  const { filmId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const film = await fetchFilmById(filmId);
      setFilm(film);
    };
    fetch();
  }, [filmId]);

  const { title, vote_average, overview, genres, release_date, poster_path } =
    film;

  return (
    film && (
      <FilmContainer>
        <ImgThumb>
          <FilmPoster
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
            width="150px"
          />
        </ImgThumb>
        <div>
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>User Score: {vote_average * 10}%</p>
          <h2>Overview </h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </FilmContainer>
    )
  );
}
