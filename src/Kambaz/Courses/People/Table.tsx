import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";
export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user: any) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === user._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap align-middle">
                  <FaUserCircle className="text-secondary me-2 fs-1" />
                  <span className="wd-first-name align-middle">
                    {user.firstName}&nbsp;
                  </span>
                  <span className="wd-last-name align-middle">
                    {user.lastName}
                  </span>
                </td>
                <td className="wd-login-id align-middle">{user.loginId}</td>
                <td className="wd-section align-middle">{user.section}</td>
                <td className="wd-role align-middle">{user.role}</td>
                <td className="wd-last-activity align-middle">
                  {user.lastActivity}
                </td>
                <td className="wd-total-activity align-middle">
                  {user.totalActivity}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
