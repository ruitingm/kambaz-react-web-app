import { BiSolidInfoSquare } from "react-icons/bi";
import ActionButton from "./ButtonAction";
import * as postClient from "../client";
import { useDispatch, useSelector } from "react-redux";
import { FollowUp, Reply, updateReply } from "../replyReducer";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { v4 as uuidv4 } from "uuid";
export default function FollowupReply({
  reply,
  users,
  getTimeDiff,
  today,
  stripHtml,
}: {
  reply: Reply;
  users: any[];
  getTimeDiff: (postDate: string) => string;
  today: string;
  stripHtml: (html: string) => string;
}) {
  const getUser = (userId: string) => {
    const user = users.find((u: any) => u._id.toString() === userId.toString());
    return user;
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const followups = reply.followup;
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const updateReplyHandler = async (reply: Reply) => {
    await postClient.updateReply(reply);
    dispatch(updateReply(reply));
  };
  const [clickedButton, setClickedButtonState] = useState("");
  const setClickedButton = (button: string) => {
    setClickedButtonState(button);
  };
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };
  const [newFollowup, setNewFollowup] = useState("");
  useEffect(() => {
    setEdit(false);
  }, [reply]);
  return (
    <div id="wd-pazza-followup-reply-box" className="wd-pazza-bg-blue-grey">
      {followups.map((followup, index) => {
        const user = getUser(followup.user);
        return (
          <div key={index}>
            {user && (
              <div className="container row wd-pazza-bg-darker-grey m-0 pb-2 pe-0 mb-1">
                <div className="col-1 pt-2 ps-0">
                  <img
                    src="/images/default_profile.png"
                    className="wd-pazza-profile-dimension border border-3 border-white"
                  />
                </div>
                <div className="col-11 ps-1 pe-0">
                  {(currentUser._id === followup.user ||
                    currentUser.role === "FACULTY") && (
                    <div className="wd-pazza-pos-upper-right">
                      <ActionButton
                        setEdit={setEdit}
                        followupId={followup._id}
                        setClickedButton={setClickedButton}
                        reply={reply}
                        disableEdit={false}
                      />
                    </div>
                  )}
                  <div
                    id="wd-pazza-discussion-reply-user"
                    className="wd-pazza-font-11pt"
                  >
                    {(user?.role === "FACULTY" || user?.role === "TA") && (
                      <BiSolidInfoSquare className="fs-4 wd-pazza-yellow me-1" />
                    )}
                    <b>
                      {user?.firstName} {user?.lastName}
                    </b>
                    &nbsp;
                    <span className="wd-pazza-dark-grey">
                      {getTimeDiff(followup.date)}
                    </span>
                  </div>
                  {clickedButton !== followup._id && (
                    <div
                      id="wd-pazza-discussion-reply-content"
                      className="wd-pazza-font-11pt"
                    >
                      {followup.content}
                    </div>
                  )}
                  {clickedButton === followup._id && (
                    <div className="wd-pazza-font-11pt">
                      <div className="wd-pazza-dark-grey form-control-label text-nowrap ms-1 me-1 mb-1">
                        <b>Edit Answer</b>
                      </div>
                      <div
                        id="wd-pazza-edit-followup-detail"
                        className="wd-pazza-rte-size"
                      >
                        <ReactQuill
                          defaultValue={followup.content}
                          onChange={(value) => {
                            setNewFollowup(value);
                            toggleEdit();
                          }}
                        />
                        <button
                          className="btn wd-pazza-bg-blue text-white wd-pazza-font-10pt wd-pazza-fit-content-btn mt-2 me-2"
                          onClick={() => {
                            const newFollowupReply = {
                              _id: followup._id,
                              user: currentUser._id,
                              content: stripHtml(newFollowup),
                              date: today,
                            };
                            const updatedFollowups = followups.map(
                              (f: FollowUp) =>
                                f._id === followup._id ? newFollowupReply : f
                            );
                            const updatedReply = {
                              ...reply,
                              followup: updatedFollowups,
                            };
                            updateReplyHandler(updatedReply);
                            setClickedButton("");
                            setNewFollowup("");
                          }}
                        >
                          Save
                        </button>
                        <button
                          className="btn wd-pazza-bg-dark-grey text-white wd-pazza-font-10pt wd-pazza-fit-content-btn mt-2 me-2"
                          onClick={() => {
                            setClickedButton("");
                            toggleEdit;
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="mt-3">
                    <span
                      id="wd-pazza-good-post-click"
                      className="wd-pazza-blue wd-pazza-font-11pt"
                    >
                      good comment
                      <span className="wd-pazza-dark-grey"> | 0</span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <input
        id="wd-pazza-reply-followup"
        value={content}
        type="text"
        placeholder="Reply to this followup discussion"
        className="form-control wd-pazza-border-light-grey wd-pazza-font-11pt mb-2 mt-1"
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === "Enter" && content.trim()) {
            e.preventDefault();
            const newFollowupReply = {
              _id: uuidv4(),
              user: currentUser._id,
              content: content,
              date: today,
            };
            const updatedFollowups = [...reply.followup, newFollowupReply];
            const updatedReply = { ...reply, followup: updatedFollowups };
            updateReplyHandler(updatedReply);
            setContent("");
          }
        }}
      />
    </div>
  );
}
