import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <div className="col-2">
        <input
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="wd-username form-control mb-2"
          placeholder="username"
        />
      </div>
      <div className="col-2">
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          className="wd-password form-control mb-2"
          placeholder="password"
        />
      </div>
      <div className="col-2">
        <button
          onClick={signup}
          className="wd-signup-btn btn btn-primary w-100"
        >
          Sign up
        </button>
      </div>
      <div className="col-2">
        <Link to="/Kambaz/Account/Signin" className="wd-signin-link">
          Sign in
        </Link>
      </div>
    </div>
  );
}
