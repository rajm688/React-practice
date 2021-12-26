import { useState } from "react";

export function ColorPicker() {
  const [color, setcolor] = useState(" ");
  const [colorlist, setcolorlist] = useState(["red", "blue", "green"]);
  const styles = { backgroundColor: color };
  return (
    <div>
      <input style={styles} onChange={(e) => setcolor(e.target.value)} />
      <button onClick={() => setcolorlist([...colorlist, color])}>
        Click Me
      </button>
      <div id="colorpallet">
        {colorlist.map((colors) => (
          <ColorPalette color={colors} />
        ))}
      </div>
    </div>
  );
}
function ColorPalette({ color }) {
  const styles = {
    backgroundColor: color,
    width: "100px",
    height: "100px",
    margin: "10px"
  };
  return <div style={styles}></div>;
}
