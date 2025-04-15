import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Post } from "../postReducer";
import FollowUpDiscussion from "./DiscussionFollowup";
import PostContent from "./PostContent";
import * as client from "../client";
import { setReplies } from "../replyReducer";
import { useEffect } from "react";
export default function PostScreen({ users }: { users: any }) {
  const { pid } = useParams();
  const { posts } = useSelector((state: any) => state.postsReducer) as {
    posts: Post[];
  };
  const post = posts.find((p) => p._id === pid) as Post;
  const dispatch = useDispatch();
  const fetchRepliesForPost = async () => {
    try {
      const replies = await client.findRepliesForPost(pid as string);
      dispatch(setReplies(replies));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchRepliesForPost();
  }, [pid]);
  return (
    <div id="wd-pazza-view-post-screen">
      <div>
        <PostContent post={post} />
      </div>
      <div className="m-2 mt-3 border border-1 bg-white">
        <FollowUpDiscussion users={users} />
      </div>
    </div>
  );
}
