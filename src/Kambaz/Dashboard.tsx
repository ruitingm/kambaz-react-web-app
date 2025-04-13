import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addEnrollment,
  deleteEnrollment,
  Enrollment,
} from "./Enrollment/reducer";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useState, useEffect } from "react";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
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
  };
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button
          className="btn btn-primary float-end me-3 mt-2"
          onClick={() => {
            setEnrolling(!enrolling);
          }}
        >
          Enrollments
        </button>
      </h1>
      <hr />
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
      <h2 id="wd-dashboard-published">
        {enrolling ? `All Courses ` : `My Courses `} ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-all-courses">
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
                    {isFaculty && !enrolling && (
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
                    {enrolling && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(course._id, !course.enrolled);
                        }}
                        className={`btn ${
                          course.enrolled ? "btn-danger" : "btn-success"
                        } float-end`}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
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
    </div>
  );
}
