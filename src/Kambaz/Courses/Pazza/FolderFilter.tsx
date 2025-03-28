import { FaFolder } from "react-icons/fa";
import { useParams, useLocation } from "react-router";

export default function FolderFilter() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "hw1",
    "hw2",
    "hw3",
    "hw4",
    "hw5",
    "hw6",
    "project",
    "exam",
    "logistics",
    "other",
    "office_hours",
  ];
  return (
    <div
      id="wd-pazza-folder-filter"
      className="d-flex wd-pazza-bg-light-grey flex-fill"
    >
      <div
        id="wd-pazza-folder-filter-liveqa"
        className="wd-pazza-folder-filter-tab border border-1 border-top-0 border-secondary-subtle pt-1 ps-1 pe-2 align-content-center overflow-hidden"
      >
        <a
          href={`#/Kambaz/Courses/${cid}/Pazza/liveqa`}
          className="wd-text-no-decor wd-pazza-dark-grey align-content-center "
        >
          <FaFolder className="fs-4 me-2 pb-1" />
          LIVE Q&A
        </a>
      </div>
      <div
        id="wd-pazza-folder-filter-drafts"
        className="wd-pazza-folder-filter-tab border border-1 border-top-0 border-start-0 border-secondary-subtle pt-1 ps-1 pe-2 align-content-center"
      >
        <a
          href={`#/Kambaz/Courses/${cid}/Pazza/drafts`}
          className="wd-text-no-decor wd-pazza-dark-grey align-content-center "
        >
          <FaFolder className="fs-4 me-2 pb-1" />
          Drafts
        </a>
      </div>
      <div className="border border-1 border-top-0 border-end-0 border-start-0 border-secondary-subtle pt-1 ps-3 align-content-center">
        <FaFolder className="wd-pazza-blue fs-4 me-2 pb-1 " />
      </div>
      <div
        id="wd-pazza-folder-filter-item"
        className="wd-pazza-flex-items flex-grow-1 border border-1 border-top-0 border-start-0 border-secondary-subtle pt-1 align-content-center"
      >
        {links.map((link) => (
          <a
            className={`wd-pazza-folder-filter-tab wd-text-no-decor align-content-center ${
              pathname.includes(link) ? "wd-pazza-active-bold" : ""
            }`}
            href={`#/Kambaz/Courses/${cid}/Pazza/${link}`}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
