import { Movie } from "./Movie";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";  
import EditIcon from '@mui/icons-material/Edit';
import { API } from "./globaldata";
export function MovieList() {
const [movielist, setmovies] = useState([]);
const history = useHistory()
  const getmovielist = () => {
    fetch(API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setmovies(mvs));
  };
  useEffect(getmovielist, []);
  return (
    <>
      {movielist.map(
        (
          { name, poster, rating, summary, id },
          index // map and filter can take a second argument (index)
        ) => (
          <Movie
          key={id}
            deletebutton={
              <IconButton
                onClick={() => {
                  fetch(
                    `${API}/${id}`,
                    { method: "DELETE" }
                  )
                    .then((data) => data.json())
                    .then(() => getmovielist());
                }} // we can refactor the function by right clicking -> refactor -> convert to inner function
              >
                <DeleteIcon color="error" />
              </IconButton>
            }
            editbutton={<IconButton
              onClick={()=>history.push(`Movie/edit/${id}`)} // we can refactor the function by right clicking -> refactor -> convert to inner function
            >
              <EditIcon color="info" />
            </IconButton>}

            id={id}
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
