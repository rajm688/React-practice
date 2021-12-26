import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
export function MovieList({ movies, setmovies }) {
  return (
    <>
      {movies.map((
        { name, poster, rating, summary },
        index // map and filter can take a second argument (index)
      ) => (
        <Movie
          deletebutton={
            <button
              onClick={deletefun(index)}  // we can refactor the function by right clicking -> refactor -> convert to inner function
              
            >
              <DeleteIcon color="error"/>
            </button>
          }
          id = {index}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
        />
      ))}
    </>
  );

  function deletefun(index) {
    return () => {
      const deleteindex = index;
      const remainingMovies = movies.filter(
        (mv, idx) => deleteindex !== idx
      );
      setmovies(remainingMovies);
    };
  }
}
