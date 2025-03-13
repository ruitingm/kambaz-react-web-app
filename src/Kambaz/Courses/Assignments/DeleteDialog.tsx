import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
export default function DeleteDialog({
  assignmentId,
}: {
  assignmentId: string;
}) {
  const dispatch = useDispatch();
  return (
    <div
      id="wd-add-assignment-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Confirm Deletion
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this assignment?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              onClick={() => {
                dispatch(deleteAssignment(assignmentId));
              }}
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
