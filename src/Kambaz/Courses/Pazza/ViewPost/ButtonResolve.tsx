import { useState } from "react";
import { Reply } from "../replyReducer";
export default function DiscussionResolveButton({ reply }: { reply: Reply }) {
  const [resolved, setResolved] = useState(reply.resolved);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === "resolved";
    setResolved(newValue);

    // If needed: update the actual reply object or notify parent
    // e.g., dispatch(updateReply({ ...reply, resolved: newValue }));
    console.log("Updated resolved to:", newValue);
  };

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
