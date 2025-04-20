import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { Folder } from "../FolderReducer";
export default function SelectFolders({
  category,
  setCategory,
}: {
  category: string[];
  setCategory: (category: string[]) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { folders } = useSelector((state: any) => state.foldersReducer) as {
    folders: Folder[];
  };
  const links = folders[0].folder;
  const { cid } = useParams();
  const [selectedButton, setSeelectedButton] = useState<string[]>([]);
  const highlightClick = (button: string) => {
    setSeelectedButton((prev) => {
      return prev.includes(button)
        ? prev.filter((b) => b !== button)
        : [...prev, button];
    });
  };
  const handleAddCategory = (category: string, currentCategory: string[]) => {
    const isSelected = currentCategory.includes(category);
    const updatedCategory = isSelected
      ? currentCategory.filter((c: string) => c !== category)
      : [...currentCategory, category];
    setCategory(updatedCategory);
  };
  return (
    <div
      id="wd-pazza-select-folder-screen"
      className="mt-3 align-content-center"
    >
      <div
        id="wd-pazza-select-folder"
        className="d-flex justify-content-between me-4"
      >
        {links.map((link) => (
          <button
            key={link}
            className={`wd-pazza-blue wd-pazza-font-lucida wd-pazza-font-11pt p-0 ps-1 pe-1 rounded-1 wd-text-no-decor btn ${
              selectedButton.includes(link)
                ? "wd-pazza-bg-blue text-white"
                : "wd-pazza-bg-light-blue"
            }`}
            onClick={(e) => {
              e.preventDefault();
              highlightClick(link);
              handleAddCategory(link, category);
            }}
          >
            {link}
          </button>
        ))}
      </div>
      {currentUser.role === "FACULTY" && (
        <Link
          id="wd-pazza-manage-folder"
          className="wd-pazza-blue wd-pazza-font-10pt wd-pazza-font-lucida wd-text-no-decor ps-1"
          to={`/Kambaz/Courses/${cid}/Pazza/ManageClass/ManageFolders`}
        >
          manage and record folders
        </Link>
      )}
    </div>
  );
}
