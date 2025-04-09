// import { useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// export default function AccountNavigation() {
//   const currentUser = useSelector((state: any) => state.accountReducer);
//   const links = currentUser ? ["Profile", "Users"] : ["Signin", "Signup"];
//   const { pathname } = useLocation();
//   const active = (path: string) => (pathname.includes(path) ? "active" : "");
//   return (
//     <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//       {links.map((link) => (
//         <Link
//           key={link}
//           to={`/Kambaz/Account/${link}`}
//           className="list-group-item active text-black border border-0"
//         >
//           {link}
//         </Link>
//       ))}
//       {currentUser && currentUser.role === "ADMIN" && (
//         <Link
//           to={`/Kambaz/Account/Users`}
//           className={`list-group-item ${active("Users")}`}
//         >
//           Users
//         </Link>
//       )}
//     </div>
//   );
// }
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="list-group wd">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kambaz/Account/${link}`}
          className={`list-group-item ${active(link)}`}
        >
          {link}
        </Link>
      ))}

      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kambaz/Account/Users`}
          className={`list-group-item ${active("Users")}`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
