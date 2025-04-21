import { useState } from "react";
import { useSelector } from "react-redux";
export default function PostTo({
  setPrivatePost,
  users,
  setVisible,
  visible,
}: {
  setPrivatePost: (privatePost: boolean) => void;
  users: any[];
  setVisible: (visible: any[]) => void;
  visible: string[];
}) {
  const handleChange = (e: any) => {
    if (e.target.value === "class") {
      setPrivatePost(false);
    } else {
      setPrivatePost(true);
    }
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [postIndividual, setPostIndividual] = useState(false);
  const handleSelect = (user: string, currentVisible: string[]) => {
    const isSelected = currentVisible.includes(user);
    const updatedList = isSelected
      ? currentVisible.filter((u) => u !== user)
      : [...currentVisible, user];
    setVisible(updatedList);
  };
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
              setVisible(["All Users"]);
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
              setVisible([]);
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
          className="d-flex align-items-center mt-2 ms-4 wd-pazza-font-11pt"
        >
          <div>
            <label
              htmlFor="wd-pazza-select-visible-to"
              className="form-label wd-pazza-font-11pt wd-pazza-black mb-0 ms-1"
            >
              Select who can view your post
            </label>
            <ul
              id="wd-pazza-select-visible-to"
              className="list-unstyled border rounded p-2 wd-pazza-black wd-pazza-font-11pt"
            >
              <li key="instructor" className="form-check">
                <input
                  id="wd-pazza-visible-to-instructor"
                  className="form-check-input me-2"
                  type="checkbox"
                  value="Instructor"
                  onChange={() => handleSelect("Instructor", visible)}
                />
                <label
                  htmlFor="wd-pazza-visible-to-instructor"
                  className="form-check-label"
                >
                  Instructor
                </label>
              </li>
              <li key="All Users" className="form-check">
                <input
                  id="wd-pazza-visible-to-all"
                  className="form-check-input me-2"
                  type="checkbox"
                  value="All Users"
                  onChange={() => handleSelect("All Users", visible)}
                />
                <label
                  htmlFor="wd-pazza-visible-to-all"
                  className="form-check-label"
                >
                  All Users
                </label>
              </li>
              {users &&
                users.map(
                  (user: any) =>
                    user._id !== currentUser._id && (
                      <li key={user._id} className="form-check">
                        <input
                          id={`wd-pazza-visible-to-${user._id}`}
                          type="checkbox"
                          className="form-check-input me-2"
                          value={user._id}
                          onChange={() => handleSelect(user._id, visible)}
                        />
                        <label
                          htmlFor={`wd-pazza-visible-to-${user._id}`}
                          className="form-check-label"
                        >
                          {user.firstName} {user.lastName}
                        </label>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
