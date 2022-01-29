import * as React from "react";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
import {useHistory,useParams} from "react-router-dom";
import { useEffect } from "react";
import {API} from "./globaldata"
export function Editingmovie(){
    const { id } = useParams();
    const [moviedetail, setmoviedetail] = useState(null);
    const getmoviedetails = () => {
      fetch(`${API}/${id}`, {
        method: "GET",
      })
        .then((data) => data.json())
        .then((mv) => setmoviedetail(mv));
    };
    useEffect(getmoviedetails, []);
    return moviedetail ? <UpdatingMovie  movie = {moviedetail}/> : ""
}
 function UpdatingMovie({movie}) {
    const [name, setname] = useState(movie.name);
    const [poster, setposter] = useState(movie.poster);
    const [rating, setrating] = useState(movie.rating);
    const [summary, setsummary] = useState(movie.summary);
    const [trailer, settrailer] = useState(movie.trailer);
    const history = useHistory();
    console.log(movie)
    return (
      <>
        <div id="inputs">
        <TextField className="input" value={name}  onChange={(e) => setname(e.target.value)} id="standard-basic" label="Enter the Movie name" variant="standard" />
        <TextField className="input" value={poster} onChange={(e) => setposter(e.target.value)} id="standard-basic" label="Enter the Movie Poster" variant="standard" />
        <TextField className="input" value={rating} onChange={(e) => setrating(e.target.value)} id="standard-basic" label="Enter the Movie Rating" variant="standard" />
        <TextField className="input" value={summary} onChange={(e) => setsummary(e.target.value)} id="standard-basic" label="Enter the Movie Summary" variant="standard" />
        <TextField className="input" value={trailer} onChange={(e) => settrailer(e.target.value)} id="standard-basic" label="Enter the Movie trailer" variant="standard" />

        <Button  onClick={() =>{
        const newmovie = { name, poster, rating, summary,trailer }
        // setmovies([...movies, newmovie ]);
        fetch(`${API}/${movie.id}`,
        {method:"PUT", 
        body:JSON.stringify(newmovie), 
        headers:{"Content-Type":"application/json",},}).then(data=>data.json()).then(()=>history.push("/Movies"))}}
             variant="contained">Save</Button> 
        </div>
       
      </>
  );
}
