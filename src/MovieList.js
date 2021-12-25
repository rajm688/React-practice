import { Movie } from "./Movie";

export function MovieList({ movies }) {
  return (
    <>
      {movies.map(({ name, poster, rating, summary }) => (
        <Movie name={name} poster={poster} rating={rating} summary={summary} />
      ))}
    </>
  );
}
