import ButtonsContainer from "../components/ButtonsContainer";
import MovieList from "../components/MovieList";
import ScrollTo from "../components/ScrollTo";
import { useState } from "react";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <section className="container relative mx-auto my-0">
        <h1 className="text-center text-secundary text-4xl p-8 my-8 mx-4 shadow-2xl rounded-2xl bg-orange-50 border-double  border-8 border-primary">
          PROPS Movies
        </h1>
        <div className="flex-col md:flex-row md:items-center md:justify-center">
          <ButtonsContainer />
          <Search />
        </div>
        <ScrollTo top={true} />
        <MovieList />
        <ScrollTo top={false} />
      </section>
    </>
  );
};

export default Home;
