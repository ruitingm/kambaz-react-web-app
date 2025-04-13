import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import AssignmentEditorContainer from "./EditorContainer";
import { addAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
import * as courseClient from "../client";
import * as assignmentClient from "./client";

const formatDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const padMonth = month < 10 ? "0" + month : month.toString();
  const day = date.getDate();
  const padDate = day < 10 ? "0" + day : day.toString();
  return `${date.getFullYear()}-${padMonth}-${padDate}`;
};
export default function AssignmentEditor() {
  const { aid } = useParams();
  const { cid } = useParams();
  const navigate = useNavigate();
  const { assignments } = useSelector(
    (state: any) => state.assignmentsReducer
  ) as { assignments: any[] };
  const dispatch = useDispatch();
  const assignment = assignments.find((a) => a._id === aid);
  const [assignmentPoints, setAssignmentPoints] = useState(
    assignment?.points ?? "100"
  );
  const [assignmentTitle, setAssignmentTitle] = useState(
    assignment?.title ?? "New Assignment Title"
  );
  const [assignmentDueDate, setAssignmentDueDate] = useState(
    assignment?.due ?? formatDate(new Date())
  );
  const [assignmentAvailableDate, setAssignmentAvailableDate] = useState(
    assignment?.available ?? formatDate(new Date())
  );
  const [assignmentUntilDate, setAssignmentUntilDate] = useState(
    assignment?.until ?? formatDate(new Date())
  );
  const [assignmentDescription, setAssignmentDescription] = useState(
    assignment?.description ?? "Assignment Description"
  );
  const addAssignmentHandler = async () => {
    const newAssignment = await courseClient.createAssignmentForCourse(cid!, {
      _id: aid,
      title: assignmentTitle,
      course: cid,
      description: assignmentDescription,
      due: assignmentDueDate,
      until: assignmentUntilDate,
      available: assignmentAvailableDate,
      points: assignmentPoints,
    });
    dispatch(addAssignment(newAssignment));
    setAssignmentTitle("");
    setAssignmentDescription("");
    setAssignmentDueDate("");
    setAssignmentAvailableDate("");
    setAssignmentDueDate("");
    setAssignmentPoints("");
  };
  const updateAssignmentHandler = async (assignment: any) => {
    await assignmentClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };
  return (
    <div id="wd-assignments-editor">
      <AssignmentEditorContainer
        assignmentTitle={assignmentTitle}
        assignmentDueDate={assignmentDueDate}
        assignmentAvailableDate={assignmentAvailableDate}
        assignmentUntilDate={assignmentUntilDate}
        assignmentPoints={assignmentPoints}
        assignmentDescription={assignmentDescription}
        setAssignmentTitle={setAssignmentTitle}
        setAssignmentDueDate={setAssignmentDueDate}
        setAssignmentUntilDate={setAssignmentUntilDate}
        setAssignmentAvailableDate={setAssignmentAvailableDate}
        setAssignmentPoints={setAssignmentPoints}
        setAssignmentDescription={setAssignmentDescription}
      />
      <div>
        {assignment?.editing && (
          <>
            <button
              className="btn btn-danger text-center text-white float-end me-2"
              onClick={() => {
                updateAssignmentHandler({
                  ...assignment,
                  title: assignmentTitle,
                  due: assignmentDueDate,
                  description: assignmentDescription,
                  until: assignmentUntilDate,
                  available: assignmentAvailableDate,
                  points: assignmentPoints,
                  editing: false,
                });
                navigate(`/Kambaz/Courses/${cid}/Assignments`);
              }}
            >
              Save Edit
            </button>
            <button
              className="btn btn-secondary text-center text-black float-end me-1"
              onClick={() => {
                navigate(`/Kambaz/Courses/${cid}/Assignments`);
              }}
            >
              Cancel
            </button>
          </>
        )}
        {!assignment?.editing && (
          <>
            <button
              className="btn btn-danger text-center text-white float-end me-2"
              onClick={() => {
                addAssignmentHandler();
                navigate(`/Kambaz/Courses/${cid}/Assignments`);
              }}
            >
              Add
            </button>
            <button
              className="btn btn-secondary text-center text-black float-end me-1"
              onClick={() => {
                updateAssignmentHandler({ ...assignment, editing: false });
                navigate(`/Kambaz/Courses/${cid}/Assignments`);
              }}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}
