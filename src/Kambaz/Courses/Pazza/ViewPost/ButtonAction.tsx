import { useEffect, useState } from "react";
import * as client from "../client";
import { useDispatch } from "react-redux";
import { deletePost } from "../postReducer";
import { useNavigate, useParams } from "react-router";
import { deleteReply, FollowUp, Reply, updateReply } from "../replyReducer";
export default function ActionButton({
  setEdit,
  postId,
  replyId,
  followupId,
  setClickedButton,
  reply,
  disableEdit,
}: {
  setEdit: (edit: boolean) => void;
  postId?: string;
  replyId?: string;
  followupId?: string;
  setClickedButton?: (button: string) => void;
  reply?: Reply;
  disableEdit: boolean;
}) {
  const { cid } = useParams();
  const [selectedAction, setSelectedAction] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasPid = postId ? true : false;
  const hasRid = replyId ? true : false;
  const hasFid = followupId ? true : false;
  const handleActionChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setSelectedAction(value);
    if (value === "edit") {
      setEdit(true);
      if (followupId && setClickedButton) {
        setClickedButton(followupId);
      }
    } else if (value === "delete") {
      setEdit(false);
      if (hasPid) {
        await deletePostHandler(postId!);
      } else if (hasRid) {
        await deleteReplyHandler(replyId!);
      } else if (hasFid && reply) {
        await deleteFollowupHandler(followupId!, reply);
      }
    }
  };
  const deleteFollowupHandler = async (fid: string, reply: Reply) => {
    try {
      const updatedFollowup = reply.followup.filter(
        (f: FollowUp) => f._id !== fid
      );
      reply = { ...reply, followup: updatedFollowup };
      await client.updateReply(reply);
      dispatch(updateReply(reply));
    } catch (error) {
      console.error(error);
    }
  };
  const deletePostHandler = async (pid: string) => {
    try {
      await client.deletePost(pid);
      dispatch(deletePost(pid));
      navigate(`/Kambaz/Courses/${cid}/Pazza/QandA`, {
        replace: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const deleteReplyHandler = async (rid: string) => {
    try {
      await client.deleteReply(rid);
      dispatch(deleteReply(rid));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setSelectedAction("");
  }, []);
  return (
    <div id="wd-pazza-action-button">
      <select
        id="wd-pazza-post-action"
        className="btn wd-pazza-blue wd-pazza-font-11pt wd-pazza-bg-light-grey float-end p-0 ps-1 wd-pazza-round-left-bottom-corner border border-1 dropdown-toggle"
        value={selectedAction}
        onChange={handleActionChange}
      >
        <option id="wd-pazza-post-action-option" value="" disabled>
          action
        </option>
        <option
          id="wd-pazza-post-action-edit"
          value="edit"
          disabled={disableEdit}
        >
          Edit
        </option>
        <option id="wd-pazza-post-action-delete" value="delete">
          Delete
        </option>
      </select>
    </div>
  );
}
