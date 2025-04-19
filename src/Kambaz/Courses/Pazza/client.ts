import axios from "axios";
import { Post } from "./postReducer";
import { Reply } from "./replyReducer";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const POST_API = `${REMOTE_SERVER}/api/posts`;
const REPLY_API = `${REMOTE_SERVER}/api/replies`;
export const updatePost = async (post: Post) => {
  const { data } = await axiosWithCredentials.put(
    `${POST_API}/${post._id}`,
    post
  );
  return data;
};
export const deletePost = async (postId: string) => {
  const { data } = await axiosWithCredentials.delete(`${POST_API}/${postId}`);
  return data;
};
export const findRepliesForPost = async (postId: string) => {
  const response = await axiosWithCredentials.get(
    `${POST_API}/${postId}/replies`
  );
  return response.data;
};
export const createReplyForPost = async (postId: string, reply: Reply) => {
  const response = await axiosWithCredentials.post(
    `${POST_API}/${postId}/replies`,
    reply
  );
  return response.data;
};
export const updateReply = async (reply: Reply) => {
  const { data } = await axiosWithCredentials.put(
    `${REPLY_API}/${reply._id}`,
    reply
  );
  return data;
};
export const deleteReply = async (replyId: string) => {
  const { data } = await axiosWithCredentials.delete(`${REPLY_API}/${replyId}`);
  return data;
};
