import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButton from "./AssignmentControlButton";
import AssignmentControls from "./AssignmentControls";
import { FaCaretDown } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-0 mb-0 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="fs-3" />
            <FaCaretDown className="me-3 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButton />
          </div>
          <ul className="wd-assignment-list list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-assignment-list-item list-group-item p-0">
                  <div className="container-fluid ms-0">
                    <div className="row">
                      <div className="col-1 ps-2 pe-1 p-4 align-content-center d-none d-md-block text-nowrap">
                        <BsGripVertical className="fs-3 me-0 pe-0" />
                        <CgNotes className="fs-3 text-success" />
                      </div>
                      <div className="col-10 align-content-center p-0 pt-2 pb-2">
                        <a
                          href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                          className="wd-assignment-link text-black col-1"
                          style={{ textDecoration: "none" }}
                        >
                          <b>{assignment.title}</b>
                        </a>
                        <p className="h6">
                          <span className="text-danger">Multiple Modules </span>
                          |<b> Not available until </b>
                          May 6 at 12:00 am | <br />
                          <b>Due </b>
                          May 13 at 11:59pm | 100 pts
                        </p>
                      </div>
                      <div className="col-1 align-content-center d-none d-md-block">
                        <LessonControlButtons />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
