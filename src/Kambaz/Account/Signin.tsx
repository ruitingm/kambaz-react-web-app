import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useState } from "react";
import * as db from "../Database";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <div className="col-2">
        <input
          defaultValue={credentials.username}
          className="wd-username form-control mb-1 "
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        ></input>
      </div>
      <div className="col-2">
        <input
          type="password"
          defaultValue={credentials.passord}
          className="wd-password form-control mb-1"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        ></input>
      </div>
      <div className="col-2">
        <a
          href="#/Kambaz/Dashboard"
          role="button"
          type="submit"
          className="btn btn-primary btn-block text-center text-white col-12 mb-1"
          onClick={signin}
        >
          Sign In
        </a>
      </div>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
