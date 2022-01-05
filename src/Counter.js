import * as React from 'react';
import { useState } from "react";
import { IconButton } from '@mui/material';
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
    <IconButton  onClick={() => setlike(like + 1)}>
        
        <ThumbUpIcon />
        
      </IconButton>
    </Badge>
    </div>
    <div>
    <Badge badgeContent={dislike} color="warning">
    <IconButton onClick={dislikefun}>
        <ThumbDownAltIcon />
        
      </IconButton>
    </Badge>
    </div>
    </div>
  );
}
