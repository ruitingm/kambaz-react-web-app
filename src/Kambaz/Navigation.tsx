import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox } from "react-icons/fa";
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px"></img>
      </a>
      <Link
        to="/Kambaz/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-white text-danger"
      >
        <FaRegCircleUser className="fs-1 text-danger" />
        <br />
        Account
      </Link>
      <Link
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <AiOutlineDashboard className="fs-1 text-danger"></AiOutlineDashboard>
        <br />
        Dashboard
      </Link>
      <Link
        to="/Kambaz/Courses/:cid"
        id="wd-course-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger"></LiaBookSolid>
        <br />
        Courses
      </Link>
      <Link
        to="/Kambaz/Calendar"
        id="wd-calendar-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <IoCalendarOutline className="fs-1 text-danger"></IoCalendarOutline>
        <br />
        Calendar
      </Link>
      <Link
        to="/Kambaz/Inbox"
        id="wd-inbox-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <FaInbox className="fs-1 text-danger"></FaInbox>
        <br />
        Inbox
      </Link>
      <Link
        to="/Labs"
        id="wd-labs-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <IoSettingsOutline className="fs-1 text-danger"></IoSettingsOutline>
        <br />
        Labs
      </Link>
    </div>
  );
}
