import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as client from "../../Account/client";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FormControl } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";

export default function PeopleDetails() {
  const { uid } = useParams();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, role, email };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    navigate(-1);
  };
  const navigate = useNavigate();
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUsersById(uid);
    setUser(user);
  };
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;
  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={() => navigate(-1)}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 wd-activity-profile-size" />
      </div>
      <hr />
      <div className="fs-4 wd-name">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-2 mt-2 wd-edit"
          />
        )}
        {editing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-2 mt-2 me-2 wd-save "
          />
        )}
        {!editing && (
          <div className="wd-name text-danger" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {user && editing && (
          <FormControl
            className="w-50 wd-edit-name mb-2"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>
      <div>
        {!editing && (
          <div
            className="wd-role p-0 pb-1 ps-2"
            onClick={() => setEditing(true)}
          >
            <b>Role:&nbsp;</b>
            {user.role}
          </div>
        )}
        {user && editing && (
          <>
            <b>Role:&nbsp;</b>
            <FormControl
              className="w-50 wd-edit-role mt-2 mb-2"
              defaultValue={`${user.role} `}
              onChange={(e) => setRole(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveUser();
                }
              }}
            />
          </>
        )}
      </div>
      <div>
        {!editing && (
          <div
            className="wd-email p-0 pb-1 ps-2"
            onClick={() => setEditing(true)}
          >
            <b>Email:&nbsp;</b>
            {user.email}
          </div>
        )}
        {user && editing && (
          <>
            <b>Email:&nbsp;</b>
            <FormControl
              className="w-50 wd-edit-email mb-2 mt-2"
              defaultValue={`${user.email} `}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveUser();
                }
              }}
            />
          </>
        )}
      </div>
      <div className="p-0 pb-1">
        <b>Login ID:</b>
        <span className="wd-login-id">{user.loginId}</span>
      </div>
      <div className="p-0 pb-1">
        <b>Section:</b>
        <span className="wd-section">{user.section}</span>
      </div>
      <div className="p-0 pb-1">
        <b>Total Activity:</b>
        <span className="wd-total-activity">{user.totalActivity}</span>
      </div>
      <hr />
      <button
        onClick={() => deleteUser(uid)}
        className="btn btn-danger float-end wd-delete"
      >
        Delete
      </button>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary float-end me-2 wd-cancel"
      >
        Cancel
      </button>
    </div>
  );
}
