import { useMyContext } from "../Context/useMyContext";
import Button from "./Button";

const ButtonsContainer = () => {
  const { moviesArray, setMoviesArray } = useMyContext();

  const copyMovies = [...moviesArray];

  const handleDateAscending = () => {
    copyMovies.sort((a, b) => a.year - b.year);
    setMoviesArray(copyMovies);
  };

  const handleDateDescending = () => {
    copyMovies.sort((a, b) => b.year - a.year);
    setMoviesArray(copyMovies);
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
    copyMovies.sort((a, b) => a.title.localeCompare(b.title));
    setMoviesArray(copyMovies);
  };
  const handleDescendingAlphabetical = () => {
    copyMovies.sort((a, b) => b.title.localeCompare(a.title));
    setMoviesArray(copyMovies);
  };
  return (
    <>
      <div className="flex items-center justify-center flex-wrap">
        <Button action={handleBestRate} name="Rate ⬆" />
        <Button action={handleWorstRate} name="Rate ⬇" />
        <Button action={handleDateAscending} name="Date  ⬆" />
        <Button action={handleDateDescending} name="Date  ⬇" />
      </div>
      <div className="flex items-center justify-center flex-wrap">
        <Button action={handleAphabetical} name="A-Z" />
        <Button action={handleDescendingAlphabetical} name="Z-A" />
      </div>
    </>
  );
};

export default ButtonsContainer;
