import { createContext, useContext, useState } from "react";
import movies from "../db/movies";
const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // we make a copie of the original Array as Initial State,
  // so as not to have to take the data from the database constantly
  const [moviesArray, setMoviesArray] = useState([...movies]);

  return (
    <AppContext.Provider value={{ moviesArray, setMoviesArray }}>
      {children}
    </AppContext.Provider>
  );
};
