import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import { Counter } from "./Counter";

export function Movie({ name, poster, rating, summary, deletebutton }) {
  //conditional styling using ternary operator
  //trenary operators and maping should be contained inside the {}
  const [show, setshow] = useState(true);
  const styles = { color: rating > 4.5 ? "green" : "red" }; //css property names should be in calmel casing

  // const hidden = { display: !show ? "none" : "block" };
  return (
    <div className="movies">
      {/* style properties should be as objects and should be encolsed in flower braces */}
      <Card sx={{width:"250px" ,height:"560px", boxShadow:"5px 5px 5px gray" }}>
      <CardMedia
        component="img"
        height="294"
        image={poster}
        alt={name}
      />
      <div className="heading">
      <CardHeader title={name}/>
        <p style={styles}>
        <StarIcon style={{fontSize:"20px"}}/>
          {rating}
        </p>
      </div>
      <div id="buttons">
        <button onClick={() => setshow(!show)}>
          {show ? <ExpandLessIcon/> :<ExpandMoreIcon/>}
        </button>
        <Counter />

        {deletebutton}
      </div>
      {/* conditional renndering */}
      {show ? (
        <CardContent>
        <Typography style={{textAlign : "justify"}} variant="body2" color="text.secondary">
         {summary}
        </Typography>
      </CardContent>
      ) : (
        ""
      )}
      </Card>
    </div>
  );
}
