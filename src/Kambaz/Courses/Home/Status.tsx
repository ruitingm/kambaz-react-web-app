import { useSelector } from "react-redux";

export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  return (
    <div id="wd-course-status" className="ms-2">
      {isFaculty && (
        <>
          <h2>Course Status</h2>
          <button className="btn btn-secondary col-6 mb-1">Unpublish</button>
          <button className="btn btn-secondary col-6 mb-1">Publish</button>
          <br />
          <button className="btn btn-secondary col-12 mb-1">
            Import Existing Content
          </button>
          <br />
          <button className="btn btn-secondary col-12 mb-1">
            Import from Commons
          </button>
          <br />
          <button className="btn btn-secondary col-12 mb-1">
            Choose Home Page
          </button>
          <br />
          <button className="btn btn-secondary col-12 mb-1">
            View Course Stream
          </button>
          <br />
          <button className="btn btn-secondary col-12 mb-1">
            New Announcement
          </button>
          <br />
          <button className="btn btn-secondary col-12 mb-1">
            New Analytics
          </button>
          <br />
          <button className="btn btn-secondary col-12 mb-1">
            View Course Notifications
          </button>
        </>
      )}
    </div>
  );
}
