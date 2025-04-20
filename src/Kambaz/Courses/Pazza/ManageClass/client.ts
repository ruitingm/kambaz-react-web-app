import axios from "axios";
import { Folder } from "../FolderReducer";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const FOLDER_API = `${REMOTE_SERVER}/api/folders`;
export const updateFolder = async (folder: Folder) => {
  const { data } = await axiosWithCredentials.put(
    `${FOLDER_API}/${folder._id}`,
    folder
  );
  return data;
};
export const deleteFolder = async (folderId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${FOLDER_API}/${folderId}`
  );
  return data;
};
export const findAllFolders = async () => {
  const response = await axiosWithCredentials.get(`${FOLDER_API}`);
  return response.data;
};
