import { Link, useLocation, useParams } from "react-router";

export default function TOC() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "bg-white" : "");
  return (
    <div
      id="wd-pazza-manage-class-toc"
      className="d-flex wd-pazza-bg-light-grey wd-pazza-dark-grey justify-content-around"
    >
      <div className="col-10 d-flex justify-content-between wd-pazza-font-11pt pt-1">
        <div className={`col-1 text-center ${active("GeneralSetting")}`}>
          <Link
            to={`/Kambaz/Courses/${cid}/Pazza/ManageClass/GeneralSetting`}
            className="wd-text-no-decor wd-pazza-black wd-pazza-font-lucida"
          >
            General Setting
          </Link>
        </div>
        <div className={`col-1 text-center ${active("CustomizeQA")}`}>
          <Link
            to={`/Kambaz/Courses/${cid}/Pazza/ManageClass/CustomizeQA`}
            className="wd-text-no-decor wd-pazza-black wd-pazza-font-lucida"
          >
            Customize Q&A
          </Link>
        </div>

        <div className={`col-1 text-center ${active("ManageFolders")}`}>
          <Link
            to={`/Kambaz/Courses/${cid}/Pazza/ManageClass/ManageFolders`}
            className="wd-text-no-decor wd-pazza-black wd-pazza-font-lucida"
          >
            Manage Folders
          </Link>
        </div>
        <div className={`col-1 text-center ${active("ManageEnrollment")}`}>
          <Link
            to={`/Kambaz/Courses/${cid}/Pazza/ManageClass/ManageEnrollment`}
            className="wd-text-no-decor wd-pazza-black wd-pazza-font-lucida"
          >
            Manage Enrollment
          </Link>
        </div>
        <div className={`col-1 text-center ${active("CreateGroups")}`}>
          <Link
            to={`/Kambaz/Courses/${cid}/Pazza/ManageClass/CreateGroups`}
            className="wd-text-no-decor wd-pazza-black wd-pazza-font-lucida"
          >
            Create Groups
          </Link>
        </div>
        <div className={`col-2 text-center ${active("CustomizeCoursePage")}`}>
          <Link
            to={`/Kambaz/Courses/${cid}/Pazza/ManageClass/CustomizeCoursePage`}
            className="wd-text-no-decor wd-pazza-black wd-pazza-font-lucida"
          >
            Customize
            <br />
            Course Page
          </Link>
        </div>
        <div className={`col-2 text-center ${active("Settings")}`}>
          <Link
            to={`/Kambaz/Courses/${cid}/Pazza/ManageClass/Settings`}
            className="wd-text-no-decor wd-pazza-black wd-pazza-font-lucida"
          >
            Pazza Network <br /> Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
