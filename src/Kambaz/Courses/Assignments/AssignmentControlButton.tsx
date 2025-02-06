import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButton() {
  return (
    <div id="wd-assignment-ctrl-btn" className="float-end">
      <span className="badge badge-pill badge-secondary border text-black fs-6 rounded-5 me-2">
        40% of Total
      </span>
      <BsPlus className="fs-3 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
