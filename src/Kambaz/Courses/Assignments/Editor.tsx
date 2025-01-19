export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {" "}
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br /> <br />{" "}
      <textarea id="wd-description" cols={40} rows={10}>
        This assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to Kambaz application Links to all relevant source code
        repositories The Kambaz application should include a link to navigate
        back to the landing page.
      </textarea>
      <br />{" "}
      <table>
        {" "}
        <tr>
          {" "}
          <td align="right">
            {" "}
            <label htmlFor="wd-points">Points</label>{" "}
          </td>{" "}
          <td align="left">
            {" "}
            <input id="wd-points" value={100} />{" "}
          </td>{" "}
        </tr>{" "}
        <tr>
          <td align="right">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td align="left">
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="LABS">LABS</option>
            </select>
          </td>
        </tr>
        <tr>
          {" "}
          <td align="right">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td align="left">
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="POINTS">Points</option>
            </select>
          </td>
        </tr>
        <tr>
          <td valign="top" align="right">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <table align="left">
            <tr>
              <td>
                <select id="wd-submission-type">
                  <option value="ONLINE">Online</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="wd-entry-options">Online Entry Options</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="entry-options"
                  id="wd-text-entry"
                ></input>
                <label htmlFor="wd-text-entry">Text Entry</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="entry-options"
                  id="wd-website-url"
                ></input>
                <label htmlFor="wd-website-url">Website URL</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="entry-options"
                  id="wd-media-recordings"
                ></input>
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="entry-options"
                  id="wd-student-annoation"
                ></input>
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="entry-options"
                  id="wd-file-upload"
                ></input>
                <label htmlFor="wd-file-upload">File Uploads</label>
              </td>
            </tr>
          </table>
        </tr>
        <tr>
          <td valign="top" align="right">
            <label htmlFor="wd-assign">Assign</label>
          </td>
          <td valign="top" align="left">
            <table>
              <tr>
                <td align="left">
                  <label htmlFor="wd-assign-for">Assign to</label>
                </td>
              </tr>
              <tr>
                <td align="left">
                  <input id="wd-assign-for" value="Everyone"></input>
                </td>
              </tr>
              <tr>
                <td align="left">
                  <label htmlFor="wd-due-date">Due</label>
                </td>
              </tr>
              <tr>
                <td align="left">
                  <input
                    type="date"
                    id="wd-due-date"
                    value="2024-05-13"
                  ></input>
                </td>
              </tr>
              <tr>
                <td align="left">
                  <label htmlFor="wd-available-from">Available From</label>
                </td>
                <td align="left">
                  <label htmlFor="wd-available-until">Until</label>
                </td>
              </tr>
              <tr>
                <td align="left">
                  <input
                    type="date"
                    id="wd-available-from"
                    value="2024-05-06"
                  ></input>
                </td>
                <td align="left">
                  <input
                    type="date"
                    id="wd-available-until"
                    value="2024-05-20"
                  ></input>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>{" "}
      <hr></hr>
      <table align="right">
        <tr>
          <td>
            <button type="button">Cancel</button>
          </td>
          <td>
            <button type="button">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
