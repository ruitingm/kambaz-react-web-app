export default function Q10() {
  const q = [
    { a: 1, w: "g" },
    { a: 2, w: "t" },
    { a: 1, w: "j" },
  ];
  return (
    <div>
      <h2>Q10</h2>
      <ul>
        {q.map((s, d) => (
          <li key={d}>{s.w}</li>
        ))}
      </ul>
    </div>
  );
}
