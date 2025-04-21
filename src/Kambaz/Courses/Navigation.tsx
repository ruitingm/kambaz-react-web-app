import { Link, useParams, useLocation } from "react-router";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Pazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 ">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kambaz/Courses/${cid}/${link}`}
          id={`wd-course-${link}-link`}
          className={`list-group-item border border-0 text-danger pe-3 ps-2 
            ${pathname.includes(link) ? "active" : ""}
            `}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
