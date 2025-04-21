import { GoTriangleDown } from "react-icons/go";
import { BiSolidInfoSquare } from "react-icons/bi";
import { Link, useLocation, useParams } from "react-router-dom";
import InstructorLogo from "./LogoInstructor";
import { CgNotes } from "react-icons/cg";
import PrivateLogo from "./LogoPrivate";
import { useDispatch, useSelector } from "react-redux";
import { Post, updatePost } from "../postReducer";
import * as postClient from "../client";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
interface GroupedPosts {
  [key: string]: Post[];
}
export default function ListOfPosts() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.postsReducer) as {
    posts: Post[];
  };
  const getDay = (dateString: string) => {
    const [date] = dateString.split(" ");
    const d = new Date(date);
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[d.getDay()];
  };
  const postTime = (dateString: string) => {
    const [, time] = dateString.split(" ");
    return time;
  };
  const postDate = (dateString: string) => {
    const [date] = dateString.split(" ");
    const [year, month, day] = date.split("-");
    return `${month}/${day}/${year.slice(2)}`;
  };
  const updatePostHandler = async (post: Post) => {
    await postClient.updatePost(post);
    dispatch(updatePost(post));
  };
  //  const [instructorLiked, setInstructorLiked] = useState(false);
  // const  toggleInstructorLiked = () => {
  //   setInstructorLiked(!instructorLiked);
  // };
  const addView = async (post: Post) => {
    if (post.view.includes(currentUser._id)) {
      return;
    }
    const newView = [...post.view, currentUser._id];
    post = {
      ...post,
      view: newView,
    };
    await postClient.updatePost(post);
    dispatch(updatePost(post));
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
    const dateDiff = Math.floor(
      (todayMidnight.getTime() - postMidnight.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (dateDiff < 1) {
      return "Today";
    } else if (dateDiff === 1) {
      return "Yesterday";
    } else if (dateDiff > 1 && dateDiff <= 7) {
      return "This Week";
    } else if (dateDiff > 7 && dateDiff <= 14) {
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
  const groupPostsByDate = (posts: Post[]): GroupedPosts => {
    const sortedPosts = [...posts].sort((a, b) => {
      return (
        new Date(b.date.replace(" ", "T")).getTime() -
        new Date(a.date.replace(" ", "T")).getTime()
      );
    });

    const grouped: GroupedPosts = {};
    sortedPosts.forEach((post) => {
      const category = dateInfo(post.date);
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(post);
    });

    Object.keys(grouped).forEach((category) => {
      grouped[category].sort((a, b) => {
        const dateA = new Date(a.date.replace(" ", "T")).getTime();
        const dateB = new Date(b.date.replace(" ", "T")).getTime();
        return dateB - dateA;
      });
    });
    return grouped;
  };
  const [groupVisibility, setGroupVisibility] = useState<{
    [key: string]: boolean;
  }>({});
  const toggleGroupVisibility = (category: string) => {
    setGroupVisibility((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };
  return (
    <div id="wd-pazza-lop">
      {Object.entries(groupPostsByDate(posts))
        .filter(([_, posts]) => posts.length > 0)
        .sort(([, postsA], [, postsB]) => {
          const latestA = new Date(postsA[0].date.replace(" ", "T")).getTime();
          const latestB = new Date(postsB[0].date.replace(" ", "T")).getTime();
          return latestB - latestA;
        })
        .map(([category, categoryPosts]) => (
          <div key={category}>
            <div
              id="wd-pazza-lop-info"
              className="wd-pazza-lop-info-bar"
              onClick={() => toggleGroupVisibility(category)}
            >
              <button
                id="wd-pazza-lop-dropdown"
                className="border-0 p-0 wd-pazza-dark-grey"
              >
                <GoTriangleDown className="align-self-center ms-1 me-1" />
              </button>
              {category}
            </div>
            {!groupVisibility[category] &&
              categoryPosts.map((post) => (
                <div
                  key={post._id}
                  onClick={() => {
                    updatePostHandler({ ...post, read: true });
                    addView(post);
                  }}
                >
                  <Link
                    to={`/Kambaz/Courses/${cid}/Pazza/QandA/Post/${post._id}`}
                    className={"wd-text-no-decor"}
                  >
                    <div className="d-flex">
                      <div
                        className={`align-content-center  ${
                          pathname ===
                          `/Kambaz/Courses/${cid}/Pazza/QandA/Post/${post._id}`
                            ? "wd-pazza-bg-yellow"
                            : "bg-white"
                        }`}
                      >
                        {!post.view.includes(currentUser._id) && (
                          <FaCircle className="wd-pazza-unread-circle wd-pazza-blue ps-1" />
                        )}
                      </div>
                      <div
                        id="wd-pazza-lop-content"
                        className={`container-fluid wd-pazza-lop-content-box border border-0 border-bottom ${
                          post.read === false ? "ps-2" : "ps-4"
                        } ${
                          pathname ===
                          `/Kambaz/Courses/${cid}/Pazza/QandA/Post/${post._id}`
                            ? "wd-pazza-bg-yellow"
                            : ""
                        }`}
                      >
                        <div
                          id="wd-pazza-lop-subject-line"
                          className="d-flex pt-1"
                        >
                          <div
                            id="wd-pazza-lop-subject"
                            className="fw-bold text-dark wd-pazza-lop-content-subject col-10 pe-1"
                          >
                            {post.subject}
                          </div>
                          <div
                            id="wd-pazza-lop-date"
                            className="text-end col-2"
                          >
                            {category === "Today" || category === "Yesterday"
                              ? postTime(post.date)
                              : category === "This Week" ||
                                category === "Last Week"
                              ? getDay(post.date)
                              : postDate(post.date)}
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
                          <div
                            id="wd-pazza-content-mark"
                            className="col-2 text-end"
                          >
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
                            <li>
                              An instructor thinks this is a good {post.type}
                            </li>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}
