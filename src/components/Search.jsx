import { useState } from "react";
import { useMyContext } from "../Context/useMyContext";
import movies from "../db/movies";

const Search = () => {
  const { moviesArray, setMoviesArray } = useMyContext();
  const { search, setSearch } = useMyContext();
  const [value, setValue] = useState("");
  const [option, setOption] = useState("title");

  const copyMovies = [...movies];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search Query:", value);
    console.log("Search Option:", option);
    console.log("type", typeof value);
    let newArray = copyMovies.filter((movie) => {
      for (const key in movie) {
        if (key === option) {
          let optionValue = movie[key];
          return optionValue.includes(value);
        }
      }
      return false;
    });
    console.log("Filtered Array:", newArray);
    setMoviesArray(newArray);
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
