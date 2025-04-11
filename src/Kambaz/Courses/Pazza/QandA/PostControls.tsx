import { CiSearch } from "react-icons/ci";
import { BsFileEarmarkPost } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

export default function PostButton() {
  const { cid } = useParams();
  return (
    <div id="wd-pazza-np" className="d-flex wd-pazza-np-bar">
      <div id="wd-pazza-np-button" className="align-content-center">
        <Link
          id="wd-np-button"
          type="button"
          className="btn wd-pazza-np-button ms-1 d-flex pt-2"
          to={`/Kambaz/Courses/${cid}/Pazza/QandA/NewPost`}
        >
          <BsFileEarmarkPost className="me-1 mb-1 align-self-center" />
          <span className="wd-pazza-font-9pt text-nowrap">New Post</span>
        </Link>
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
          className="form-control border border-start-0 rounded-start-0 align-self-center p-1 wd-pazza-font-10pt h-100"
          placeholder="Search or add a post..."
        ></input>
      </div>
    </div>
  );
}
