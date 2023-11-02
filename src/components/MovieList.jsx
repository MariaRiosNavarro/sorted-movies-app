import MovieCard from "./MovieCard";
import { useMyContext } from "../Context/useMyContext";

const MovieList = () => {
  const { moviesArray } = useMyContext();

  return (
    <>
      <article className="md:grid grid-cols-2">
        {moviesArray.map((movie, index) => (
          <MovieCard moviesObject={movie} key={index} />
        ))}
      </article>
    </>
  );
};

export default MovieList;
