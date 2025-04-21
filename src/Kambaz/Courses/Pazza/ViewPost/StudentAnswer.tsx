import ActionButton from "./ButtonAction";
import { Post } from "../postReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { TbCircleLetterSFilled } from "react-icons/tb";
import ReactQuill from "react-quill";
import * as repliesClient from "../client";
import { addReply, Reply, updateReply } from "../replyReducer";
import * as postClient from "../client";
export default function StudentAnswer({
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
  const { replies } = useSelector((state: any) => state.repliesReducer) as {
    replies: Reply[];
  };
  const studentReply = replies.find(
    (r: Reply) => r.role === "STUDENT" && r.type === "answer"
  );
  const replyExist = studentReply !== undefined;
  const getUser = (userId: string) => {
    const user = users.find((u) => u._id === userId);
    return user;
  };
  const replyUser = studentReply ? getUser(studentReply?.user) : undefined;
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit((v) => !v);
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
  const addReplyHandler = async () => {
    const newReply = await postClient.createReplyForPost(post._id!, {
      _id: "",
      user: currentUser._id,
      post: post._id!,
      followup: [],
      reply: stripHtml(newAnswer),
      date: getToday(),
      resolved: false,
      type: "answer",
      role: currentUser.role,
    });
    dispatch(addReply(newReply));
    setNewAnswer("");
  };
  const getToday = () => {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDate;
  };
  if (currentUser.role !== "STUDENT" && !replyExist) return;
  return (
    <div id="wd-pazza-student-answer-screen">
      <div
        id="wd-pazza-student-answer"
        className="m-2 border border-1 rounded-1 bg-white"
      >
        <div
          id="wd-pazza-view-student-answer-title "
          className="border border-bottom-1 wd-pazza-font-11pt align-content-center ps-2 pt-1 pb-1 d-flex justify-content-between"
        >
          <div>
            <TbCircleLetterSFilled className="fs-4 wd-pazza-green me-1 rounded-1" />
            <b>the students' answer,&nbsp;</b>
            <span className="fst-italic">
              where students collectively construct a single answer
            </span>
          </div>
          <div className="wd-pazza-pos-upper-right float-end">
            <ActionButton
              setEdit={setEdit}
              replyId={studentReply?._id}
              disableEdit={!replyExist}
            />
          </div>
        </div>
        <div
          id="wd-pazza-student-answer-conctent-main"
          className="ps-4 pt-0 pb-3 pe-4"
        >
          <div
            id="wd-pazza-student-answer-content"
            className="wd-pazza-font-11pt wd-pazza-black mt-3"
          >
            {!edit && studentReply?.reply}
          </div>
          {((replyExist && edit) || !replyExist) && (
            <ReactQuill
              onChange={setNewAnswer}
              defaultValue={studentReply?.reply}
            />
          )}
        </div>
        <div
          id="wd-pazza-answer-edit"
          className="border border-top-1 wd-pazza-bg-light-grey align-content-center"
        >
          {replyExist && edit && (
            <>
              <button
                id="wd-pazza-save-answer-button"
                className="btn wd-pazza-bg-blue wd-pazza-font-10pt text-white wd-pazza-fit-content-btn float-start me-2 ms-4"
                onClick={() => updateReplyHandler(newAnswer, studentReply)}
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
          {currentUser.role === "STUDENT" && !replyExist && !edit && (
            <button
              id="wd-pazza-student-anwer-edit-btn"
              className="btn wd-pazza-bg-blue border border-1 rounded-1 text-white wd-pazza-font-lucida wd-pazza-border-dark-grey wd-pazza-font-11pt ps-2 pe-2 pt-1 pb-1 ms-4"
              onClick={() => {
                addReplyHandler();
                setEdit(false);
              }}
            >
              Save
            </button>
          )}
          {currentUser.role === "STUDENT" && replyExist && !edit && (
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
                {replyUser && (
                  <>
                    Updated {getTimeDiff(studentReply.date)} by
                    {replyUser.firstName} {replyUser.lastName}
                  </>
                )}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
