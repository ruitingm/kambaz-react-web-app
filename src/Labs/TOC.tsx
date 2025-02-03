import { Link, useLocation } from "react-router";

export default function TOC() {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/Labs" className="nav-link">
          Labs
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Labs/Lab1"
          className={`nav-link $(pathname.includes("Lab1") ? "active" : "")`}
        >
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Labs/Lab2"
          className={`nav-link $(pathname.inlcudes("Lab2") ? "active" : ":")`}
        >
          Lab 2
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Labs/Lab3"
          className={`nav-link $(pathname.inlcudes("Lab3") ? "active" : ":")`}
        >
          Lab 3
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Kambaz">Kambaz</Link>
      </li>
      <li className="nav-item">
        <a
          id="wd-github"
          href="https://github.com/ruitingm/cs5610-kambaz-react-web-app"
          className="nav-link"
        >
          My GitHub
        </a>
      </li>
    </ul>
  );
}
