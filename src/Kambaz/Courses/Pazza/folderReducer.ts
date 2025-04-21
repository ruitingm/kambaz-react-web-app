import { createSlice } from "@reduxjs/toolkit";
export type Folder = {
  _id: string;
  folder: string[];
};
const initialState = {
  folders: [] as Folder[],
};
const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setFolders: (state, { payload: folders }: { payload: Folder[] }) => {
      state.folders = folders;
    },
    addFolder: (state, { payload: folder }: { payload: Folder }) => {
      state.folders = [...state.folders, folder] as Folder[];
    },
    deleteFolder: (state, { payload: folderId }) => {
      state.folders = state.folders.filter((f: Folder) => f._id !== folderId);
    },
    updateFolder: (state, { payload: folder }: { payload: Folder }) => {
      state.folders = state.folders.map((f: Folder) =>
        f._id === folder._id ? folder : f
      ) as Folder[];
    },
  },
});
export const { setFolders, addFolder, deleteFolder, updateFolder } =
  foldersSlice.actions;
export default foldersSlice.reducer;
