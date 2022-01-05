import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MovieList } from "./MovieList";
import { useState } from "react";
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
export function AddMovie({ movies ,setmovies }) {
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const history = useHistory();
  return (
    <>
      <div id="inputs">
      <TextField className="input" onChange={(e) => setname(e.target.value)} id="filled-basic" label="Enter the Movie name" variant="filled" />
      <TextField className="input" onChange={(e) => setposter(e.target.value)} id="filled-basic" label="Enter the Movie Poster" variant="filled" />
      <TextField className="input" onChange={(e) => setrating(e.target.value)} id="filled-basic" label="Enter the Movie Rating" variant="filled" />
      <TextField className="input" onChange={(e) => setsummary(e.target.value)} id="filled-basic" label="Enter the Movie Summary" variant="filled" />
      <Button  onClick={() =>{
    const newmovie = { name, poster, rating, summary }
    // setmovies([...movies, newmovie ]);
    fetch("https://61c9c7ff20ac1c0017ed8e43.mockapi.io/disney",
    {method:"POST", 
    body:JSON.stringify(newmovie), 
    headers:{"Content-Type":"application/json",},}).then(data=>data.json()).then(()=>history.push("/Movies"))}}
           variant="contained">Add Movie</Button> 
      </div>
     
    </>
  );
}
export function MoviesList({movies,setmovies}){
  return(
    <div className="movieslist">
    <MovieList movies={movies} setmovies={setmovies} />
  </div>
  )
}