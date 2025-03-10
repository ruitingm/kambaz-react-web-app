import { useState } from "react";

export default function Q12() {
  const [a, b] = useState({ c: "q", d: 27 });

  const x = (e) => b({ ...a, c: e.target.value });
  const y = (s) => b({ ...a, d: parseInt(s.target.value) });

  return (
    <div>
      <h2>Q12</h2>
      <input id="r" defaultValue={a.c} onChange={x} />
      <input id="t" defaultValue={a.d} onChange={y} />
      {JSON.stringify(a, null, 2)}
    </div>
  );
}
