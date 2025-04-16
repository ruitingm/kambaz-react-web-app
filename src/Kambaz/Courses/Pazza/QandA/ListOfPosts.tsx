import { GoTriangleDown } from "react-icons/go";
import { BiSolidInfoSquare } from "react-icons/bi";
import { Link, useParams } from "react-router";
import InstructorLogo from "./LogoInstructor";
import { CgNotes } from "react-icons/cg";
import PrivateLogo from "./LogoPrivate";
import { useDispatch, useSelector } from "react-redux";
import { Post, updatePost } from "../postReducer";
import * as postClient from "../client";
import { FaCircle } from "react-icons/fa";
export default function ListOfPosts() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.postsReducer) as {
    posts: Post[];
  };
  const postDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${month}/${day}/${year.slice(2)}`;
  };
  const dateInfo = (postDate: string) => {
    const today = new Date();
    const postedDate = new Date(postDate);
    const todayMidnight = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const postMidnight = new Date(
      postedDate.getFullYear(),
      postedDate.getMonth(),
      postedDate.getDate()
    );
    const dateDiff =
      (todayMidnight.getTime() - postMidnight.getTime()) /
      (1000 * 60 * 60 * 24);
    if (dateDiff < 1) {
      return "Today";
    } else if (dateDiff === 1) {
      return "Yesterday";
    } else if (dateDiff > 1 && dateDiff < 7) {
      return "Last Week";
    } else {
      const date = new Date(postDate);
      const day = date.getDay();
      const diffToMonday = (day + 6) % 7;
      const monday = new Date(date);
      monday.setDate(date.getDate() - diffToMonday);
      const sunday = new Date(monday);
      sunday.setDate(monday.getDate() + 6);
      const format = (d: Date) => `${d.getMonth() + 1}/${d.getDate()}`;
      return `${format(monday)} - ${format(sunday)}`;
    }
  };
  const updatePostHandler = async (post: Post) => {
    await postClient.updatePost(post);
    dispatch(updatePost(post));
  };
  // const [instructorLiked, setInstructorLiked] = useState(false);
  // const toggleInstructorLiked = () => {
  //   setInstructorLiked(!instructorLiked);
  // };
  return (
    <div id="wd-pazza-lop">
      {posts.map((post) => (
        <div onClick={() => updatePostHandler({ ...post, read: true })}>
          <div id="wd-pazza-lop-info" className="wd-pazza-lop-info-bar">
            <button
              id="wd-pazza-lop-dropdown"
              className="border-0 p-0 wd-pazza-dark-grey"
            >
              <GoTriangleDown className="align-self-center ms-1 me-1" />
            </button>
            {dateInfo(post.date)}
          </div>
          <Link
            to={`/Kambaz/Courses/${cid}/Pazza/QandA/Post/${post._id}`}
            className="wd-text-no-decor"
          >
            <div className="d-flex bg-white">
              {post.read === false && (
                <div className="align-content-center">
                  <FaCircle className="wd-pazza-unread-circle wd-pazza-blue ps-1" />
                </div>
              )}
              <div
                id="wd-pazza-lop-content"
                className={`container-fluid wd-pazza-lop-content-box ${
                  post.read === false ? "ps-2" : "ps-4"
                }`}
              >
                <div id="wd-pazza-lop-subject-line" className="d-flex pt-1">
                  <div
                    id="wd-pazza-lop-subject"
                    className="fw-bold text-dark wd-pazza-lop-content-subject col-10 pe-1"
                  >
                    {post.subject}
                  </div>
                  <div id="wd-pazza-lop-date" className="text-end col-2">
                    {postDate(post.date)}
                  </div>
                </div>
                <div id="wd-pazza-lop-body" className="d-flex pb-1">
                  <div
                    id="wd-pazza-lop-body-text"
                    className="wd-pazza-lop-content-body col-10"
                  >
                    {post.private && <PrivateLogo />}
                    {post.role === "FACULTY" && <InstructorLogo />}
                    <p>{post.post}</p>
                  </div>
                  <div id="wd-pazza-content-mark" className="col-2 text-end">
                    {post.type === "note" && (
                      <CgNotes className="wd-pazza-dark-grey fs-5" />
                    )}
                    {post.type === "question" && (
                      <BiSolidInfoSquare className="wd-pazza-yellow fs-4 rounded-1" />
                    )}
                  </div>
                </div>
                {post.liked && (
                  <div
                    id="wd-pazza-lop-instructor-note"
                    className="wd-pazza-green fw-bold pb-1 wd-pazza-font-8pt"
                  >
                    <li>An instructor thinks this is a good {post.type}</li>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
