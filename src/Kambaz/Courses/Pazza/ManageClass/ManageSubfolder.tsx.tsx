import { FaAlignJustify, FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function ManageSubfolder() {
  return (
    <div
      id="wd-pazza-manage-subfolders"
      className="d-flex justify-content-between align-items-center"
    >
      <div className="d-flex align-items-center">
        <input type="checkbox" />
        <FaAlignJustify className="wd-pazza-dark-grey ms-2" />
        <div className="wd-pazza-font-11pt border-1 rounded-1 wd-pazza-bg-light-blue wd-pazza-blue ms-2 p-1 text-center">
          hw1
        </div>
      </div>
      <div className="d-flex align-content-center">
        <button className="btn wd-pazza-bg-light-grey wd-pazza-edit-subfolder-btn wd-pazza-font-10pt align-items-center">
          <FaPencil className="wd-pazza-black me-2" />
          Edit
        </button>
        <button className="btn wd-pazza-bg-light-grey wd-pazza-create-subfolder-btn wd-pazza-font-10pt align-items-center">
          <FaPlus className="wd-pazza-black me-2" />
          Create Subfoldres
        </button>
      </div>
    </div>
  );
}
