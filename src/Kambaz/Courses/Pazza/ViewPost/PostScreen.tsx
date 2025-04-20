import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Post } from "../postReducer";
import FollowUpDiscussion from "./DiscussionFollowup";
import PostContent from "./PostContent";
import * as client from "../client";
import { setReplies } from "../replyReducer";
import { useEffect } from "react";
import InstructorAnswer from "./InstructorAnswer";
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
  const getTimeDiff = (postDate: string) => {
    const now = new Date();
    const postDateTime = new Date(postDate.replace(" ", "T"));
    const timeDiff = now.getTime() - postDateTime.getTime();
    const diffinSeconds = Math.floor(timeDiff / 1000);
    const diffInMinutes = Math.floor(timeDiff / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffinSeconds < 60) {
      return `${diffinSeconds} seconds ago`;
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      return `${diffInDays} days ago`;
    }
  };
  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };
  useEffect(() => {
    fetchRepliesForPost();
  }, [pid]);
  console.log(new Date());
  return (
    <div id="wd-pazza-view-post-screen">
      <div>
        <PostContent post={post} users={users} getTimeDiff={getTimeDiff} />
      </div>
      <div>
        <InstructorAnswer
          post={post}
          users={users}
          getTimeDiff={getTimeDiff}
          stripHtml={stripHtml}
        />
      </div>
      <div className="m-2 mt-3 border border-1 bg-white">
        <FollowUpDiscussion
          users={users}
          getTimeDiff={getTimeDiff}
          stripHtml={stripHtml}
        />
      </div>
    </div>
  );
}
