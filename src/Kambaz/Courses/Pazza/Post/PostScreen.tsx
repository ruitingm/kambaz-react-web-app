import PostDetail from "./PostDetail";
import PostTo from "./PostTo";
import PostType from "./PostType";
import SelectFolders from "./SelectFolders";

export default function PostScreen() {
  return (
    <div id="wd-pazza-post-screen">
      <table>
        <thead>
          <tr>
            <th className="bg-white p-0">
              <div className="wd-pazza-dark-grey wd-pazza-font-11pt align-self-center float-end pe-2 float-end text-nowrap">
                <b>Post Type*</b>
              </div>
            </th>
            <th>
              <PostType />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="wd-pazza-dark-grey wd-pazza-font-11pt mt-3 pe-2 text-nowrap float-end align-content-center">
                <b>Post To*</b>
              </div>
            </td>
            <td>
              <PostTo />
            </td>
          </tr>
          <tr>
            <td>
              <div className="wd-pazza-dark-grey wd-pazza-font-11pt pe-2 ps-1 text-nowrap float-end">
                <b>Select Folder(s)*</b>
              </div>
            </td>
            <td>
              <SelectFolders />
            </td>
          </tr>
          <tr>
            <td>
              <label
                htmlFor="wd-pazza-post-summary"
                className="wd-pazza-dark-grey wd-pazza-font-11pt align-content-center float-end pe-2 mt-2 form-control-label text-nowrap float-end"
              >
                <b>Summary*</b>
              </label>
            </td>
            <td>
              <div className="pe-3">
                <input
                  id="wd-pazza-post-summary"
                  type="text"
                  className="form-control mt-2 pazza-font-11pt"
                  placeholder="Enter a one line summary, 100 characters or less"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="wd-pazza-dark-grey wd-pazza-font-11pt pe-2 align-content-center text-nowrap float-end">
                <b>Details</b>
              </div>
            </td>
            <td>
              <PostDetail />
            </td>
          </tr>
          <tr>
            <td>
              <div className="wd-pazza-dark-grey wd-pazza-font-11pt pe-2 text-nowrap float-end">
                <b>Posting Options</b>
              </div>
            </td>
            <td>
              <div className="d-flex mt-3">
                <input
                  id="wd-pazza-posting-option"
                  type="checkbox"
                  className="form-control-input"
                />
                <label
                  htmlFor="wd-pazza-posting-option"
                  className="form-control-label wd-pazza-dark-grey wd-pazza-font-11pt wd-pazza-font-lucida ms-2"
                >
                  <b>Send email notifications immediately </b> (by passing
                  students' email preferences, if necessary)
                </label>
              </div>
              <span className="wd-pazza-font-11pt wd-pazza-font-lucida wd-pazza-dark-grey">
                * Required fields
              </span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <div className="d-flex mt-3">
                <button className="btn wd-pazza-bg-blue border border-1 rounded-1 text-white wd-pazza-font-lucida wd-pazza-border-dark-grey">
                  Post My Question to Class
                </button>
                <button className="btn border border-1 rounded-1 text-black wd-pazza-font-lucida ms-3 wd-pazza-bg-light-grey wd-pazza-border-dark-grey">
                  Save Draft
                </button>
                <button className="btn border border-1 rounded-1 text-black wd-pazza-font-lucida ms-3 wd-pazza-bg-light-grey wd-pazza-border-dark-grey">
                  Cancel
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
