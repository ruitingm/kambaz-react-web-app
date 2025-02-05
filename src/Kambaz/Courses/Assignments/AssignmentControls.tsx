import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
  return (
    <div id="wd-assignment-ctrl" className="text-nowrap">
      <div
        id="wd-assignment-search"
        className="input-group mb-3 float-start w-25"
      >
        <span className="input-group-text bg-transparent rounded-right-1 ps-2 pe-2 border border-end-0">
          <CiSearch className="fs-4" />
        </span>
        <input
          type="text"
          className="form-control ps-2 rounded-left-1 p-0 fs-5 border-start-0"
          placeholder="Search..."
        ></input>
      </div>
      <div id="wd-add-assignment">
        <button className=" float-end btn btn-lg btn-danger fs-5 ms-2 rounded-1 text-white border border-0 text-center pt-1 pb-1">
          <BsPlus
            className="position-relative me-1 fs-3"
            style={{ bottom: "1px" }}
          ></BsPlus>
          Assignment
        </button>
      </div>
      <div id="wd-add-assignment-group">
        <button className="float-end btn btn-lg btn-secondary fs-5 text-black border border-0 text-center rounded-1 pt-1 pb-1">
          <BsPlus
            className="position-relative me-1 fs-3"
            style={{ bottom: "1px" }}
          ></BsPlus>
          Group
        </button>
      </div>
    </div>
  );
}
