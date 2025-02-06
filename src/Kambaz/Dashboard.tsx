import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashbaord-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />
      <div id="wd-dashboard-course" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img src="/images/reactjs.png" width="100%" height={160}></img>
                <div className="card-body">
                  <h5 className="wd-dashbaord-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img src="/images/python.jpeg" width="100%" height={160}></img>
                <div className="card-body">
                  <h5 className="wd-dashbaord-course-title card-title">
                    CS1235 Python
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img src="/images/C.jpg" width="100%" height={160}></img>
                <div className="card-body">
                  <h5 className="wd-dashbaord-course-title card-title">
                    CS1236 C
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img src="/images/C++.png" width="100%" height={160}></img>
                <div className="card-body">
                  <h5 className="wd-dashbaord-course-title card-title">
                    CS1237 C++
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img src="/images/java.jpg" width="100%" height={160}></img>
                <div className="card-body">
                  <h5 className="wd-dashbaord-course-title card-title">
                    CS1238 Java
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img src="/images/html.jpeg" width="100%" height={160}></img>
                <div className="card-body">
                  <h5 className="wd-dashbaord-course-title card-title">
                    CS1239 HTML
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img src="/images/ml.jpg" width="100%" height={160}></img>
                <div className="card-body">
                  <h5 className="wd-dashbaord-course-title card-title">
                    CS1240 Machine Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kambaz/Courses/1241/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img src="/images/math.jpg" width="100%" height={160}></img>
                <div className="card-body">
                  <h5 className="wd-dashbaord-course-title card-title">
                    CS1241 Discrete Math
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
