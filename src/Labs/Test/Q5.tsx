import { useState } from "react";

export default function Q5() {
  const [x, h] = useState(true);
  return (
    <div>
      <h2>Q5</h2>
      <button
        onClick={() => {
          h(false);
        }}
      >
        R
      </button>
      <br />
      <input type="checkbox" checked={x} onChange={() => h(!x)} id="s" />
      <label htmlFor="s">Q</label>
      {x && <h1>P</h1>}
      {!x && <h1>K</h1>}
    </div>
  );
}
