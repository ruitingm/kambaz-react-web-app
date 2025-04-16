export default function PostType({
  setType,
}: {
  setType: (type: string) => void;
}) {
  const handleChange = (event: any) => {
    setType(event.target.value);
  };
  return (
    <div
      id="wd-pazza-post-type"
      className="d-flex flex-fill bg-white pt-2 pb-2"
    >
      <div id="wd-pazza-post-type-question-tab" className="d-flex ms-4">
        <input
          id="wd-pazza-post-type-question"
          type="radio"
          className="form-check-input me-2"
          name="post-type"
          value="question"
          onChange={handleChange}
        />
        <label htmlFor="wd-pazza-post-type-question">
          <div className="form-check-label wd-pazza-dark-grey wd-pazza-font-11pt">
            <b>Question</b>
          </div>
          <div className="fst-italic wd-pazza-dark-grey wd-pazza-font-10pt">
            if you need an answer
          </div>
        </label>
      </div>
      <div id="wd-pazza-post-type-note-tab" className="d-flex ms-4">
        <input
          id="wd-pazza-post-type-note"
          type="radio"
          className="form-check-input me-2"
          name="post-type"
          value="note"
          onChange={handleChange}
        />
        <label htmlFor="wd-pazza-post-type-note">
          <div className="form-check-label wd-pazza-dark-grey wd-pazza-font-11pt">
            <b>Note</b>
          </div>
          <div className="fst-italic wd-pazza-dark-grey wd-pazza-font-10pt">
            if you <b>don't</b> need an answer
          </div>
        </label>
      </div>
      <div id="wd-pazza-post-type-poll-tab" className="d-flex ms-4">
        <input
          id="wd-pazza-post-type-poll"
          type="radio"
          className="form-check-input me-2"
          name="post-type"
          value="poll"
        />
        <label htmlFor="wd-pazza-post-type-poll">
          <div className="form-check-label wd-pazza-dark-grey wd-pazza-font-11pt">
            <b>Poll/In-Class Response</b>
          </div>
          <div className="fst-italic wd-pazza-dark-grey wd-pazza-font-10pt">
            if you need a vote
          </div>
        </label>
      </div>
    </div>
  );
}
