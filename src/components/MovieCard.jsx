import Star from "./Star";

const MovieCard = (props) => {
  let rateValue = Math.round(Number(props.moviesObject.rate));

  return (
    <>
      <article className="card font-semibold text-2xl gap-4 border-double  border-8 border-primary m-4 p-8 items-center justify-between shadow-2xl rounded-2xl bg-orange-50">
        <h3 className="card-title text-3xl text-center">
          {props.moviesObject.title}
        </h3>
        <span className="badge mx-1 badge-primary text-2xl p-4 w-auto h-auto">
          {props.moviesObject.year}
        </span>
        <h4 className="badge mx-1 badge-secondary text-2xl p-4 w-auto h-auto">
          {props.moviesObject.director}
        </h4>

        <p className="badge mx-1 badge-outline text-2xl p-4 w-auto h-auto">
          {props.moviesObject.duration}
        </p>
        <div className="flex flex-wrap items-center justify-center">
          {props.moviesObject.genre.map((oneGenre, index) => (
            <span
              className="badge m-1 badge-accent text-2xl p-4 w-auto h-auto"
              key={index}
            >
              {oneGenre}
            </span>
          ))}
        </div>
        <Star rate={rateValue} />
      </article>
    </>
  );
};

export default MovieCard;
