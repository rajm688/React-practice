import { useState } from "react";
import { Counter } from "./Counter";

export function Movie({ name, poster, rating, summary }) {
  //conditional styling using ternary operator
  //trenary operators and maping should be contained inside the {}
  const [show, setshow] = useState(true);
  const styles = { color: rating > 4.5 ? "green" : "red" }; //css property names should be in calmel casing

  // const hidden = { display: !show ? "none" : "block" };
  return (
    <div className="movies">
      {/* style properties should be as objects and should be encolsed in flower braces */}
      <img src={poster} alt={name} />
      <div className="heading">
        <h3>{name}</h3>
        <button className="likes" onClick={() => setshow(!show)}>
          <span role="img" aria-label="down">
            ⏬
          </span>
        </button>
        <p style={styles}>
          <span role="img" aria-label="star">
            ⭐
          </span>
          {rating}
        </p>
        <Counter />
      </div>
      {/* conditional renndering */}
      {show ? (
        <p>
          <strong>Summary:</strong>
          {summary}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
