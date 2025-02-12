import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButton from "./AssignmentControlButton";
import AssignmentControls from "./AssignmentControls";
import { FaCaretDown } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import LessonControlButtons from "../Modules/LessonControlButtons";
export default function Assignments() {
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
            <li className="wd-assignment-list-item list-group-item p-0">
              <div className="container-fluid ms-0">
                <div className="row">
                  <div className="col-1 ps-2 pe-2 p-4 align-content-center d-none d-md-block">
                    <BsGripVertical className="fs-3" />
                    <CgNotes className="fs-3 text-success me-4" />
                  </div>
                  <div className="col-10 align-content-center p-0 pt-2 pb-2">
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/123"
                      className="wd-assignment-link text-black col-1"
                      style={{ textDecoration: "none" }}
                    >
                      <b>A1</b>
                    </a>
                    <p className="h6">
                      <span className="text-danger">Multiple Modules </span> |
                      <b> Not available until </b>
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
            <li className="wd-assignment-list-item list-group-item p-0">
              <div className="container-fluid ms-0">
                <div className="row">
                  <div className="col-1 ps-2 pe-2 p-4 align-content-center d-none d-md-block">
                    <BsGripVertical className="fs-3" />
                    <CgNotes className="fs-3 text-success me-4" />
                  </div>
                  <div className="col-10 align-content-center p-0 pt-2 pb-2">
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/123"
                      className="wd-assignment-link text-black col-1"
                      style={{ textDecoration: "none" }}
                    >
                      <b>A2</b>
                    </a>
                    <p className="h6">
                      <span className="text-danger">Multiple Modules </span> |
                      <b> Not available until </b>
                      May 7 at 12:00 am | <br />
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
            <li className="wd-assignment-list-item list-group-item p-0">
              <div className="container-fluid ms-0">
                <div className="row">
                  <div className="col-1 ps-2 pe-2 p-4 align-content-center d-none d-md-block">
                    <BsGripVertical className="fs-3" />
                    <CgNotes className="fs-3 text-success me-4" />
                  </div>
                  <div className="col-10 align-content-center p-0 pt-2 pb-2">
                    <a
                      href="#/Kambaz/Courses/1234/Assignments/123"
                      className="wd-assignment-link text-black col-1"
                      style={{ textDecoration: "none" }}
                    >
                      <b>A3</b>
                    </a>
                    <p className="h6">
                      <span className="text-danger">Multiple Modules </span> |
                      <b> Not available until </b>
                      May 9 at 12:00 am | <br />
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
          </ul>
        </li>
      </ul>
    </div>
  );
}
