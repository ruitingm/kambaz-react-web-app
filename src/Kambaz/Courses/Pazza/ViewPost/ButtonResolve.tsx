import { useEffect, useState } from "react";
import { Reply, updateReply } from "../replyReducer";
import * as repliesClient from "../client";
import { useDispatch } from "react-redux";
export default function DiscussionResolveButton({ reply }: { reply: Reply }) {
  const [resolved, setResolved] = useState(reply.resolved);
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === "resolved";
    setResolved(newValue);
  };

  const updateReplyHandler = async (resolved: boolean) => {
    reply = { ...reply, resolved };
    await repliesClient.updateReply(reply);
    dispatch(updateReply(reply));
  };
  useEffect(() => {
    updateReplyHandler(resolved);
  }, [resolved]);

  return (
    <div
      id="wd-pazza-disscusion-resolve-btn"
      className="d-flex wd-pazza-bg-black float-start pe-2"
    >
      <div className="wd-pazza-font-9pt align-content-center">
        <input
          id="wd-pazza-discussion-resolve"
          type="radio"
          name={`resolve-button-${reply._id}`}
          className="form-control-input ms-1 mt-1"
          value="resolved"
          checked={resolved === true}
          onChange={handleChange}
        />
        <label
          htmlFor="wd-pazza-discussion-resolve"
          className="form-control-label text-white ms-1"
        >
          <b>Resolved</b>
        </label>
        <input
          id="wd-pazza-discussion-unresolve"
          type="radio"
          name={`resolve-button-${reply._id}`}
          className="form-control-input ms-2 mt-1"
          value="unresolved"
          checked={resolved === false}
          onChange={handleChange}
        />
        <label
          htmlFor="wd-pazza-discussion-unresolve"
          className="form-control-label text-white ms-1 mb-1"
        >
          <b>Unresolved</b>
        </label>
      </div>
    </div>
  );
}
