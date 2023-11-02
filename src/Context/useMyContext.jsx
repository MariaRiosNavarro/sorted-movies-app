import { createContext, useContext, useState } from "react";
import movies from "../db/movies";
const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [moviesArray, setMoviesArray] = useState(movies);
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider
      value={{ moviesArray, setMoviesArray, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};
