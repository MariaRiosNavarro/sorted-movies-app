import MovieCard from "./MovieCard";
import movies from "../db/movies";
import Button from "./Button";
import { useState } from "react";

// Props Version

const MovieList = () => {
  const [moviesArray, setMoviesArray] = useState(movies);

  const copyMovies = [...movies];

  const handleDateAscending = () => {
    copyMovies.sort((a, b) => a.year - b.year);
    console.log(copyMovies);
  };

  const handleDateDescending = () => {
    copyMovies.sort((a, b) => b.year - a.year);
    console.log(copyMovies);
  };
  const handleWorstRate = () => {
    copyMovies.sort((a, b) => a.rate - b.rate);
    setMoviesArray(copyMovies);
  };

  const handleBestRate = () => {
    copyMovies.sort((a, b) => b.rate - a.rate);
    setMoviesArray(copyMovies);
  };
  const handleAphabetical = () => {
    copyMovies.sort((a, b) => a.localeCompare(b));
    console.log(copyMovies);
  };
  const handleDescendingAlphabetical = () => {
    copyMovies.sort((a, b) => b.localeCompare(a));
    console.log(copyMovies);
  };

  return (
    <>
      <div className="flex items-center justify-center flex-wrap">
        <Button action={handleWorstRate} name="Rate ⬇️" />
        <Button action={handleBestRate} name="Rate ⬆️" />
        <Button action={handleDateAscending} name="Date  ⬆️" />
        <Button action={handleDateDescending} name="Date  ⬇️" />
      </div>
      <div className="flex items-center justify-center flex-wrap">
        <Button action={handleAphabetical} name="A-Z" />
        <Button action={handleDescendingAlphabetical} name="Z-A" />
      </div>
      <article>
        {moviesArray.map((movie, index) => (
          <MovieCard moviesObject={movie} key={index} />
        ))}
      </article>
    </>
  );
};

export default MovieList;
