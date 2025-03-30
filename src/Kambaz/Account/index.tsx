import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import AccountNavigation from "./Navigation";
import { useSelector } from "react-redux";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-account-screen">
      <div>
        <div className="d-flex">
          <div className="d-none d-md-block">
            <AccountNavigation currentUser={currentUser} />
          </div>
          <div className="flex-fill ms-3">
            <Routes>
              <Route
                path="/"
                element={
                  <Navigate
                    to={
                      currentUser
                        ? "/Kambaz/Account/Profile"
                        : "/Kambaz/Account/Signin"
                    }
                  />
                }
              />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
