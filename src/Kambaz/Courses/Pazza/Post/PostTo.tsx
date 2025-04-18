import { useState } from "react";
export default function PostTo({
  setPrivatePost,
  users,
}: {
  setPrivatePost: (privatePost: boolean) => void;
  users: any[];
}) {
  const handleChange = (e: any) => {
    if (e.target.value === "class") {
      setPrivatePost(false);
    } else {
      setPrivatePost(true);
    }
  };
  const [postIndividual, setPostIndividual] = useState(false);
  return (
    <div id="wd-pazza-post-to-screen">
      <div className="d-flex align-content-center mt-3">
        <div className="ms-4">
          <input
            id="wd-pazza-post-to-class"
            type="radio"
            className="form-check-input me-2"
            name="post-to"
            value="class"
            onChange={(e) => {
              handleChange(e);
              setPostIndividual(false);
            }}
            defaultChecked
          />
          <label
            htmlFor="wd-pazza-post-to-class"
            className="form-check-label wd-pazza-font-lucida wd-pazza-dark-grey wd-pazza-font-11pt"
          >
            Entire Class
          </label>
        </div>
        <div className="ms-4">
          <input
            id="wd-pazza-post-to-individual-instructor"
            type="radio"
            className="form-check-input me-2"
            name="post-to"
            value="individual"
            onChange={(e) => {
              handleChange(e);
              setPostIndividual(true);
            }}
          />
          <label
            htmlFor="wd-pazza-post-to-individual-instructor"
            className="form-check-label wd-pazza-font-lucida wd-pazza-dark-grey wd-pazza-font-11pt"
          >
            Individual Students(s) / Instructor(s)
          </label>
        </div>
      </div>
      {postIndividual && (
        <div
          id="wd-pazza-visible-to"
          className="d-flex align-items-center mt-2 ms-4"
        >
          <select
            id="wd-pazza-select-visible-to"
            className="form-select w-50 me-2"
          >
            <option value="INSTRUCTORS">Instructors</option>
            <option value="ALL">All Users</option>
            {users && (
              <div>
                {users.map((user) => (
                  <option value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
              </div>
            )}
          </select>
          <label
            htmlFor="wd-pazza-select-visible-to"
            className="form-label wd-pazza-font-11pt wd-pazza-dark-grey mt-2"
          >
            Select users who can view your post
          </label>
        </div>
      )}
    </div>
  );
}
