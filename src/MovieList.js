import { Movie } from "./Movie";

export function MovieList({ movies ,setmovies }) {
  return (
    <>
      {movies.map(({ name, poster, rating, summary },index) => ( // map and filter can take a second argument (index)
        <Movie deletebutton={<button onClick={()=>{
            const deleteindex = index;
            const remainingMovies = movies.filter((mv,idx)=>deleteindex != idx)
            setmovies(remainingMovies)}}>❌</button>} name={name} poster={poster} rating={rating} summary={summary} />
      ))}
    </>
  );
}
