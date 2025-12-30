import ActionButton from "./ButtonAction";
import { Post } from "../postReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BiSolidInfoSquare } from "react-icons/bi";
import ReactQuill from "react-quill";
import * as repliesClient from "../client";
import { addReply, Reply, updateReply } from "../replyReducer";
import * as postClient from "../client";

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
  const { replies } = useSelector((state: any) => state.repliesReducer) as {
    replies: Reply[];
  };

  const isInstructor = (role: string) =>
    ["FACULTY", "TA"].includes((role || "").trim().toUpperCase());

  const instructorReply = replies.find(
    (r: Reply) =>
      String(r.post).trim() === String(post._id).trim() &&
      isInstructor(r.role) &&
      String(r.type).trim() === "answer"
  );
  const replyExist = instructorReply !== undefined;
  const getUser = (userId: string) => {
    const user = users.find((u) => u._id === userId);
    return user;
  };
  console.log("post._id raw:", post._id, typeof post._id);
  console.log("replies raw:", replies);

  if (replies[0]) {
    const r = replies[0];
    console.log("r.post raw:", r.post, typeof r.post);
    console.log("r.type raw:", JSON.stringify(r.type));
    console.log("r.role raw:", JSON.stringify(r.role));

    console.log(
      "matchPost:",
      String(r.post).trim() === String(post._id).trim()
    );
    console.log("matchType:", String(r.type).trim() === "answer");
    console.log(
      "matchRole:",
      ["FACULTY", "TA"].includes(String(r.role).trim().toUpperCase())
    );
  }
  console.log("instructorReply:", instructorReply);
  const replyUser = instructorReply
    ? getUser(instructorReply?.user)
    : undefined;
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
  console.log(
    "Redux reply snapshot:",
    replies.map((r) => ({
      id: r._id,
      post: r.post,
      type: r.type,
      role: r.role,
    }))
  );
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
  const currentUserIsInstructor = isInstructor(currentUser.role);
  if (!currentUserIsInstructor && !replyExist) return;
  return (
    <div id="wd-pazza-instructor-answer-screen">
      <div
        id="wd-pazza-instructor-answer"
        className="m-2 border border-1 rounded-1 bg-white"
      >
        <div
          id="wd-pazza-view-instructor-answer-title "
          className="border border-bottom-1 wd-pazza-font-11pt align-content-center ps-2 pt-1 pb-1 d-flex justify-content-between"
        >
          <div>
            <BiSolidInfoSquare className="fs-4 wd-pazza-yellow me-1 rounded-1" />
            <b>the instructors' answer,&nbsp;</b>
            <span className="fst-italic">
              where instructors collectively construct a single answer
            </span>
          </div>
          <div className="wd-pazza-pos-upper-right float-end">
            <ActionButton
              setEdit={setEdit}
              replyId={instructorReply?._id}
              disableEdit={!replyExist}
            />
          </div>
        </div>
        <div
          id="wd-pazza-instructor-answer-conctent"
          className="ps-4 pt-0 pb-3 pe-4"
        >
          <div
            id="wd-pazza-instructor-answer-content"
            className="wd-pazza-font-11pt wd-pazza-black mt-3"
          >
            {!edit && instructorReply?.reply}
          </div>
          {currentUserIsInstructor && ((replyExist && edit) || !replyExist) && (
            <ReactQuill
              onChange={setNewAnswer}
              defaultValue={instructorReply?.reply}
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
                onClick={() => updateReplyHandler(newAnswer, instructorReply)}
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
          {currentUserIsInstructor && !replyExist && !edit && (
            <button
              id="wd-pazza-anwer-edit-btn"
              className="btn wd-pazza-bg-blue border border-1 rounded-1 text-white wd-pazza-font-lucida wd-pazza-border-dark-grey wd-pazza-font-11pt ps-2 pe-2 pt-1 pb-1 ms-4"
              onClick={() => {
                addReplyHandler();
                setEdit(false);
              }}
            >
              Save
            </button>
          )}
          {currentUserIsInstructor && replyExist && !edit && (
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
                    Updated {getTimeDiff(instructorReply.date)} by
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
