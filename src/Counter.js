import * as React from 'react';
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Badge from '@mui/material/Badge';
export function Counter() {
  const intstate = 0;
  const [like, setlike] = useState(intstate);
  const [dislike, setdislike] = useState(intstate);
  const dislikefun = (() => setdislike(dislike + 1)); // we can have named functions in react
  return (
    <div style={{display:"flex", gap: "10px"}}>
      <div><Badge badgeContent={like} color="success">
    <button  onClick={() => setlike(like + 1)}>
        
        <ThumbUpIcon color="success"/>
        
      </button>
    </Badge>
    </div>
    <div>
    <Badge badgeContent={dislike} color="warning">
    <button onClick={dislikefun}>
        <ThumbDownAltIcon color="warning"/>
        
      </button>
    </Badge>
    </div>
    </div>
  );
}
