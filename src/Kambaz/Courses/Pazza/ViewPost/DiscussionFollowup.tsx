import DiscussionResolveButton from "./ButtonResolve";
import { IoMdLink } from "react-icons/io";
import FollowupReply from "./ReplyFollowup";
import ActionButton from "./ButtonAction";
import { useDispatch, useSelector } from "react-redux";
import { addReply, Reply, updateReply } from "../replyReducer";
import * as postClient from "../client";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { BiSolidInfoSquare } from "react-icons/bi";
import ReactQuill from "react-quill";
import * as repliesClient from "../client";
export default function FollowupDiscussion({
  users,
  getTimeDiff,
  stripHtml,
}: {
  users: any[];
  getTimeDiff: (postDate: string) => string;
  stripHtml: (html: string) => string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pid } = useParams();
  const dispatch = useDispatch();
  const { replies } = useSelector((state: any) => state.repliesReducer) as {
    replies: Reply[];
  };
  const nonInsructorReplies = replies.filter((r) => r.role !== "FACULTY");
  const getUser = (userId: string) => {
    const user = users.find((u: any) => u._id.toString() === userId.toString());
    return user;
  };
  const [userReply, setUserReply] = useState("");
  const [newReply, setNewReply] = useState("");
  const [today, setToday] = useState("");
  const getToday = () => {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    setToday(formattedDate);
  };
  const addReplyHandler = async () => {
    const newReply = await postClient.createReplyForPost(pid!, {
      _id: "",
      user: currentUser._id,
      post: pid!,
      followup: [],
      reply: userReply,
      date: today,
      role: currentUser.role,
    });
    dispatch(addReply(newReply));
    setUserReply("");
  };
  const handleSetReply = (reply: string) => {
    setUserReply(stripHtml(reply));
  };
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };
  const updateReplyHandler = async (newContent: string, reply: Reply) => {
    reply = { ...reply, reply: stripHtml(newContent) };
    await repliesClient.updateReply(reply);
    dispatch(updateReply(reply));
    setEdit(false);
  };
  useEffect(() => {
    getToday();
    setEdit(false);
  }, []);
  return (
    <div id="wd-pazza-follow-up-screen" className="border border-1 rounded-1">
      <div
        id="wd-pazza-follow-up-title"
        className="wd-pazza-font-11pt border border-bottom-1 bg-white ps-2 pb-1 align pt-1"
      >
        <b>followup discussions&nbsp;</b>
        <span className="fst-italic wd-pazza-font-10pt">
          for lingering questions and comments
        </span>
      </div>
      {nonInsructorReplies.map((reply) => {
        const user = getUser(reply.user);
        return (
          <div>
            <div className="wd-pazza-bg-blue-grey ms-3 mb-3 me-3 mt-2">
              <div id="wd-pazza-follow-up-discussion" className="mb-1">
                {(currentUser.role === "FACULTY" ||
                  reply.user === currentUser._id) && (
                  <div className="wd-pazza-pos-upper-right">
                    <ActionButton setEdit={setEdit} replyId={reply._id} />
                  </div>
                )}
                <DiscussionResolveButton />
                <span className="wd-pazza-blue ms-1 wd-pazza-font-10pt">
                  <b>@</b>
                  {reply._id}
                </span>
                <IoMdLink className="wd-pazza-blue ms-1 fs-5" />
              </div>
              <div id="wd-pazza-discussion-content" className="container row">
                <div id="wd-pazza-discussion-profile" className="col-1">
                  <img
                    src="/images/default_profile.png"
                    className="wd-pazza-profile-dimension border border-3 border-white"
                  />
                </div>
                <div id="wd-pazza-discussion-text" className="col-11">
                  <div
                    id="wd-pazza-discussion-user-name"
                    className="wd-pazza-font-11pt"
                  >
                    {(user?.role === "FACULTY" || user?.role === "TA") && (
                      <BiSolidInfoSquare className="fs-4 wd-pazza-yellow me-1" />
                    )}
                    <b>
                      {user.firstName} {user?.lastName} &nbsp;
                    </b>
                    <span className="wd-pazza-dark-grey">
                      {getTimeDiff(reply.date)}
                    </span>
                  </div>
                  {!edit && (
                    <div className="wd-pazza-font-11pt">{reply.reply}</div>
                  )}
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
                          onChange={() => {
                            setNewReply;
                            toggleEdit;
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              updateReplyHandler(newReply, reply);
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="mt-3">
                    <span
                      id="wd-pazza-good-post-click"
                      className="wd-pazza-blue wd-pazza-font-11pt"
                    >
                      helpful <span className="wd-pazza-dark-grey"> | 0</span>
                    </span>
                  </div>
                  <FollowupReply reply={reply} users={users} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mt-1 ms-3 me-3 wd-pazza-font-11pt">
        <span className="ms-1">Start a new followup discussion</span>
        <ReactQuill
          id="wd-pazza-reply-followup"
          placeholder="Compose a new followup discussion"
          defaultValue={userReply}
          className="form-control wd-pazza-border-light-grey wd-pazza-font-11pt mb-2 mt-1"
          onChange={handleSetReply}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addReplyHandler();
            }
          }}
        />
      </div>
    </div>
  );
}
