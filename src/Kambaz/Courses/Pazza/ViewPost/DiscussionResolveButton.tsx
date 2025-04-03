export default function DiscussionResolveButton() {
  return (
    <div
      id="wd-pazza-disscusion-resolve-btn"
      className="d-flex wd-pazza-bg-black float-start pe-2"
    >
      <div className="wd-pazza-font-9pt align-content-center">
        <input
          id="wd-pazza-discussion-resolve"
          type="radio"
          name="resolve-button"
          className="form-control-input ms-1 mt-1"
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
          name="resolve-button"
          className="form-control-input ms-2 mt-1"
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
