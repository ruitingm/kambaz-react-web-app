import { useDispatch, useSelector } from "react-redux";
import * as folderClient from "./client.ts";
import { Folder, updateFolder } from "../FolderReducer.ts";
import { useState } from "react";
import { FaAlignJustify, FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useParams } from "react-router-dom";
export default function ManageFoldersScreen() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { folders } = useSelector((state: any) => state.foldersReducer) as {
    folders: Folder[];
  };
  const [folderName, setFolderName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFolders, setSelectedFolders] = useState<string[]>([]);
  const courseFolder = folders[0].folder;
  const [clickedButton, setClickedButton] = useState("");
  const [newFolderName, setNewFolderName] = useState("");
  const [editError, setEditError] = useState("");
  const addFolderHandler = async (
    folderName: string,
    currentFolders: string[]
  ) => {
    setErrorMessage("");
    if (folderName.trim() === "") {
      setErrorMessage("Must provide a name for the folder.");
      return;
    }
    if (currentFolders.includes(folderName)) {
      setErrorMessage("Folder already exist. Please choose another name.");
      return;
    }
    const updatedFolder = {
      _id: cid as string,
      folder: [...currentFolders, folderName],
    };
    await folderClient.updateFolder(updatedFolder);
    dispatch(updateFolder(updatedFolder));
    setFolderName("");
  };
  const handleSelectedFolders = (name: string, currentFolders: string[]) => {
    if (currentFolders.includes(name)) {
      setSelectedFolders(currentFolders.filter((item) => item !== name));
    } else {
      setSelectedFolders([...currentFolders, name]);
    }
  };
  const deleteFolderHandler = async (
    folderNames: string[],
    currentFolder: string[]
  ) => {
    folderNames.forEach((item) => {
      if (currentFolder.includes(item)) {
        currentFolder = currentFolder.filter((i) => i !== item);
      }
    });
    const updatedFolder = { _id: cid as string, folder: currentFolder };
    await folderClient.updateFolder(updatedFolder);
    dispatch(updateFolder(updatedFolder));
    setSelectedFolders([]);
  };
  const updateFolderHandler = async (currentFolder: string[]) => {
    if (newFolderName.trim() === "") {
      setEditError("Folder name cannot be empty");
      return;
    }
    currentFolder = currentFolder.map((item) =>
      item === clickedButton ? newFolderName : item
    );
    const updatedFolder = { _id: cid as string, folder: currentFolder };
    await folderClient.updateFolder(updatedFolder);
    dispatch(updateFolder(updatedFolder));
    setClickedButton("");
    setEditError("");
  };
  return (
    <div
      id="wd-pazza-manage-folder-screen"
      className="d-flex wd-pazza-font-11pt"
    >
      <div id="wd-pazza-manage-folder-description" className="col-2">
        <div className="border border-1 rounded-1 col-11 wd-pazza-bg-light-blue wd-pazza-blue wd-pazza-font-10pt text-center p-3 pt-2 pb-2 mt-2 ms-1">
          <span className="wd-pazza-font-10pt">
            Create folders to keep your class organized
          </span>
        </div>
      </div>
      <div id="wd-pazza-configure-folder" className="col-10">
        <div id="wd-pazza-configure-folder-title">
          <hr className="mt-1 mb-0 fw-bolder" />
          <h5 className="mt-0 fw-bold mb-0">Configure Class Folders</h5>
          <hr className="mt-0 mb-0" />
          <div className="wd-pazza-font-11pt me-5">
            folders allow you to keep class content organized. When students and
            instructors add a new post, they will be required to specify at
            least one folder for their post.
          </div>
        </div>
        <button className="btn wd-pazza-bg-blue text-white mt-2 pt-1 pb-1 wd-pazza-font-11pt wd-pazza-fit-content">
          Disable folders
        </button>
        <div id="wd-pazza-create-folder" className="mt-2">
          <div className="mb-2">
            <b>Create new folders: </b>
          </div>
          <span>
            Add folders that are relevant for your class. Select 'numbered' to
            create numbered folders (hw1-hw4).
          </span>
          {errorMessage && (
            <div className="wd-pazza-font-11pt wd-pazza-font-lucida alert alert-danger mt-1">
              {errorMessage}
            </div>
          )}
          <div className="d-flex align-items-center mt-2 justify-content-between">
            <div className="col-7 me-2">
              <input
                type="text"
                placeholder="Add a folder(s)"
                defaultValue={folderName}
                className="form-control wd-pazza-font-11pt wd-pazza-fit-content"
                onChange={(e) => setFolderName(e.target.value)}
              />
            </div>
            <input
              id="wd-pazza-create-numbered-folder"
              type="checkbox"
              className="form-check-input me-2"
            />
            <label htmlFor="wd-pazza-create-numbered-folder" className="me-2">
              numbered;
            </label>
            <span>suffix #s:</span>
            <input
              type="text"
              className="form-control wd-pazza-single-input ms-2 me-2 wd-pazza-font-11pt wd-pazza-fit-content"
            />
            <span>-</span>
            <input
              type="text"
              className="form-control wd-pazza-single-input ms-2 me-2 wd-pazza-font-11pt wd-pazza-fit-content"
            />
            <button
              className="btn wd-pazza-bg-blue text-white ps-3 pe-3 wd-pazza-font-11pt wd-pazza-fit-content"
              onClick={() => addFolderHandler(folderName, courseFolder)}
            >
              Add folder
            </button>
          </div>
          <div id="wd-pazza-manage-folder-title" className="mt-3">
            <b>Manage folders</b>
            <br />
            Reorder, delete, edit folder names, or create subfolders. You can
            create up to 2 levels of nesting ("subfolders" and "subfolders to
            subfolders"). Manually sort folders and subfolders using burger
            icon. Click folder icon to show and hide subfolders.
          </div>
        </div>
        <div id="wd-pazza-manage-folder">
          <div className="d-flex mt-3 justify-content-between">
            <div className="wd-pazza-dark-grey d-flex align-items-center w-50">
              <FaTrash
                className="me-2"
                onClick={() =>
                  deleteFolderHandler(selectedFolders, courseFolder)
                }
              />
              <input
                type="text"
                className="form-control wd-pazza-font-11pt wd-pazza-fit-content"
                placeholder="Delete selected folders"
                value={selectedFolders}
              />
            </div>
            <button className="btn wd-pazza-bg-light-grey wd-pazza-font-11pt wd-pazza-fit-content float-end">
              Hide all subfolders
            </button>
          </div>
          <hr />
        </div>
        <div>
          <div id="wd-pazza-manage-subfolders-screen">
            {courseFolder.map((folder: string) => (
              <div
                id="wd-pazza-manage-subfolders"
                className="d-flex justify-content-between align-items-center mb-1 "
                key={folder}
              >
                <div className="d-flex align-items-center w-75">
                  <input
                    id={`wd-pazza-delete-folder-${folder}`}
                    type="checkbox"
                    value={folder}
                    className="form-check-input me-2"
                    onChange={() =>
                      handleSelectedFolders(folder, selectedFolders)
                    }
                  />
                  <FaAlignJustify className="wd-pazza-dark-grey ms-2" />
                  {clickedButton === folder && (
                    <div className="d-flex align-items-center">
                      <input
                        type="text"
                        defaultValue={folder}
                        className="form-control wd-pazza-font-11pt ms-2 "
                        onChange={(e) => setNewFolderName(e.target.value)}
                      />
                      <div className="wd-pazza-red text-nowrap ms-3">
                        {editError}
                      </div>
                    </div>
                  )}
                  {clickedButton !== folder && (
                    <label
                      htmlFor={`wd-pazza-delete-folder-${folder}`}
                      className="wd-pazza-font-11pt border-1 rounded-1 wd-pazza-bg-light-blue wd-pazza-blue ms-2 p-1 text-center"
                    >
                      {folder}
                    </label>
                  )}
                </div>
                <div className="d-flex align-content-center">
                  {clickedButton !== folder && (
                    <>
                      <button
                        className="btn wd-pazza-bg-light-grey wd-pazza-edit-subfolder-btn wd-pazza-font-10pt align-items-center"
                        onClick={() => {
                          setClickedButton(folder);
                        }}
                      >
                        <FaPencil className="wd-pazza-black me-2" />
                        Edit
                      </button>
                      <button className="btn wd-pazza-bg-light-grey wd-pazza-create-subfolder-btn wd-pazza-font-10pt align-items-center">
                        <FaPlus className="wd-pazza-black me-2" />
                        Create Subfoldres
                      </button>
                    </>
                  )}
                  {clickedButton === folder && (
                    <>
                      <button
                        className="btn wd-pazza-bg-light-grey wd-pazza-edit-subfolder-btn wd-pazza-font-10pt align-items-center"
                        onClick={() => updateFolderHandler(courseFolder)}
                      >
                        Save
                      </button>
                      <button
                        className="btn wd-pazza-bg-light-grey wd-pazza-create-subfolder-btn wd-pazza-font-10pt align-items-center"
                        onClick={() => {
                          setClickedButton("");
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
