import { Link } from "react-router-dom";
export default function AccountNavigation({
  currentUser,
}: {
  currentUser: string;
}) {
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kambaz/Account/${link}`}
          className="list-group-item active text-black border border-0"
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
