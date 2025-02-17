import ListOfPostControls from "./ListOfPostControls";
import ListOfPosts from "./ListOfPosts";
import PostControls from "./PostControls";

export default function PazzaQandA() {
  return (
    <div id="wd-pazza-qa" className="d-flex wd-pazza-bg-blue-grey">
      <div
        id="wd-pazza-lops"
        className="col-4 border border-1 border-bottom-0 border-top-0 border-secondary-subtle"
      >
        <ListOfPostControls />
        <PostControls />
        <div className="bg-white ps-2">
          <span className="wd-pazza-blue wd-pazza-font-10pt">Show Actions</span>
        </div>
        <ListOfPosts />
      </div>
      <div className="col-8">
        <div id="wd-pazza-ps" className="container-fluid p-0 flex-fill">
          <div>&nbsp;Posts</div>
        </div>
      </div>
    </div>
  );
}
