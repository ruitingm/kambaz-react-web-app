import { Link } from "react-router";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Courses/1234/Home"
        id="wd-course-home-link"
        className="list-group-item active border border-0"
      >
        Home
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Modules"
        id="wd-course-home-link"
        className="list-group-item text-danger border border-0"
      >
        Modules
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Piazza"
        id="wd-course-home-link"
        className="list-group-item text-danger border border-0"
      >
        Piazza
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Zoom"
        id="wd-course-home-link"
        className="list-group-item text-danger border border-0"
      >
        Zoom
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Assignments"
        id="wd-course-home-link"
        className="list-group-item text-danger border border-0"
      >
        Assignments
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Quizzes"
        id="wd-course-home-link"
        className="list-group-item text-danger border border-0"
      >
        Quizzes
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Grades"
        id="wd-course-home-link"
        className="list-group-item text-danger border border-0"
      >
        Grades
      </Link>
      <Link
        to="/Kambaz/Courses/1234/People"
        id="wd-course-home-link"
        className="list-group-item text-danger border border-0"
      >
        People
      </Link>
    </div>
  );
}
