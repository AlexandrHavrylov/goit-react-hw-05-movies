import { Actor, Actors } from "../../styled/FilmCasts.styled";

export default function FilmCasts({ casts }) {
  return (
    <Actors>
      {casts.map((cast) => (
        <Actor key={cast.id}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
              width="100px"
            />
          </div>
          <div>
            {" "}
            <p>Name: {cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        </Actor>
      ))}
    </Actors>
  );
}
