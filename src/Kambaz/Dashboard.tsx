import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashbaord-title">Dashboard</h1>
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-course">
        <Link
          to="/Kambaz/Courses/1234/Home"
          className="wd-dashboard-course-link"
        >
          <img src="/images/reactjs.png" width={200}></img>
          <div>
            <h5> CS1234 React JS </h5>
            <p className="wd-dashboard-course-title">
              {" "}
              Full Stack Software Developer
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div id="wd-dashboard-course">
        <Link
          to="/Kambaz/Courses/1235/Home"
          className="wd-dashboard-course-link"
        >
          <img src="/images/python.jpeg" width={200}></img>
          <div>
            <h5> CS1235 Python</h5>
            <p className="wd-dashboard-course-title">
              {" "}
              Full Stack Software Developer
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div id="wd-dashboard-course">
        <Link
          to="/Kambaz/Courses/1236/Home"
          className="wd-dashboard-course-link"
        >
          <img src="/images/C.jpg" width={200}></img>
          <div>
            <h5> CS1236 C</h5>
            <p className="wd-dashboard-course-title">
              {" "}
              Full Stack Software Developer
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div id="wd-dashboard-course">
        <Link
          to="/Kambaz/Courses/1237/Home"
          className="wd-dashboard-course-link"
        >
          <img src="/images/C++.png" width={200}></img>
          <div>
            <h5> CS1237 C++</h5>
            <p className="wd-dashboard-course-title">
              {" "}
              Full Stack Software Developer
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div id="wd-dashboard-course">
        <Link
          to="/Kambaz/Courses/1238/Home"
          className="wd-dashboard-course-link"
        >
          <img src="/images/java.jpg" width={200}></img>
          <div>
            <h5> CS1238 Java</h5>
            <p className="wd-dashboard-course-title">
              {" "}
              Full Stack Software Developer
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div id="wd-dashboard-course">
        <Link
          to="/Kambaz/Courses/1239/Home"
          className="wd-dashboard-course-link"
        >
          <img src="/images/html.jpeg" width={200}></img>
          <div>
            <h5> CS1239 HTML</h5>
            <p className="wd-dashboard-course-title">
              {" "}
              Full Stack Software Developer
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div id="wd-dashboard-course">
        <Link
          to="/Kambaz/Courses/1240/Home"
          className="wd-dashboard-course-link"
        >
          <img src="/images/ml.jpg" width={200}></img>
          <div>
            <h5> CS1240 Machine Learning</h5>
            <p className="wd-dashboard-course-title">
              {" "}
              Full Stack Software Developer
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div id="wd-dashboard-course">
        <Link
          to="/Kambaz/Courses/1241/Home"
          className="wd-dashboard-course-link"
        >
          <img src="/images/math.jpg" width={200}></img>
          <div>
            <h5> CS1241 Discrete Math</h5>
            <p className="wd-dashboard-course-title">
              {" "}
              Full Stack Software Developer
            </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
