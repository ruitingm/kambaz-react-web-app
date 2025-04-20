import { CiUnlock } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { PiQuestionMarkFill } from "react-icons/pi";
import ActionButton from "./ButtonAction";
import { Post, updatePost } from "../postReducer";
import { CgNotes } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import RTE from "../Post/RTE";
import * as postClient from "../client";
export default function PostContent({
  post,
  users,
  getTimeDiff,
}: {
  post: Post;
  users: any[];
  getTimeDiff: (postDate: string) => string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const getUserName = (userId: string) => {
    const user = users.find((u) => u._id === userId);
    if (user) {
      return user.firstName + " " + user.lastName;
    }
  };
  const canEdit =
    post.user === currentUser._id || currentUser.role === "FACULTY";
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };
  const [newPost, setNewPost] = useState("");
  const [newSubject, setNewSubject] = useState("");

  const dispatch = useDispatch();
  const updatePostHandler = async (post: Post) => {
    post = { ...post, post: newPost, subject: newSubject };
    await postClient.updatePost(post);
    dispatch(updatePost(post));
  };
  useEffect(() => {
    setEdit(false);
  }, [post]);
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
          {post.view.length} {post.view.length === 1 ? "View" : "Views"}
        </div>
      </div>
      <div id="wd-pazza-view-post-conctent" className="ps-4 pt-0 pb-3">
        <div className="wd-pazza-pos-upper-right">
          <ActionButton setEdit={setEdit} postId={post._id} />
        </div>
        <div className="pt-4 pe-3">
          {!edit && (
            <>
              <h4 id="wd-pazza-question-title">
                <b>{post?.subject}</b>
              </h4>
              <div id="wd-pazza-question-content" className="mt-3">
                {post?.post}
              </div>
            </>
          )}
          {edit && (
            <div className="wd-pazza-font-10pt ">
              <div>
                <label
                  htmlFor="wd-pazza-edit-post-summary"
                  className="wd-pazza-dark-grey form-control-label text-nowrap ms-1 me-1 "
                >
                  <b>SUMMARY</b>
                </label>
                <input
                  id="wd-pazza-edit-post-summary"
                  type="text"
                  className="form-control wd-pazza-font-10pt me-2"
                  defaultValue={post.subject}
                  maxLength={100}
                  onChange={(e) => setNewSubject(e.target.value)}
                />
              </div>
              <div className="wd-pazza-font-10pt mt-3">
                <label
                  htmlFor="wd-pazza-edit-post-detail"
                  className="wd-pazza-dark-grey form-control-label text-nowrap ms-1 me-1 "
                >
                  <b>DETAILS</b>
                </label>
                <div
                  id="wd-pazza-edit-post-detail"
                  className="wd-pazza-rte-size"
                >
                  <RTE setPost={setNewPost} defaultValue={post.post} />
                </div>
              </div>
            </div>
          )}
          {!edit && (
            <div id="wd-pazza-post-folders" className="justify-content-between">
              {post.category.map((folder) => (
                <button
                  key={folder}
                  className="wd-pazza-blue wd-pazza-font-lucida  wd-pazza-bg-light-blue rounded-1 wd-text-no-decor btn p-1 ps-2 pe-2 mt-4 me-2 wd-pazza-font-10pt  "
                >
                  {folder}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        id="wd-pazza-post-edit"
        className="border border-top-1 wd-pazza-bg-light-grey align-content-center"
      >
        {!canEdit && (
          <>
            <span
              id="wd-pazza-good-post-click"
              className="wd-pazza-blue wd-pazza-font-11pt ms-3"
            >
              good question
            </span>
            <span className="wd-pazza-dark-grey wd-pazza-font-11pt ms-2">
              0
            </span>
            <span className="wd-pazza-dark-grey wd-pazza-font-10pt float-end pt-2 me-2">
              Updated {getTimeDiff(post.date)} by {getUserName(post.user)}
            </span>
          </>
        )}
        {edit && (
          <>
            <button
              id="wd-pazza-save-edit-button"
              className="btn wd-pazza-bg-blue wd-pazza-font-10pt text-white wd-pazza-fit-content-btn float-start me-2 ms-4"
              onClick={() => updatePostHandler(post)}
            >
              Save Edit
            </button>
            <button
              className="btn wd-pazza-bg-dark-grey wd-pazza-font-10pt wd-pazza-fit-content-btn text-white float-start"
              onClick={toggleEdit}
            >
              Cancel
            </button>
          </>
        )}
        {canEdit && !edit && (
          <>
            <button
              id="wd-pazza-post-edit-btn"
              className="btn wd-pazza-bg-blue border border-1 rounded-1 text-white wd-pazza-font-lucida wd-pazza-border-dark-grey wd-pazza-font-11pt ps-2 pe-2 pt-1 pb-1 ms-4"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <span
              id="wd-pazza-good-post-click"
              className="wd-pazza-blue wd-pazza-font-11pt ms-3"
            >
              good question
            </span>
            <span className="wd-pazza-dark-grey wd-pazza-font-11pt ms-2">
              0
            </span>
            <span className="wd-pazza-dark-grey wd-pazza-font-10pt float-end pt-2 me-2">
              Updated {getTimeDiff(post.date)} by {getUserName(post.user)}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
