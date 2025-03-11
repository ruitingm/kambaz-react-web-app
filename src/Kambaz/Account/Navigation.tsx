import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kambaz/Account/${link}`}
          className="list-group-item active text-black border border-0"
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
