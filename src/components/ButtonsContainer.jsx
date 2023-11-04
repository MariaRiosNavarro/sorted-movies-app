import { useMyContext } from "../Context/useMyContext";
import Button from "./Button";

const ButtonsContainer = () => {
  const { moviesArray, setMoviesArray } = useMyContext();

  const copyMovies = [...moviesArray];
  //to  not change the original Initial State, we need a copy for the filter options

  const handleDateAscending = () => {
    copyMovies.sort((a, b) => Number(a.year) - Number(b.year));
    setMoviesArray(copyMovies);
  };

  const handleDateDescending = () => {
    copyMovies.sort((a, b) => Number(b.year) - Number(a.year));
    setMoviesArray(copyMovies);
  };

  const handleWorstRate = () => {
    copyMovies.sort((a, b) => Number(a.rate) - Number(b.rate));
    setMoviesArray(copyMovies);
  };

  const handleBestRate = () => {
    copyMovies.sort((a, b) => Number(b.rate) - Number(a.rate));
    setMoviesArray(copyMovies);
  };
  const handleAphabetical = () => {
    copyMovies.sort((a, b) => a.title.localeCompare(b.title));
    setMoviesArray(copyMovies);
  };
  const handleDescendingAlphabetical = () => {
    copyMovies.sort((a, b) => b.title.localeCompare(a.title));
    setMoviesArray(copyMovies);
  };
  return (
    <>
      <div className="flex-col pl-4 items-center justify-center">
        <div className="flex items-center justify-center flex-wrap">
          <Button action={handleBestRate} name="Rate ⬆" />
          <Button action={handleDateAscending} name="Date  ⬆" />
          <Button action={handleAphabetical} name="A-Z" />
        </div>
        <div className="flex items-center justify-center flex-wrap">
          <Button action={handleWorstRate} name="Rate ⬇" />
          <Button action={handleDateDescending} name="Date  ⬇" />
          <Button action={handleDescendingAlphabetical} name="Z-A" />
        </div>
      </div>
    </>
  );
};

export default ButtonsContainer;
