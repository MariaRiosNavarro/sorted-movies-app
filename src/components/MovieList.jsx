import MovieCard from "./MovieCard";
import movies from "../db/movies";

// Props Version

const MovieList = () => {
  return (
    <>
      <article>
        {movies.map((movie, index) => (
          <MovieCard moviesObject={movie} key={index} />
        ))}
      </article>
    </>
  );
};

export default MovieList;
