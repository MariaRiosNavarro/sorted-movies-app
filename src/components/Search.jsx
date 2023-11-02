import { useState } from "react";
import { useMyContext } from "../Context/useMyContext";
import movies from "../db/movies";

const Search = () => {
  const { setMoviesArray } = useMyContext();
  const [value, setValue] = useState("");
  const [option, setOption] = useState("title");

  const copyMovies = [...movies];

  const handleSubmit = (event) => {
    event.preventDefault();
    // New Array to display the search
    let newArray = copyMovies.filter((movie) => {
      //we check all keys of the array
      for (const key in movie) {
        //wenn the key ist the same as the selected option
        if (key === option) {
          //in case of Genre(array), we filter another time
          if (key === "genre") {
            let genre = movie.genre;
            let newGenreArray = genre.filter((item) => {
              let lowItem = item.toLowerCase();
              let lowerValue = value.toLowerCase();
              return lowItem.includes(lowerValue);
            });
            // Return true if any match is found and add to new array
            return newGenreArray.length > 0;
            // in case of the rest (strings), we search directly with .includes
          } else {
            let optionValue = movie[key];
            let lowerOption = optionValue.toLowerCase();
            let lowerValue = value.toLowerCase();
            return lowerOption.includes(lowerValue);
          }
        }
      }
      return false;
    });
    setMoviesArray(newArray);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center m-4 gap-4">
        <input
          onChange={(event) => setValue(event.target.value)}
          type="text"
          value={value}
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs border-2 "
          autoFocus
        />

        <select
          onChange={(event) => setOption(event.target.value)}
          value={option}
          className="select select-secondary w-full max-w-xs border-2"
        >
          <option value="title">Movie Title</option>
          <option value="director">Director</option>
          <option value="year">Year</option>
          <option value="genre">Genre</option>
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-ghost btn-circle border-4 border-primary bg-secondary hover:bg-accent hover:border-secondary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 stroke-primary hover:stroke-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};

export default Search;
