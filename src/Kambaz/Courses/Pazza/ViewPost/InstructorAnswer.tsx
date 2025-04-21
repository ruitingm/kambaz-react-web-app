import ActionButton from "./ButtonAction";
import { Post } from "../postReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BiSolidInfoSquare } from "react-icons/bi";
import ReactQuill from "react-quill";
import * as repliesClient from "../client";
import { Reply, updateReply } from "../replyReducer";
export default function InstructorAnswer({
  post,
  users,
  getTimeDiff,
  stripHtml,
}: {
  post: Post;
  users: any[];
  getTimeDiff: (postDate: string) => string;
  stripHtml: (html: string) => string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { replies } = useSelector((state: any) => state.repliesReducer);
  const instructorReplies = replies.filter((r: Reply) => r.role === "FACULTY");
  const getUser = (userId: string) => {
    const user = users.find((u) => u._id === userId);
    if (user) {
      return user;
    }
  };
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };
  const [newAnswer, setNewAnswer] = useState("");
  const dispatch = useDispatch();
  const updateReplyHandler = async (newContent: string, reply: Reply) => {
    reply = { ...reply, reply: stripHtml(newContent) };
    await repliesClient.updateReply(reply);
    dispatch(updateReply(reply));
    setEdit(false);
  };
  useEffect(() => {
    setEdit(false);
  }, []);
  return (
    <div id="wd-pazza-instructor-answer-screen">
      {instructorReplies.map((reply: Reply) => {
        const user = getUser(reply.user);
        return (
          <div
            id="wd-pazza-instructor-answer"
            className="m-2 border border-1 rounded-1 bg-white"
          >
            <div
              id="wd-pazza-view-instructor-answer-title "
              className="border border-bottom-1 wd-pazza-font-11pt align-content-center ps-2 pt-1 pb-1"
            >
              <BiSolidInfoSquare className="fs-4 wd-pazza-yellow me-1 rounded-1" />
              <b>the instructors' answer,&nbsp;</b>
              <span className="fst-italic">
                where instructors collectively construct a single answer
              </span>
            </div>
            <div
              id="wd-pazza-instructor-answer-conctent"
              className="ps-4 pt-0 pb-3"
            >
              {(currentUser._id === user || currentUser.role === "FACULTY") && (
                <div className="wd-pazza-pos-upper-right">
                  <ActionButton setEdit={setEdit} replyId={reply._id} />
                </div>
              )}
              <div className="pt-4 pe-3">
                {!edit && <>{reply.reply}</>}
                {edit && (
                  <div className="wd-pazza-font-11pt">
                    <div className="wd-pazza-dark-grey form-control-label text-nowrap ms-1 me-1 mb-1">
                      <b>Edit Answer</b>
                    </div>
                    <div
                      id="wd-pazza-edit-answer-detail"
                      className="wd-pazza-rte-size"
                    >
                      <ReactQuill
                        defaultValue={reply.reply}
                        onChange={setNewAnswer}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              id="wd-pazza-answer-edit"
              className="border border-top-1 wd-pazza-bg-light-grey align-content-center"
            >
              {currentUser.role !== "FACULTY" &&
                reply._id !== currentUser._id && (
                  <>
                    <span
                      id="wd-pazza-good-answer-click"
                      className="wd-pazza-blue wd-pazza-font-11pt ms-3"
                    >
                      good question
                    </span>
                    <span className="wd-pazza-dark-grey wd-pazza-font-11pt ms-2">
                      0
                    </span>
                    <span className="wd-pazza-dark-grey wd-pazza-font-10pt float-end pt-2 me-2">
                      Updated {getTimeDiff(reply.date)} by
                      {user.firstName} {user.lastName}
                    </span>
                  </>
                )}
              {edit && (
                <>
                  <button
                    id="wd-pazza-save-answer-button"
                    className="btn wd-pazza-bg-blue wd-pazza-font-10pt text-white wd-pazza-fit-content-btn float-start me-2 ms-4"
                    onClick={() => updateReplyHandler(newAnswer, reply)}
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
              {(currentUser.role === "FACULTY" ||
                reply._id === currentUser._id) &&
                !edit && (
                  <>
                    <button
                      id="wd-pazza-anwer-edit-btn"
                      className="btn wd-pazza-bg-blue border border-1 rounded-1 text-white wd-pazza-font-lucida wd-pazza-border-dark-grey wd-pazza-font-11pt ps-2 pe-2 pt-1 pb-1 ms-4"
                      onClick={toggleEdit}
                    >
                      Edit
                    </button>
                    <span
                      id="wd-pazza-good-answer-click"
                      className="wd-pazza-blue wd-pazza-font-11pt ms-3"
                    >
                      good question
                    </span>
                    <span className="wd-pazza-dark-grey wd-pazza-font-11pt ms-2">
                      0
                    </span>
                    <span className="wd-pazza-dark-grey wd-pazza-font-10pt float-end pt-2 me-2">
                      Updated {getTimeDiff(post.date)} by {user.firstName}{" "}
                      {user.lastName}
                    </span>
                  </>
                )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
