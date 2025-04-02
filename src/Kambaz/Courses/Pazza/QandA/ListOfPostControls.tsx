import { RxTriangleLeft } from "react-icons/rx";
import { BiSolidInfoSquare } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";

export default function LOPS() {
  return (
    <div id="wd-pazza-lopc" className="wd-pazza-flex-items wd-pazza-lopc-bar">
      <div id="wd-pazza-lopc-toggle">
        <button className="border-0 p-0">
          <RxTriangleLeft className="wd-pazza-dark-grey fs-3 border border-1 border-start-0 border-bottom-0 border-top-0 border-secondary-subtle" />
        </button>
      </div>
      <div
        id="wd-pazza-lopc-tab"
        className="wd-pazza-flex-items align-content-center flex-grow-1 ps-1 pe-2"
      >
        <div className="wd-pazza-lopc-tab align-content-center wd-pazza-font-9pt">
          Unread
        </div>
        <div className="wd-pazza-lopc-tab align-content-center wd-pazza-font-9pt ms-1">
          Updated
        </div>
        <div className="wd-pazza-lopc-tab align-content-center wd-pazza-font-9pt ms-1">
          Unresolved
        </div>
      </div>
      <div className="border border-1 border-top-0 border-bottom-0 border-start-0 border-secondary-subtle pe-1">
        <BiSolidInfoSquare className="fs-5 wd-pazza-yellow" />
        <GoTriangleDown className="wd-pazza-dark-grey" />
      </div>
      <div className="ps-1 wd-pazza-dark-grey">
        <IoIosSettings />
        <GoTriangleDown />
      </div>
    </div>
  );
}
