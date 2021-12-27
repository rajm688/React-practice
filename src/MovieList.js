import { Movie } from "./Movie";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export function MovieList({ movies, setmovies }) {
  return (
    <>
      {movies.map(
        (
          { name, poster, rating, summary, id },
          index // map and filter can take a second argument (index)
        ) => (
          <Movie
            deletebutton={
              <IconButton
                onClick={() => {
                  fetch(
                    `https://61c9c7ff20ac1c0017ed8e43.mockapi.io/disney/${id}`,
                    { method: "DELETE" }
                  ).then((data) => data.json());
                }} // we can refactor the function by right clicking -> refactor -> convert to inner function
              >
                <DeleteIcon color="error" />
              </IconButton>
            }
            id={index}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
          />
        )
      )}
    </>
  );
}

// function deletefun(id) {
  //   return () => {
  //     const deleteindex = index;
  //     const remainingMovies = movies.filter(
  //       (mv, idx) => deleteindex !== idx
  //     );
  //     setmovies(remainingMovies);
  //   };
// }
