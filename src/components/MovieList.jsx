import MovieCard from "./MovieCard";
import { useMyContext } from "../Context/useMyContext";

const MovieList = () => {
  const { moviesArray, setMoviesArray } = useMyContext();
  const { search, setSearch } = useMyContext();

  return (
    <>
      <article>
        {moviesArray.map((movie, index) => (
          <MovieCard moviesObject={movie} key={index} />
        ))}
      </article>
    </>
  );
};

export default MovieList;
