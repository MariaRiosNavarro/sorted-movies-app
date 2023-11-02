import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <>
      <section className="container">
        <h1 className="text-center text-secundary text-4xl p-8 my-8 mx-4 shadow-2xl rounded-2xl bg-orange-50 border-double  border-8 border-primary">
          My Movie db
        </h1>
        <MovieList />
      </section>
    </>
  );
};

export default Home;
