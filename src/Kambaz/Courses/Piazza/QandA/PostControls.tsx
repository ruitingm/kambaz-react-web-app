import { CiSearch } from "react-icons/ci";
import { BsFileEarmarkPost } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

export default function PostButton() {
  const { cid } = useParams();
  return (
    <div id="wd-pazza-np" className="d-flex wd-pazza-np-bar">
      <div id="wd-pazza-np-button" className="align-content-center">
        <button
          id="wd-np-button"
          className="btn wd-pazza-np-button align-content-center ms-1"
        >
          <BsFileEarmarkPost className="fs-6 me-1 mb-1" />
          <Link
            to={`/Kambaz/Courses/${cid}/Pazza/NewPost`}
            className="text-white wd-text-no-decor text-nowrap"
          >
            New Post
          </Link>
        </button>
      </div>
      <div
        id="wd-pazza-np-spf"
        className="align-self-center wd-pazza-search-box d-flex flex-grow-1 me-1 "
      >
        <span className="align-content-center bg-white border border-1 border-end-0 rounded-start-2 ms-1 ps-1">
          <CiSearch className="fs-5 bg-white wd-pazza-dark-grey" />
        </span>
        <input
          type="text"
          className="form-control border border-start-0 rounded-start-0 align-self-center p-1"
          placeholder="Search or add a post..."
        ></input>
      </div>
    </div>
  );
}
