import Star from "./Star";

const MovieCard = (props) => {
  let rateValue = Math.round(Number(props.moviesObject.rate));

  return (
    <>
      <article>
        <h3>{props.moviesObject.title}</h3>
        <span>{props.moviesObject.year}</span>
        <h4>{props.moviesObject.director}</h4>

        <p>{props.moviesObject.duration}</p>
        <div>
          {props.moviesObject.genre.map((oneGenre, index) => (
            <span key={index}>{oneGenre}</span>
          ))}
        </div>
        <Star rate={rateValue} />
      </article>
    </>
  );
};

export default MovieCard;
