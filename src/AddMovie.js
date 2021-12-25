import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MovieList } from "./MovieList";
import { useState } from "react";
import Button from '@mui/material/Button';

export function AddMovie({ intmovies }) {
  const [movies, setmovies] = useState(intmovies);
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  return (
    <>
      <div id="inputs">
      <TextField className="input" onChange={(e) => setname(e.target.value)} id="filled-basic" label="Enter the Movie name" variant="filled" />
      <TextField className="input" onChange={(e) => setposter(e.target.value)} id="filled-basic" label="Enter the Movie Poster" variant="filled" />
      <TextField className="input" onChange={(e) => setrating(e.target.value)} id="filled-basic" label="Enter the Movie Rating" variant="filled" />
      <TextField className="input" onChange={(e) => setsummary(e.target.value)} id="filled-basic" label="Enter the Movie Summary" variant="filled" />
      <Button  onClick={() =>
            setmovies([...movies, { name, poster, rating, summary }])
          } variant="contained">Add Movie</Button> 
      </div>
      <div className="movieslist">
        <MovieList movies={movies} setmovies={setmovies} />
      </div>
    </>
  );
}
