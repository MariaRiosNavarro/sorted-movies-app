import movies from "../db/movies";
import { genres } from "../db/genres";
import { useEffect, useState } from "react";
import CheckboxBtn from "./CheckboxBtn";
import { useMyContext } from "../Context/useMyContext";

const CheckboxBtnContainer = () => {
  const { setMoviesArray } = useMyContext();
  const [updatedCheckedGenres, setUpdatedCheckedGenres] = useState([]);

  // useEffect(() => {
  //   console.log(updatedCheckedGenres);
  // }, [updatedCheckedGenres]);

  //I use directly the movies of data base and not from context,
  //to avoid the new state every time, i need the complete Array everytime

  const copyMovies = [...movies];

  const allGenres = [
    ...new Set([].concat(...copyMovies.map((movie) => movie.genre))),
  ];

  // Other Version:
  // const allGenres = [...new Set(copyMovies.flatMap(elt => elt.genre))];

  //!Function to find all genres inclusive :
  //!for example items with "crime" and "horror"

  const filterByGenreALL = (genresToFilter, arrayToFilter) => {
    // Use the filter method to create a new array with filtered items
    return arrayToFilter.filter((movie) => {
      // Check if the movie has a "genre" property
      if (movie.hasOwnProperty("genre")) {
        // Get the array of genre items for the current movie
        let genreItemsInArray = movie.genre;
        // Use the `every` method to check if every genre in `genresToFilter` is in the movie's genre array
        const allGenresMatch = genresToFilter.every((genre) =>
          genreItemsInArray.includes(genre)
        );
        // Return true only if all genres in `genresToFilter` are present in the movie's genre array
        return allGenresMatch;
      }
      // If no "genre" property is found, return false to exclude the movie from the filtered results
      return false;
    });
  };

  const handleCheckbox = (e) => {
    // 1.- Update the checked Genres Array
    const genreItem = e.target.value;
    const isChecked = e.target.checked;
    let update;
    // update to add
    if (isChecked) {
      update = [...updatedCheckedGenres];
      update.push(genreItem);
      //update to remove
    } else {
      update = updatedCheckedGenres.filter((item) => item !== genreItem);
    }
    setUpdatedCheckedGenres(update);

    //2.-Filter the movies based on the updated updatedCheckedGenres the copy of moviesArray
    const newFilteredArray = filterByGenreALL(update, copyMovies);
    setMoviesArray(newFilteredArray);
  };

  return (
    <section className="flex flex-wrap justify-center  items-center mx-auto my-0  md:w-[35rem] md:m-0 md:justify-center md:h-[100%] ">
      {allGenres.map((genre, index) => (
        <CheckboxBtn
          key={index}
          genre={genre}
          onClick={handleCheckbox}
        ></CheckboxBtn>
      ))}
    </section>
  );
};

export default CheckboxBtnContainer;
