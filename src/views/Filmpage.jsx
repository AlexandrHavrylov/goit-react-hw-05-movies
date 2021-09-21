import FilmInfo from "../components/Filminfo/FilmInfo";
import { useHistory, useLocation, useParams } from "react-router";
import { useState, useEffect } from "react";
import { fetchFilmById } from "../servises/films-api";
import { ImArrowLeft } from "react-icons/im";
import { Route, useRouteMatch } from "react-router";
import FilmCasts from "../components/FilmSubInfo/FilmCasts";
import { StyledLink } from "../styled/Homepage.styled";
import FilmReviews from "../components/FilmSubInfo/FilmReviews";
import { BackButton } from "../styled/FilmInfostyled";

export default function Filmpage() {
  const [film, setFilm] = useState("");
  const { url } = useRouteMatch();
  const { filmId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const film = await fetchFilmById(filmId);
      setFilm(film);
    };
    fetch();
  }, [filmId]);
  const history = useHistory();
  const location = useLocation();

  const handleBackClick = () => {
    history.push(location.state?.from ? location.state?.from : "/");
  };

  return (
    <>
      <BackButton onClick={handleBackClick}>
        <ImArrowLeft />
        Go back
      </BackButton>

      <FilmInfo film={film} />
      <div>
        <StyledLink
          to={{
            pathname: `${url}/cast`,
            state: {
              from: location?.state?.from ?? "/",
            },
          }}
        >
          <span>Cast</span>{" "}
        </StyledLink>
        <StyledLink
          to={{
            pathname: `${url}/reviews`,
            state: {
              from: location?.state?.from ?? "/",
            },
          }}
        >
          <span>Reviews</span>{" "}
        </StyledLink>
      </div>
      <Route path={`${url}/cast`}>
        <FilmCasts id={filmId} />
      </Route>
      <Route path={`${url}/reviews`}>
        <FilmReviews id={filmId} />
      </Route>
    </>
  );
}
