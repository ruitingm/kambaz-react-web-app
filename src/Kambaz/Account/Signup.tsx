import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <div className="col-2">
        <input
          placeholder="username"
          className="wd-username form-control mb-1"
        />
      </div>
      <div className="col-2">
        <input
          placeholder="password"
          type="password"
          className="wd-password form-control mb-1"
        />
      </div>
      <div className="col-2">
        <input
          placeholder="verify password"
          type="password"
          className="wd-password-verify form-control mb-1"
        />
      </div>
      <div className="col-2">
        <a
          href="#/Kambaz/Account/Profile"
          role="button"
          type="submit"
          className="btn btn-primary text-center text-white col-12 mb-1"
        >
          Signup
        </a>
      </div>
      <div className="col-2">
        <Link to="/Kambaz/Account/Signin">Sign in</Link>
      </div>
    </div>
  );
}
