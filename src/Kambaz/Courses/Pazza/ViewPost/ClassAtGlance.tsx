import { BsCheckSquareFill, BsFillExclamationSquareFill } from "react-icons/bs";
import { FaUnlockAlt } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { Post } from "../postReducer";
import { Reply } from "../replyReducer";
export default function ClassAtGlance() {
  const { cid } = useParams();
  const { posts } = useSelector((state: any) => state.postsReducer) as {
    posts: Post[];
  };
  const { replies } = useSelector((state: any) => state.repliesReducer) as {
    replies: Reply[];
  };
  const totalPost = posts.length;
  const unreadPosts = posts.filter((p) => p.read === false).length;
  const unanweredPosts = posts.filter((p) => p.answered === false).length;
  const instructorResponses = posts.filter((p) => p.role === "FACULTY").length;
  const studentResponses = totalPost - instructorResponses;
  const totalReply = replies.length;
  return (
    <div id="wd-pazza-class-at-glance-screen">
      <div
        id="wd-pazza-class-at-glance-tile"
        className="wd-pazza-dark-grey mt-2 ms-3"
      >
        <div className="d-flex align-items-center">
          <FaUnlockAlt />
          <GoTriangleDown />
          <h4 className="m-0 ms-2">
            <b>Class at a Glance</b>
          </h4>
        </div>
        <div className="d-flex mt-0 me-3 wd-pazza-font-10pt justify-content-between">
          <div>
            <i>Updated 10 seconds ago.&nbsp;</i>
            <Link
              to={`/Kambaz/Courses/${cid}/Pazza`}
              className="wd-text-no-decor wd-pazza-blue"
            >
              Reload
            </Link>
          </div>
          <div className="wd-pazza-blue">Go to Live Q&A</div>
        </div>
      </div>
      <div
        id="wd-pazza-class-at-glance-info"
        className="bg-white m-1 rounded-1 d-flex pb-3"
      >
        <div className="col-6 ms-4 mt-4">
          <div className="d-flex mb-1">
            {unreadPosts === 0 && (
              <>
                <BsCheckSquareFill className="wd-pazza-green fs-4 me-2" />
                <b> no unread posts</b>
              </>
            )}
            {unreadPosts > 0 && (
              <>
                <BsFillExclamationSquareFill className="wd-pazza-red fs-4 me-2" />
                <b>{unreadPosts} unread posts</b>
              </>
            )}
          </div>
          <div className="d-flex mb-1">
            {unreadPosts === 0 && (
              <>
                <BsCheckSquareFill className="wd-pazza-green fs-4 me-2" />
                <b>no unanswered questions</b>
              </>
            )}
            {unreadPosts > 0 && (
              <>
                <BsFillExclamationSquareFill className="wd-pazza-red fs-4 me-2" />
                <b>{unanweredPosts} unanswered questions</b>
              </>
            )}
          </div>
          <div className="d-flex">
            <BsCheckSquareFill className="wd-pazza-green fs-4 me-2" />
            <b>no unanswered followups</b>
          </div>
        </div>
        <div className="col-6 mt-4">
          <tr>
            <td className="text-end pe-3 fw-bold">license status</td>
            <td>active instructor license</td>
          </tr>
          <tr>
            <td className="text-end pe-3 fw-bold">{totalPost}</td>
            <td>total posts</td>
          </tr>
          <tr>
            <td className="text-end pe-3 fw-bold">{totalPost + totalReply}</td>
            <td>total contributions</td>
          </tr>
          <tr>
            <td className="text-end pe-3 fw-bold">{instructorResponses}</td>
            <td>instructors' responses</td>
          </tr>
          <tr>
            <td className="text-end pe-3 fw-bold">{studentResponses}</td>
            <td>students' responses</td>
          </tr>
          <tr>
            <td className="text-end pe-3 fw-bold">1 hr 20 min</td>
            <td>avg. response time</td>
          </tr>
        </div>
      </div>
    </div>
  );
}
