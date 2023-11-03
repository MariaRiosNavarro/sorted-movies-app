import movies from "../db/movies";
import RadioBtn from "./RadioBtn";

const RadioBtnContainer = () => {
  const allGenres = [
    ...new Set([].concat(...movies.map((movie) => movie.genre))),
  ];

  // !Other Version:
  // !const copyMovie = [...movie];
  // !const allGenres = [...new Set(copyMovie.flatMap(elt => elt.genre))];

  return (
    <section className="flex flex-wrap justify-center  items-center mx-auto my-0  md:w-[35rem] md:m-0 md:justify-center md:h-[100%]md:border md:border-red-700">
      {allGenres.map((genre, index) => (
        <RadioBtn value={genre} key={index}></RadioBtn>
      ))}
    </section>
  );
};

export default RadioBtnContainer;
