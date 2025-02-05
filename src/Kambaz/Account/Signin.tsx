import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <div className="col-2">
        <input
          placeholder="username"
          className="wd-username form-control mb-1 "
        ></input>
      </div>
      <div className="col-2">
        <input
          placeholder="password"
          type="password"
          className="wd-password form-control mb-1"
        ></input>
      </div>
      <div className="col-2">
        <a
          href="#/Kambaz/Dashboard"
          role="button"
          type="submit"
          className="btn btn-primary btn-block text-center text-white col-12 mb-1"
        >
          Signup
        </a>
      </div>
      <div className="col-2">
        <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
          Sign up
        </Link>
      </div>
    </div>
  );
}
