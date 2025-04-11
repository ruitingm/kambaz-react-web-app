import { GoTriangleDown } from "react-icons/go";
import { BiSolidInfoSquare } from "react-icons/bi";
import { Link, Route, Routes, useParams } from "react-router";
import InstructorLogo from "./InstructorLogo";
import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import PrivateLogo from "./PrivateLogo";
import posts from "../../../Database/pazzaposts.json";
import PostContent from "../ViewPost/PostContent";
export default function ListOfPosts() {
  const { cid } = useParams();
  const dateInfo = [
    "TODAY",
    "YESTERDAY",
    "LAST WEEK",
    "LAST MONTH",
    "LAST YEAR",
  ];
  const postDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year.slice(2)}`;
  };
  const [instructorLiked, setInstructorLiked] = useState(false);
  const toggleInstructorLiked = () => {
    setInstructorLiked(!instructorLiked);
  };
  const coursePosts = posts.filter((post) => post.course === cid);
  return (
    <div id="wd-pazza-lop">
      {coursePosts.map((coursePost) => (
        <div>
          <div id="wd-pazza-lop-info" className="wd-pazza-lop-info-bar">
            <button
              id="wd-pazza-lop-dropdown"
              className="border-0 p-0 wd-pazza-dark-grey"
            >
              <GoTriangleDown className="align-self-center ms-1 me-1" />
            </button>
            {dateInfo[0]}
          </div>
          <Link
            to={`/Kambaz/Courses/${cid}/Pazza/QandA/Post/${coursePost._id}`}
            className="wd-text-no-decor"
          >
            <div
              id="wd-pazza-lop-content"
              className="container-fluid wd-pazza-lop-content-box ps-4"
            >
              <div id="wd-pazza-lop-subject-line" className="d-flex pt-1">
                <div
                  id="wd-pazza-lop-subject"
                  className="fw-bold text-dark wd-pazza-lop-content-subject col-10 pe-1"
                >
                  {coursePost.subject}
                </div>
                <div id="wd-pazza-lop-date" className="text-end col-2">
                  {postDate(coursePost.date)}
                </div>
              </div>
              <div id="wd-pazza-lop-body" className="d-flex pb-1">
                <div
                  id="wd-pazza-lop-body-text"
                  className="wd-pazza-lop-content-body col-10"
                >
                  {coursePost.private && <PrivateLogo />}
                  {coursePost.role === "FACULTY" && <InstructorLogo />}
                  <p>{coursePost.post}</p>
                </div>
                <div id="wd-pazza-content-mark" className="col-2 text-end">
                  {coursePost.type === "note" && (
                    <CgNotes className="wd-pazza-dark-grey fs-5" />
                  )}
                  {coursePost.type === "question" && (
                    <BiSolidInfoSquare className="wd-pazza-yellow fs-4 rounded-1" />
                  )}
                </div>
              </div>
              {coursePost.liked && (
                <div
                  id="wd-pazza-lop-instructor-note"
                  className="wd-pazza-green fw-bold pb-1 wd-pazza-font-8pt"
                >
                  <li>An instructor thinks this is a good {coursePost.type}</li>
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
