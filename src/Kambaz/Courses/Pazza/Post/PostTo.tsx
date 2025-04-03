export default function PostTo() {
  return (
    <div
      id="wd-pazza-post-to-screen"
      className="d-flex align-content-center mt-3"
    >
      <div className="ms-4">
        <input
          id="wd-pazza-post-to-class"
          type="radio"
          className="form-check-input me-2"
          name="post-to"
        />
        <label
          htmlFor="wd-pazza-post-to-class"
          className="form-check-label wd-pazza-font-lucida wd-pazza-dark-grey wd-pazza-font-11pt"
        >
          Entire Class
        </label>
      </div>
      <div className="ms-4">
        <input
          id="wd-pazza-post-to-individual-instructor"
          type="radio"
          className="form-check-input me-2"
          name="post-to"
        />
        <label
          htmlFor="wd-pazza-post-to-individual-instructor"
          className="form-check-label wd-pazza-font-lucida wd-pazza-dark-grey wd-pazza-font-11pt"
        >
          Individual Students(s) / Instructor(s)
        </label>
      </div>
    </div>
  );
}
