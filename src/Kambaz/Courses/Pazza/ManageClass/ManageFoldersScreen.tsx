import ManageSubfolder from "./ManageSubfolder.tsx";

export default function ManageFoldersScreen() {
  return (
    <div
      id="wd-pazza-manage-folder-screen"
      className="d-flex wd-pazza-font-11pt"
    >
      <div id="wd-pazza-manage-folder-description" className="col-2">
        <div className="border border-1 rounded-1 col-11 wd-pazza-bg-light-blue wd-pazza-blue wd-pazza-font-10pt text-center p-3 pt-2 pb-2 mt-2 ms-1">
          <span className="wd-pazza-font-10pt">
            Create folders to keep your class organized
          </span>
        </div>
      </div>
      <div id="wd-pazza-configure-folder" className="col-10">
        <div id="wd-pazza-configure-folder-title">
          <hr className="mt-1 mb-0 fw-bolder" />
          <h5 className="mt-0 fw-bold mb-0">Configure Class Folders</h5>
          <hr className="mt-0 mb-0" />
          <div className="wd-pazza-font-11pt me-5">
            folders allow you to keep class content organized. When students and
            instructors add a new post, they will be required to specify at
            least one folder for their post.
          </div>
        </div>
        <button className="btn wd-pazza-bg-blue text-white mt-2 pt-1 pb-1 wd-pazza-font-11pt wd-pazza-fit-content">
          Disable folders
        </button>
        <div id="wd-pazza-create-folder" className="mt-2">
          <div className="mb-2">
            <b>Create new folders: </b>
          </div>
          <span>
            Add folders that are relevant for your class. Select 'numbered' to
            create numbered folders (hw1-hw4).
          </span>
          <div className="d-flex align-items-center mt-2 justify-content-between">
            <div className="col-7 me-2">
              <input
                type="text"
                placeholder="Add a folder(s)"
                className="form-control wd-pazza-font-11pt wd-pazza-fit-content"
              />
            </div>
            <input
              id="wd-pazza-create-numbered-folder"
              type="checkbox"
              className="form-check-input me-2"
            />
            <label htmlFor="wd-pazza-create-numbered-folder" className="me-2">
              numbered;
            </label>
            <span>suffix #s:</span>
            <input
              type="text"
              className="form-control wd-pazza-single-input ms-2 me-2 wd-pazza-font-11pt wd-pazza-fit-content"
            />
            <span>-</span>
            <input
              type="text"
              className="form-control wd-pazza-single-input ms-2 me-2 wd-pazza-font-11pt wd-pazza-fit-content"
            />
            <button className="btn wd-pazza-bg-blue text-white ps-3 pe-3 wd-pazza-font-11pt wd-pazza-fit-content">
              Add folder
            </button>
          </div>
          <div id="wd-pazza-manage-folder-title" className="mt-3">
            <b>Manage folders</b>
            <br />
            Reorder, delete, edit folder names, or create subfolders. You can
            create up to 2 levels of nesting ("subfolders" and "subfolders to
            subfolders"). Manually sort folders and subfolders using burger
            icon. Click folder icon to show and hide subfolders.
          </div>
        </div>
        <div id="wd-pazza-manage-folder">
          <div className="d-flex mt-3 justify-content-between">
            <input
              type="text"
              className="form-control wd-pazza-min-input wd-pazza-font-11pt wd-pazza-fit-content"
              placeholder="Delete selected folders"
            />
            <button className="btn wd-pazza-bg-light-grey wd-pazza-font-11pt wd-pazza-fit-content">
              Hide all subfolders
            </button>
          </div>
          <hr />
        </div>
        <div>
          <ManageSubfolder />
        </div>
      </div>
    </div>
  );
}
