import { FaFolder } from "react-icons/fa";
import { useParams, useLocation, Link } from "react-router";
import { setFolders } from "../folderReducer";
import { useEffect, useState } from "react";
import * as courseClient from "../../client";
import { useDispatch } from "react-redux";
export default function FolderFilter({
  setFid,
}: {
  setFid: (fid: string) => void;
}) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const [folder, setFolder] = useState<string[]>();
  const dispatch = useDispatch();
  const fetchFoldersForCourse = async () => {
    try {
      const allFolders = await courseClient.findFoldersForCourse(cid as string);
      setFolder(allFolders[0].folder);
      dispatch(setFolders(allFolders));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchFoldersForCourse();
  }, [cid]);
  return (
    <div
      id="wd-pazza-folder-filter"
      className="d-flex wd-pazza-bg-light-grey flex-fill me-4"
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
        {folder?.map((f: string) => (
          <Link
            key={f}
            className={`wd-pazza-folder-filter-tab wd-text-no-decor align-content-center ${
              pathname.includes(f) ? "wd-pazza-active-bold" : ""
            }`}
            to={`/Kambaz/Courses/${cid}/Pazza/QandA/Folder/${f}`}
            onClick={() => setFid(f)}
          >
            {f}
          </Link>
        ))}
      </div>
    </div>
  );
}
