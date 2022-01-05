import * as React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import {useEffect,useState} from "react"
export function Moviedetails() {
    const { id } = useParams();
  const [moviedetail, setmoviedetail] = useState([]);
  const getmoviedetails = () => {
    fetch(`https://61c9c7ff20ac1c0017ed8e43.mockapi.io/disney/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setmoviedetail(mv));
  };
  useEffect(getmoviedetails, []);
  const history = useHistory();
console.log(moviedetail)
  return (
    <div>
      <h1>Movie name : {moviedetail.name}</h1>
      <iframe
        width="588"
        height="331"
        src={moviedetail.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p style={{ fontSize: "20px" }}>
        <strong>Summary:</strong>
        {moviedetail.summary}
      </p>
      <Button
        variant="contained"
        color="warning"
        onClick={() => history.goBack()}
      >
        Go back
      </Button>
    </div>
  );
}
