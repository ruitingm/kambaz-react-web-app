export default function Q11({ d = ["c"] }) {
  const a = ["b", 1];
  const e = [...a, ...d, ...a];
  return (
    <div>
      <h2>Q11</h2>
      <p>{e}</p>
    </div>
  );
}
