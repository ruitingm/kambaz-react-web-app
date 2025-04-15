import { CiUnlock } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { PiQuestionMarkFill } from "react-icons/pi";
import ActionButton from "./ButtonAction";
import { Post } from "../postReducer";
import { CgNotes } from "react-icons/cg";
export default function PostContent({ post }: { post: Post }) {
  return (
    <div
      id="wd-pazza-view-post"
      className="m-2 border border-1 rounded-1 bg-white"
    >
      <div
        id="wd-pazza-view-post-title "
        className="border border-bottom-1 wd-pazza-font-11pt align-content-center ps-2 pt-1 pb-1"
      >
        {post.type === "note" && (
          <CgNotes className="fs-5 wd-pazza-dark-grey me-1" />
        )}
        {post.type === "question" && (
          <PiQuestionMarkFill className="fs-4 wd-pazza-red me-1" />
        )}
        <b>question number @{post._id}</b>
        <IoMdLink className="fs-6 wd-pazza-dark-grey ms-1" />
        <FaStar className="wd-pazza-dark-grey ms-1" />
        <CiUnlock className="fs-6 wd-pazza-dark-grey ms-1" />
        <div
          id="wd-pazza-post-view"
          className="border border-1 rounded-1 float-end me-3 wd-pazza-bg-dark-grey ps-2 pe-2 text-white"
        >
          1 View
        </div>
      </div>
      <div id="wd-pazza-view-post-conctent" className="ps-4 pt-0 pb-3">
        <div className="wd-pazza-pos-upper-right">
          <ActionButton />
        </div>
        <div className="pt-4 pe-3">
          <h4 id="wd-pazza-question-title">
            <b>{post?.subject}</b>
          </h4>
          <div id="wd-pazza-question-content" className="mt-3">
            {post?.post}
          </div>
          <a
            key={post?.category}
            className="wd-pazza-blue wd-pazza-font-lucida wd-pazza-font-11pt wd-pazza-bg-light-blue rounded-1 wd-text-no-decor btn ps-2 pe-2 pt-1 pb-1 mt-4"
          >
            {post?.category}
          </a>
        </div>
      </div>
      <div
        id="wd-pazza-post-edit"
        className="border border-top-1 wd-pazza-bg-light-grey align-content-center"
      >
        <button
          id="wd-pazza-post-edit-btn"
          className="btn wd-pazza-bg-blue border border-1 rounded-1 text-white wd-pazza-font-lucida wd-pazza-border-dark-grey wd-pazza-font-11pt ps-2 pe-2 pt-1 pb-1 ms-4"
        >
          Edit
        </button>
        <span
          id="wd-pazza-good-post-click"
          className="wd-pazza-blue wd-pazza-font-11pt ms-3"
        >
          good question
        </span>
        <span className="wd-pazza-dark-grey wd-pazza-font-11pt ms-2">0</span>
        <span className="wd-pazza-dark-grey wd-pazza-font-10pt float-end pt-2 me-2">
          Updated 11 seconds ago by {post?.user}
        </span>
      </div>
    </div>
  );
}
