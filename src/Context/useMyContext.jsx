import { createContext, useContext, useState } from "react";
import movies from "../db/movies";
const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [moviesArray, setMoviesArray] = useState(movies);

  return (
    <AppContext.Provider value={{ moviesArray, setMoviesArray }}>
      {children}
    </AppContext.Provider>
  );
};
