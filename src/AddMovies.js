import { useState } from "react";
import { MovieList } from "./MovieList";

export function AddMovies({ intmovies }) {
  const [movies, setmovies] = useState(intmovies);
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  return (
    <>
      <div id="inputs">
        <input id="input" onChange={(e) => setname(e.target.value)} placeholder="Enter the Movie name" />
        <input id="input" onChange={(e) => setposter(e.target.value)} placeholder="Enter the Movie Poster" />
        <input id="input" onChange={(e) => setrating(e.target.value)} placeholder="Enter the Movie Rating" />
        <input id="input" onChange={(e) => setsummary(e.target.value)} placeholder="Enter the Movie Summary" />
        <button id="submit" onClick={() => setmovies([...movies, { name, poster, rating, summary }])}>Add Movie</button>
      </div>
      <div className="movieslist">
        <MovieList movies={movies} setmovies={setmovies}/>
      </div>
    </>
  );
}
