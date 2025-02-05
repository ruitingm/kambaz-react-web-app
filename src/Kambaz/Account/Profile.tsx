import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <div className="col-2">
        <input
          defaultValue="alice"
          placeholder="username"
          className="wd-username form-control mb-1"
        />
      </div>
      <div className="col-2">
        <input
          defaultValue="123"
          placeholder="password"
          type="password"
          className="wd-password form-control mb-1"
        />
      </div>
      <div className="col-2">
        <input
          defaultValue="Alice"
          placeholder="First Name"
          id="wd-firstname"
          className="wd-first-name form-control mb-1"
        />
      </div>
      <div className="col-2">
        <input
          defaultValue="Wonderland"
          placeholder="Last Name"
          id="wd-lastname"
          className="wd-first-name form-control mb-1"
        />
      </div>
      <div className="col-2">
        <input
          // defaultValue="2000-01-01"
          type="date"
          id="wd-dob"
          className="form-control mb-1"
        />
      </div>
      <div className="col-2">
        <input
          defaultValue="alice@wonderland"
          type="email"
          id="wd-email"
          className="form-control mb-1"
        />
      </div>
      <div id="wd-role-dropdown" className="col-2 text-nowrap mb-1">
        <select id="wd-role" className="form-select">
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
        >
          Signout
        </a>
      </div>
      <div>
        <Link to="/Kambaz/Account/Signin">Sign out</Link>
      </div>
    </div>
  );
}
