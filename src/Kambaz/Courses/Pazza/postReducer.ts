import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export type Post = {
  _id: string;
  user: string;
  course: string;
  subject: string;
  type: string;
  private: boolean;
  post: string;
  date: string;
  liked: boolean;
  role: string;
  category: string;
  read: boolean;
  answered: boolean;
};

const initialState = {
  posts: [] as Post[],
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, { payload: posts }: { payload: Post[] }) => {
      state.posts = posts;
    },
    addPost: (state, { payload: post }: { payload: Post }) => {
      console.log(post);
      state.posts = [...state.posts, { ...post, _id: uuidv4() }] as Post[];
    },
    deletePost: (state, { payload: postId }) => {
      state.posts = state.posts.filter((p: Post) => p._id !== postId);
    },
    updatePost: (state, { payload: post }: { payload: Post }) => {
      state.posts = state.posts.map((p: Post) =>
        p._id === post._id ? post : p
      ) as Post[];
    },
    editPost: (state, { payload: postId }: { payload: String }) => {
      state.posts = state.posts.map((p: Post) =>
        p._id === postId ? { ...p, editing: true } : p
      ) as Post[];
    },
  },
});
export const { setPosts, addPost, deletePost, updatePost, editPost } =
  postsSlice.actions;
export default postsSlice.reducer;
