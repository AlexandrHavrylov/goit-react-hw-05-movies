import { FilmPoster } from "../../views/styled/Homepage.styled";
import { FilmContainer, ImgThumb } from "./FilmInfostyled";

export default function FilmInfo({ film }) {
  const { title, vote_average, overview, genres, release_date, poster_path } =
    film;

  return (
    film && (
      <>
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
      </>
    )
  );
}
