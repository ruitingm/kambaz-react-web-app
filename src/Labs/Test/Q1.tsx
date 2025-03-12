export default function Q1() {
  const u = [1, 9, 3, 8, 6, 5, 7, 4, 2];
  return (
    <div>
      <h2>Q1</h2>
      <ul>
        {u
          .filter((f) => f > 5)
          .map((s) => (
            <li>{s}</li>
          ))}
      </ul>
    </div>
  );
}
