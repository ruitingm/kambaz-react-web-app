import axios from "axios";
import { Post } from "./postReducer";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const POST_API = `${REMOTE_SERVER}/api/posts`;
export const updatePost = async (post: Post) => {
  const { data } = await axiosWithCredentials.put(
    `${POST_API}/${post._id}`,
    post
  );
  return data;
};
