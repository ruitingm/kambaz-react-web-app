import { createSlice } from "@reduxjs/toolkit";
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
  category: string[];
  read: boolean;
  answered: boolean;
  resolved: boolean;
  visible: string[];
  view: string[];
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
      state.posts = [...state.posts, post] as Post[];
    },
    deletePost: (state, { payload: postId }) => {
      state.posts = state.posts.filter((p: Post) => p._id !== postId);
    },
    updatePost: (state, { payload: post }: { payload: Post }) => {
      state.posts = state.posts.map((p: Post) =>
        p._id === post._id ? post : p
      ) as Post[];
    },
  },
});
export const { setPosts, addPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;
