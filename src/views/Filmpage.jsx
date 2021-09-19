import FilmInfo from "../components/Filminfo/FilmInfo";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import {
  fetchFilmById,
  fetchCredits,
  fetchRewies,
} from "../servises/films-api";

import { Route, useRouteMatch } from "react-router";
import FilmCasts from "../components/FilmSubInfo/FilmCasts";
import { StyledLink } from "../styled/Homepage.styled";
import FilmReviews from "../components/FilmSubInfo/FilmReviews";

export default function Filmpage() {
  const [film, setFilm] = useState("");
  const [casts, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  const { url } = useRouteMatch();
  const { filmId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const film = await fetchFilmById(filmId);
      const casts = await fetchCredits(filmId);
      const reviews = await fetchRewies(filmId);
      setFilm(film);
      setCast(casts);
      setReviews(reviews);
    };
    fetch();
  }, [filmId]);

  return (
    <>
      <FilmInfo film={film} />
      <div>
        <StyledLink to={`${url}/cast`}>
          <span>Cast</span>{" "}
        </StyledLink>
        <StyledLink to={`${url}/reviews`}>
          <span>Reviews</span>{" "}
        </StyledLink>
      </div>
      <Route path={`${url}/cast`}>
        <FilmCasts casts={casts} />
      </Route>
      <Route path={`${url}/reviews`}>
        <FilmReviews reviews={reviews} />
      </Route>
    </>
  );
}
