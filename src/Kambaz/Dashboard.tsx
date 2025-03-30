import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addEnrollment,
  deleteEnrollment,
  Enrollment,
} from "./Enrollment/reducer";
import * as userClient from "./Account/client";
export default function Dashboard({
  courses,
  course,
  setCourse,
  allCourses,
  addNewCourse,
  deleteCourse,
  updateCourse,
  numberClicks,
  setNumberClicks,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  allCourses: any[];
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  numberClicks: number;
  setNumberClicks: (num: number) => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const isStudent = currentUser.role === "STUDENT";
  const enrollCourse = async (courseId: string) => {
    await userClient.enrollCourse(courseId);
    const newEnrollment: Enrollment = {
      user: currentUser._id as string,
      course: courseId as string,
    };
    dispatch(addEnrollment(newEnrollment));
  };
  const unenrollCourse = async (courseId: string) => {
    await userClient.unenrollCourse(courseId);
    dispatch(deleteEnrollment({ user: currentUser._id, course: courseId }));
    console.log("try to unenroll:", courseId);
  };
  return (
    <div id="wd-dashboard">
      {isStudent && numberClicks < 2 && (
        <>
          <h1 id="wd-dashboard-title">
            Dashboard
            <button
              className="btn btn-primary float-end me-3 mt-2"
              onClick={() => {
                setNumberClicks(numberClicks + 1);
              }}
            >
              Enrollments
            </button>
          </h1>
          <hr />
        </>
      )}
      {(!isStudent || (isStudent && numberClicks >= 2)) && (
        <>
          <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        </>
      )}
      {isFaculty && (
        <>
          <h5 className="align-self-center m-0">
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            id="wd-dashboard-course-name"
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            id="wd-dashboard-course-description"
            className="form-control col-12"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      {isStudent && numberClicks === 1 && (
        <>
          <h2 id="wd-dashboard-published">All Courses({allCourses.length})</h2>
          <hr />
          <div id="wd-dashboard-all-courses">
            <Row xs={1} md={5} className="g-4">
              {allCourses.map((course) => (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                  <Card key={course._id}>
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <Card.Img
                        src={course.img}
                        variant="top"
                        width="100%"
                        height={160}
                      />
                      <Card.Body className="card-body">
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}
                        </Card.Title>
                        <Card.Text
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}
                        </Card.Text>
                        <Button variant="primary"> Go </Button>
                        {courses.some((c) => c._id === course._id) ? (
                          <Button
                            variant="danger"
                            className="float-end"
                            onClick={(e) => {
                              e.preventDefault();
                              unenrollCourse(course._id);
                            }}
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button
                            variant="success"
                            className="float-end"
                            onClick={(e) => {
                              e.preventDefault();
                              enrollCourse(course._id);
                            }}
                          >
                            Enroll
                          </Button>
                        )}
                      </Card.Body>
                    </Link>
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    ></Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
      {((isStudent && numberClicks >= 2) ||
        isFaculty ||
        (!isStudent && !isFaculty)) && (
        <>
          <h2 id="wd-dashboard-published">
            Published Courses ({courses.length})
          </h2>
          <hr />
          <div id="wd-dashboard-courses">
            <Row xs={1} md={5} className="g-4">
              {courses.map((course) => (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                  <Card key={course._id}>
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <Card.Img
                        src={course.img}
                        variant="top"
                        width="100%"
                        height={160}
                      />
                      <Card.Body className="card-body">
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}
                        </Card.Title>
                        <Card.Text
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}
                        </Card.Text>
                        <Button variant="primary"> Go </Button>
                        {isFaculty && (
                          <>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              id="wd-edit-course-click"
                              onClick={(e) => {
                                e.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </div>
  );
}
function dispatch(arg0: Promise<void>) {
  throw new Error("Function not implemented.");
}
