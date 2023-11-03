import movies from "../db/movies";
import { genres } from "../db/genres";
import { useEffect, useState } from "react";
import CheckboxBtn from "./CheckboxBtn";
import { useMyContext } from "../Context/useMyContext";

const CheckboxBtnContainer = () => {
  const { moviesArray } = useMyContext();
  const [checkedGenres, setCheckedGenres] = useState([]);
  const [updatedCheckedGenres, setUpdatedCheckedGenres] = useState([]);

  useEffect(() => {
    console.log(updatedCheckedGenres);
  }, [updatedCheckedGenres]);

  const copyMovies = [...movies];

  const allGenres = [
    ...new Set([].concat(...copyMovies.map((movie) => movie.genre))),
  ];

  // Other Version:
  // const copyMovie = [...movie];
  // const allGenres = [...new Set(copyMovie.flatMap(elt => elt.genre))];

  const handleCheckbox = (e) => {
    const genre = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setUpdatedCheckedGenres(genre);
      console.log(updatedCheckedGenres);
    } //only one value now
  };

  return (
    <section className="flex flex-wrap justify-center  items-center mx-auto my-0  md:w-[35rem] md:m-0 md:justify-center md:h-[100%]md:border md:border-red-700">
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

//   const handleCheckbox = (e) => {
//     const genre = e.target.value;
//     const isChecked = e.target.checked;

//     if (isChecked) {
//       setCheckedGenres((prevCheckedGenres) => [...prevCheckedGenres, genre]);
//     } else {
//       setCheckedGenres((prevCheckedGenres) =>
//         prevCheckedGenres.filter((item) => item !== genre)
//       );
//     }
//   };

//   return (
//     <section className="flex flex-wrap justify-center items-center mx-auto my-0 md:w-[35rem] md:m-0 md:justify-center md:h-[100%] md:border md:border-red-700">
