import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import AssignmentEditorContainer from "./EditorContainer";
import { addAssignment, Assignment, updateAssignment } from "./reducer";
import { useState } from "react";

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
  ) as { assignments: Assignment[] };
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

  return (
    <div id="wd-assignments-editor">
      <AssignmentEditorContainer
        assignmentTitle={assignmentTitle}
        assignmentDueDate={assignmentDueDate}
        assignmentAvailableDate={assignmentAvailableDate}
        assignmentUntilDate={assignmentUntilDate}
        assignmentPoints={assignmentPoints}
        setAssignmentTitle={setAssignmentTitle}
        setAssignmentDueDate={setAssignmentDueDate}
        setAssignmentUntilDate={setAssignmentUntilDate}
        setAssignmentAvailableDate={setAssignmentAvailableDate}
        setAssignmentPoints={setAssignmentPoints}
      />
      <div>
        {assignment?.editing && (
          <>
            <button
              className="btn btn-danger text-center text-white float-end me-2"
              onClick={() => {
                dispatch(
                  updateAssignment({
                    ...assignment,
                    title: assignmentTitle,
                    due: assignmentDueDate,
                    available: assignmentAvailableDate,
                    until: assignmentUntilDate,
                    points: assignmentPoints,
                    editing: false,
                  })
                );
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
                dispatch(
                  addAssignment({
                    title: assignmentTitle,
                    due: assignmentDueDate,
                    available: assignmentAvailableDate,
                    until: assignmentUntilDate,
                    course: cid,
                    points: assignmentPoints,
                    editing: false,
                  })
                );
                navigate(`/Kambaz/Courses/${cid}/Assignments`);
              }}
            >
              Add
            </button>
            <button
              className="btn btn-secondary text-center text-black float-end me-1"
              onClick={() => {
                dispatch(
                  updateAssignment({
                    ...assignment,
                    editing: false,
                  })
                );
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
