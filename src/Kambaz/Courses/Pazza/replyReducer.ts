import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export type FollowUp = {
  user: string;
  content: string;
};
export type Reply = {
  _id: string;
  post: string;
  user: string;
  reply: string;
  followup: FollowUp[];
};

const initialState = {
  replies: [] as Reply[],
};
const repliesSlice = createSlice({
  name: "replies",
  initialState,
  reducers: {
    setReplies: (state, { payload: replies }: { payload: Reply[] }) => {
      state.replies = replies;
    },
    addReply: (state, { payload: reply }: { payload: Reply }) => {
      state.replies = [...state.replies, { ...reply, _id: uuidv4() }];
    },
    deleteReply: (state, { payload: replyId }) => {
      state.replies = state.replies.filter((r: Reply) => r._id !== replyId);
    },
    updateReply: (state, { payload: reply }: { payload: Reply }) => {
      state.replies = state.replies.map((r: Reply) =>
        r._id === reply._id ? reply : r
      ) as Reply[];
    },
  },
});
export const { setReplies, addReply, deleteReply, updateReply } =
  repliesSlice.actions;
export default repliesSlice.reducer;
