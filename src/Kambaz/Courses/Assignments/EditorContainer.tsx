export default function AssignmentEditorContainer({
  assignmentTitle,
  assignmentDueDate,
  assignmentAvailableDate,
  assignmentUntilDate,
  assignmentPoints,
  setAssignmentTitle,
  setAssignmentDueDate,
  setAssignmentUntilDate,
  setAssignmentAvailableDate,
  setAssignmentPoints,
}: {
  assignmentTitle: string;
  assignmentDueDate: string;
  assignmentAvailableDate: string;
  assignmentUntilDate: string;
  assignmentPoints: string;
  setAssignmentTitle: (name: string) => void;
  setAssignmentPoints: (points: string) => void;
  setAssignmentDueDate: (date: string) => void;
  setAssignmentUntilDate: (date: string) => void;
  setAssignmentAvailableDate: (date: string) => void;
}) {
  return (
    <div>
      <form className="me-w">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control w-75 mb-3"
          defaultValue={assignmentTitle}
          onChange={(e) => setAssignmentTitle(e.target.value)}
        />
        <div id="wd-description" className="border w-75 pt-3 p-2 mb-3">
          <p>
            This assignment is
            <span className="text-danger"> available online</span>
          </p>
          <p>
            Submit a link to the landing page of your Web application running on
            Netlify.
          </p>
          <p>The landing page should include the following:</p>
          <ul>
            <li>Your full name and section </li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kambaz application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <p>
            The Kambaz application should include a link to navigate back to the
            landing page.
          </p>
        </div>
        <div className="w-75">
          <form>
            <div className="row mb-3">
              <label
                htmlFor="wd-points"
                className="form-label col-sm-4 mb-0 pt-2 text-end"
              >
                Points
              </label>
              <div className="col-sm-8 p-0">
                <input
                  id="wd-points"
                  className="form-control"
                  defaultValue={assignmentPoints}
                  onChange={(e) => setAssignmentPoints(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="wd-group"
                className="form-label col-sm-4 mb-0 pt-2 text-end"
              >
                Assignment Group
              </label>
              <div className="col-sm-8 p-0">
                <select id="wd-group" className="form-select dropdown">
                  <option selected value="ASSIGNMENTS">
                    Assignments
                  </option>
                  <option value="LABS">Labs</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="wd-display-grade-as"
                className="form-label col-sm-4 mb-0 pt-2 text-end"
              >
                Display Grade As
              </label>
              <div className="col-sm-8 p-0">
                <select
                  id="wd-display-grade-as"
                  className="form-select dropdown"
                >
                  <option selected value="PERCENTAGE">
                    Percentage
                  </option>
                  <option value="POINTS">Points</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4 text-end pt-2">Submission Type</div>
              <div className="col-sm-8 border p-0 rounded-1">
                <div className="row mb-3 mt-3 col-11 m-3">
                  <select id="wd-submission-type" className="form-select mb-3">
                    <option selected value="ONLINE">
                      Online
                    </option>
                    <option value="INPERSON">In Person</option>
                  </select>
                  <div className="ps-1">
                    <label htmlFor="wd-entry-options" className="mb-3">
                      <b>Online Entry Options</b>
                    </label>
                    <div className="form-check mb-3">
                      <input
                        id="wd-text-entry"
                        className="form-check-input wd-entry-options"
                        type="checkbox"
                        name="wd-online-entry-options"
                      ></input>
                      <label
                        htmlFor="wd-text-entry"
                        className="form-check-label"
                      >
                        Text Entry
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        id="wd-website-url"
                        className="form-check-input wd-entry-options"
                        type="checkbox"
                        name="wd-online-entry-options"
                      ></input>
                      <label
                        htmlFor="wd-website-url"
                        className="form-check-label"
                      >
                        Website URL
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        id="wd-media-recording"
                        className="form-check-input wd-entry-options"
                        type="checkbox"
                        name="wd-online-entry-options"
                      ></input>
                      <label
                        htmlFor="wd-media-recording"
                        className="form-check-label"
                      >
                        Media Recordings
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        id="wd-student-annotation"
                        className="form-check-input wd-entry-options"
                        type="checkbox"
                        name="wd-online-entry-options"
                      ></input>
                      <label
                        htmlFor="wd-student-annotation"
                        className="form-check-label"
                      >
                        Student Annotation
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        id="wd-file-upload"
                        className="form-check-input wd-entry-options"
                        type="checkbox"
                        name="wd-online-entry-options"
                      ></input>
                      <label
                        htmlFor="wd-file-upload"
                        className="form-check-label"
                      >
                        File Uploads
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-1">
              <div className="col-sm-4 text-end pt-2">Assign</div>
              <div className="col-sm-8 border p-0 rounded-1">
                <div className="row mt-3 pb-0 col-11 ms-3">
                  <label
                    className="form-label m-0 p-0 mb-1"
                    htmlFor="wd-assign-to"
                  >
                    <b>Assign to</b>
                  </label>
                  <select className="form-select mb-0" multiple>
                    <option selected value="EVERYONE">
                      Everyone
                    </option>
                    <option value="TA">Teaching Assistants</option>
                  </select>
                </div>
                <div className="row mt-2 pb-0 col-11 ms-3">
                  <label htmlFor="wd-due" className="form-label m-0 p-0 mb-1">
                    <b>Due</b>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    defaultValue={assignmentDueDate}
                    onChange={(e) => {
                      setAssignmentDueDate(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="row mt-2 pb-0 col-11 ms-3 mb-3">
                  <div className="col-6 p-0">
                    <label
                      htmlFor="wd-available-from"
                      className="form-label mb-1"
                    >
                      <b>Available from</b>
                    </label>
                    <input
                      id="wd-available-from"
                      type="date"
                      className="form-control mb-1"
                      defaultValue={assignmentAvailableDate}
                      onChange={(e) =>
                        setAssignmentAvailableDate(e.target.value)
                      }
                    ></input>
                  </div>
                  <div className="col-6 p-0">
                    <label
                      htmlFor="wd-available-until"
                      className="form-label mb-1"
                    >
                      <b>Until</b>
                    </label>
                    <input
                      id="wd-available-until"
                      type="date"
                      className="form-control"
                      defaultValue={assignmentUntilDate}
                      onChange={(e) => setAssignmentUntilDate(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </form>
      <hr />
    </div>
  );
}
