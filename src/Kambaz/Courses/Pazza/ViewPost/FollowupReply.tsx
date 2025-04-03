import { BiSolidInfoSquare } from "react-icons/bi";
import ActionButton from "./ActionButton";

export default function FollowupReply() {
  return (
    <div id="wd-pazza-followup-reply-box" className="wd-pazza-bg-blue-grey">
      <div className="container row wd-pazza-bg-darker-grey m-0 pb-2 pe-0">
        <div className="col-1 pt-2 ps-0">
          <img
            src="/images/default_profile.png"
            className="wd-pazza-profile-dimension border border-3 border-white"
          />
        </div>
        <div className="col-11 ps-1 pe-0">
          <div className="wd-pazza-pos-upper-right">
            <ActionButton />
          </div>
          <div
            id="wd-pazza-discussion-reply-user"
            className="wd-pazza-font-11pt"
          >
            <BiSolidInfoSquare className="fs-4 wd-pazza-yellow me-1" />
            <b>USER NAME </b>
            <span className="wd-pazza-dark-grey">50 minutes ago</span>
          </div>
          <div
            id="wd-pazza-discussion-reply-content"
            className="wd-pazza-font-11pt"
          >
            Resolved and Unresolved buttons to toggle on whether the discussion
            has been resolved. Timestamp of when the discussion started.
          </div>
          <div className="mt-3">
            <span
              id="wd-pazza-good-post-click"
              className="wd-pazza-blue wd-pazza-font-11pt"
            >
              good comment <span className="wd-pazza-dark-grey"> | 0</span>
            </span>
          </div>
        </div>
      </div>
      <input
        id="wd-pazza-reply-followup"
        type="text"
        placeholder="Reply to this followup discussion"
        className="form-control wd-pazza-border-light-grey wd-pazza-font-11pt mb-2 mt-1"
      />
    </div>
  );
}
