export default function Q6({ d = { b: "c" } }) {
  const a = {
    b: "b",
    c: 1,
  };
  const e = {
    ...a,
    ...d,
  };
  return (
    <div>
      <h2>Q6</h2>
      <ul>
        <li>{e.c}</li>
        <li>{e.b}</li>
      </ul>
    </div>
  );
}
