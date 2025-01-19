import { Link } from "react-router";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link to="/Labs">Labs</Link>
      </li>
      <li>
        <Link to="/Labs1">Lab 1</Link>
      </li>
      <li>
        <Link to="/Labs2">Lab 2</Link>
      </li>
      <li>
        <Link to="/Labs3">Lab 3</Link>
      </li>
      <li>
        <Link to="/Kambaz">Kambaz</Link>
      </li>
    </ul>
  );
}
