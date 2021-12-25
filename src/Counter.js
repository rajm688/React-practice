import { useState } from "react";

export function Counter() {
  const intstate = 0;
  const [like, setlike] = useState(intstate);
  const [dislike, setdislike] = useState(intstate);

  return (
    <div>
      <button onClick={() => setlike(like + 1)}>
        <span role="img" aria-label="thumbsup">
          👍
        </span>{" "}
        {like}
      </button>
      <button onClick={() => setdislike(dislike + 1)}>
        <span role="img" aria-label="thumbsdown">
          👎
        </span>{" "}
        {dislike}
      </button>
    </div>
  );
}
