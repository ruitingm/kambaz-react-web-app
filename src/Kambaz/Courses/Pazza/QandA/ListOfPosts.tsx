import { GiPin } from "react-icons/gi";
import { GoTriangleDown } from "react-icons/go";
import { BiSolidInfoSquare } from "react-icons/bi";
// import { CgNotes } from "react-icons/cg";
export default function ListOfPosts() {
  const dateInfo = [
    "PINNED",
    "TODAY",
    "YESTERDAY",
    "LAST WEEK",
    "LAST MONTH",
    "LAST YEAR",
  ];
  const role = ["student", "instructor"];
  const postType = ["note", "question"];
  //   const instructorLiked = [true, false];

  return (
    <div id="wd-pazza-lop">
      {dateInfo.map((date) => (
        <div>
          <div id="wd-pazza-lop-info" className="wd-pazza-lop-info-bar">
            <button
              id="wd-pazza-lop-dropdown"
              className="border-0 p-0 wd-pazza-dark-grey"
            >
              <GoTriangleDown className="align-self-center ms-1 me-1" />
            </button>
            {date.includes("PINNED") ? (
              <div className="flex-grow-1">
                {date} <GiPin className="float-end mt-1" />
              </div>
            ) : (
              <div>{date}</div>
            )}
          </div>
          <div
            id="wd-pazza-lop-content"
            className="container-fluid wd-pazza-lop-content-box ps-4"
          >
            <div id="wd-pazza-lop-subject-line" className="d-flex">
              <div
                id="wd-pazza-lop-subject"
                className="fw-bold text-dark wd-pazza-lop-content-subject col-10 pe-1"
              >
                Subject Subject Subject Subject Subject Subject Subject Subject
              </div>
              <div id="wd-pazza-lop-date" className="text-end col-2">
                1/3/25
              </div>
            </div>
            <div id="wd-pazza-lop-body" className="d-flex">
              <div
                id="wd-pazza-lop-body-text"
                className="wd-pazza-lop-content-body col-10"
              >
                Question about assignment 1 Kambaz application and lab 1.
                Questions about Kambaz application. Questions about final
                project Pazza final project Pazza application. Question about
                assignment 2 Kambaz application.
              </div>
              <div id="wd-pazza-content-mark" className="col-2 text-end">
                <BiSolidInfoSquare className="wd-pazza-yellow fs-4 rounded-1" />
              </div>
            </div>
            <div
              id="wd-pazza-lop-instructor-note"
              className="wd-pazza-green fw-bold pb-1"
            >
              <li>
                An {role[1]} thinks this is a good {postType[0]}
              </li>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
