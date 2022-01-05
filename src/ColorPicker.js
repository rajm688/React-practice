import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export function ColorPicker() {
  const [color, setcolor] = useState(" ");
  const [colorlist, setcolorlist] = useState(["red", "blue", "green"]);
  const styles = { backgroundColor: color };
  return (
    <div>
      <div className="color">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          style={styles}
          onChange={(e) => setcolor(e.target.value)}
        ></TextField>
        <Button
          onClick={() => setcolorlist([...colorlist, color])}
          variant="contained"
        >
          Click Me
        </Button>
      </div>
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
    margin: "10px",
  };
  return <div style={styles}></div>;
}
