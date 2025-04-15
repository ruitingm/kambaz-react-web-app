import FollowUpDiscussion from "./DiscussionFollowup";
import PostContent from "./PostContent";
export default function ViewPostScreen() {
  return (
    <div id="wd-pazza-view-post-screen">
      <div>
        <PostContent />
      </div>
      <div className="m-2 mt-3 border border-1 bg-white">
        <FollowUpDiscussion />
      </div>
    </div>
  );
}
