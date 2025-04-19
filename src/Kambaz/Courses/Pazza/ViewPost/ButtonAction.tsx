import { useEffect, useState } from "react";
import * as client from "../client";
import { useDispatch } from "react-redux";
import { deletePost } from "../postReducer";
import { useNavigate } from "react-router";
export default function ActionButton({
  setEdit,
  postId,
}: {
  setEdit: (edit: boolean) => void;
  postId?: string;
}) {
  const [selectedAction, setSelectedAction] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleActionChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setSelectedAction(value);
    if (value === "edit") {
      setEdit(true);
    } else if (value === "delete") {
      await deletePostHandler(postId!);
    }
  };
  const deletePostHandler = async (pid: string) => {
    try {
      await client.deletePost(pid);
      dispatch(deletePost(pid));
      navigate(-1);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  useEffect(() => {
    setSelectedAction("");
  }, []);
  return (
    <div id="wd-pazza-action-button">
      <select
        id="wd-pazza-post-action"
        className="btn wd-pazza-blue wd-pazza-font-11pt wd-pazza-bg-light-grey float-end p-0 ps-1 wd-pazza-round-left-bottom-corner border border-1 dropdown-toggle"
        value={selectedAction}
        onChange={handleActionChange}
      >
        <option id="wd-pazza-post-action-option" value="" disabled selected>
          action
        </option>
        <option id="wd-pazza-post-action-edit" value="edit">
          Edit
        </option>
        <option id="wd-pazza-post-action-delete" value="delete">
          Delete
        </option>
      </select>
    </div>
  );
}
