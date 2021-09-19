import SearchInput from "../components/SearchInput/SearchInput";
import { useState, useEffect } from "react";
import { fetchByQuery } from "../servises/films-api";
import { useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router";
import { StyledLink, Film, FilmPoster, Films } from "../styled/Homepage.styled";
import { toast, ToastContainer } from "react-toastify";
import { StyledLoader } from "../styled/App.styled";
import "react-toastify/dist/ReactToastify.css";

export default function Moviespage() {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState("idle");

  const location = useLocation();
  const { url } = useRouteMatch();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetch = async () => {
      try {
        if (query) {
          setStatus("pending");
          const films = await fetchByQuery(query);
          setFilms(films);
          setStatus("resolved");
          if (films.length === 0) {
            throw new Error();
          }
        }
      } catch {
        toast.error("Сan't find such a movie");
      }
    };
    fetch();
  }, [query]);

  if (status === "idle" || status === "resolved") {
    return (
      <>
        <SearchInput />
        <ToastContainer />
        <Films>
          {films.map((film) => (
            <Film key={film.id}>
              <StyledLink to={`${url}/${film.id}`}>
                <FilmPoster
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
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
      </>
    );
  }

  if (status === "pending") {
    return <StyledLoader type="ThreeDots" color="gray" />;
  }
}
