import { GoTriangleDown } from "react-icons/go";

export default function ActionButton() {
  return (
    <div>
      <button
        id="wd-pazza-post-action"
        className="btn wd-pazza-blue wd-pazza-font-10pt wd-pazza-bg-light-grey float-end p-0 ps-1 wd-pazza-round-left-bottom-corner border border-1"
      >
        Actions
        <GoTriangleDown />
      </button>
    </div>
  );
}
