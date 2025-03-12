import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <div className="col-2">
        <input
          defaultValue={profile.username}
          placeholder="username"
          className="wd-username form-control mb-1"
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        />
      </div>
      <div className="col-2">
        <input
          defaultValue={profile.password}
          placeholder="password"
          type="password"
          className="wd-password form-control mb-1"
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />
      </div>
      <div className="col-2">
        <input
          defaultValue={profile.firstName}
          placeholder="First Name"
          id="wd-firstname"
          className="wd-first-name form-control mb-1"
          onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })
          }
        />
      </div>
      <div className="col-2">
        <input
          defaultValue={profile.lastName}
          placeholder="Last Name"
          id="wd-lastname"
          className="wd-first-name form-control mb-1"
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        />
      </div>
      <div className="col-2">
        <input
          defaultValue={profile.dob}
          type="date"
          id="wd-dob"
          className="form-control mb-1"
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        />
      </div>
      <div className="col-2">
        <input
          defaultValue={profile.email}
          type="email"
          id="wd-email"
          className="form-control mb-1"
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
      </div>
      <div id="wd-role-dropdown" className="col-2 text-nowrap mb-1">
        <select
          id="wd-role"
          className="form-select"
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option selected value="FACULTY">
            Faculty
          </option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <div className="col-2 mb-2">
        <a
          href="#/Kambaz/Account/Signin"
          role="button"
          type="submit"
          className="btn btn-danger text-white text-center col-12 "
          onClick={signout}
        >
          Signout
        </a>
      </div>
    </div>
  );
}
