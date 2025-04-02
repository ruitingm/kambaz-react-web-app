import RTE from "./RTE";

export default function PostDetail() {
  return (
    <div id="wd-pazza-post-detail-screeen" className="mt-2">
      <div className="d-flex">
        <div className="ms-4">
          <input
            id="wd-pazza-post-rte"
            type="radio"
            className="form-check-input me-2"
            name="detail"
          />
          <label
            htmlFor="wd-pazza-post-rte"
            className="form-check-label wd-pazza-font-lucida wd-pazza-dark-grey wd-pazza-font-11pt"
          >
            Rich text editor
          </label>
        </div>
        <div className="ms-4">
          <input
            id="wd-pazza-post-pte"
            type="radio"
            className="form-check-input me-2"
            name="detail"
          />
          <label
            htmlFor="wd-pazza-post-pte"
            className="form-check-label wd-pazza-font-lucida wd-pazza-dark-grey wd-pazza-font-10pt"
          >
            Plain text editor
          </label>
        </div>
        <div className="ms-4">
          <input
            id="wd-pazza-post-me"
            type="radio"
            className="form-check-input me-2"
            name="detail"
          />
          <label
            htmlFor="wd-pazza-post-me"
            className="form-check-label wd-pazza-font-lucida wd-pazza-dark-grey wd-pazza-font-10pt"
          >
            Markdown editor
          </label>
        </div>
      </div>
      <div>
        <RTE />
      </div>
      <div className="wd-pazza-dark-grey wd-pazza-font-lucida wd-pazza-font-10pt ps-3">
        Option + F9 to move focus to Menu Bar; Option + F10 to move foucs to
        Tool Bar (use tab to move focus between button group, and arrow keys to
        select specific items within groups); ESC to ecit.
      </div>
    </div>
  );
}
