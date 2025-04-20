import { Link, Navigate, Route, Routes, useParams } from "react-router";
import PostScreen from "../ViewPost/PostScreen";
import ClassAtGlance from "../ViewPost/ClassAtGlance";
import FolderFilter from "./FolderFilter";
import ListOfPosts from "./ListOfPosts";
import { BiSolidInfoSquare } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../postReducer";
import * as coursesClient from "../../client";
import NewPost from "../Post/NewPost";
import { BsFileEarmarkPost } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Folder, setFolders } from "../FolderReducer";
export default function PazzaQandA() {
  const category = "hw1";
  const lops = ["Unread", "Updated", "Unresovled"];
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const fetchPostsForCourse = async (key: string) => {
    try {
      setKeyword(key);
      if (key) {
        const posts = await coursesClient.findPostsByKeyword(
          cid as string,
          key
        );
        dispatch(setPosts(posts));
      } else {
        const posts = await coursesClient.findPostsForCourse(cid as string);
        dispatch(setPosts(posts));
      }
    } catch (err) {
      console.error(err);
    }
  };
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    const users = await coursesClient.findUsersForCourse(cid as string);
    setUsers(users);
  };

  useEffect(() => {
    fetchPostsForCourse(keyword);
    fetchUsers();
  }, [cid]);
  return (
    <div id="wd-pazza-qa">
      <div id="wd-pazza-ff">
        <FolderFilter />
      </div>
      <div className="d-flex wd-pazza-bg-blue-grey">
        <div
          id="wd-pazza-lops"
          className="col-3 border border-1 border-bottom-0 border-top-0 border-secondary-subtle"
        >
          <div id="wd-pazza-lopc" className="d-flex justify-content-between">
            {sideBar && (
              <>
                <div id="wd-pazza-lopc-toggle">
                  <button className="border-0 p-0" onClick={toggleSideBar}>
                    <RxTriangleLeft className="wd-pazza-dark-grey fs-3 border border-1 border-start-0 border-bottom-0 border-top-0 border-secondary-subtle" />
                  </button>
                </div>
                <div
                  id="wd-pazza-lopc-tab"
                  className="wd-pazza-flex-items align-content-center flex-grow-1 ps-1 pe-2"
                >
                  {lops.map((lop) => (
                    <div
                      className="wd-pazza-lopc-tab align-content-center wd-pazza-font-9pt"
                      key={lop}
                    >
                      {lop}
                    </div>
                  ))}
                </div>
                <div className="border border-1 border-top-0 border-bottom-0 border-start-0 border-secondary-subtle pe-1">
                  <BiSolidInfoSquare className="fs-5 wd-pazza-yellow" />
                  <GoTriangleDown className="wd-pazza-dark-grey" />
                </div>
                <div className="ps-1 wd-pazza-dark-grey">
                  <IoIosSettings />
                  <GoTriangleDown />
                </div>
              </>
            )}
            {!sideBar && (
              <div id="wd-pazza-lopc-toggle">
                <button className="border-0 p-0" onClick={toggleSideBar}>
                  <RxTriangleRight className="wd-pazza-dark-grey fs-3 border border-1 border-start-0 border-bottom-0 border-top-0 border-secondary-subtle" />
                </button>
              </div>
            )}
          </div>
          <div id="wd-pazza-np" className="d-flex wd-pazza-np-bar">
            <div id="wd-pazza-np-button" className="align-content-center">
              <Link
                id="wd-np-button"
                type="button"
                className="btn wd-pazza-np-button ms-1 d-flex pt-2"
                to={`/Kambaz/Courses/${cid}/Pazza/QandA/NewPost`}
              >
                <BsFileEarmarkPost className="me-1 mb-1 align-self-center" />
                <span className="wd-pazza-font-9pt text-nowrap">New Post</span>
              </Link>
            </div>
            <div
              id="wd-pazza-np-spf"
              className="align-self-center wd-pazza-search-box d-flex flex-grow-1 me-1 "
            >
              <span className="align-content-center bg-white border border-1 border-end-0 rounded-start-2 ms-1 ps-1">
                <CiSearch className="fs-5 bg-white wd-pazza-dark-grey" />
              </span>
              <input
                type="text"
                className="form-control border border-start-0 rounded-start-0 align-self-center p-1 wd-pazza-font-10pt h-100 shadow-none"
                placeholder="Search or add a post..."
                onChange={(e) => fetchPostsForCourse(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="bg-white ps-2">
            <span className="wd-pazza-blue wd-pazza-font-10pt">
              Show Actions
            </span>
          </div>
          <div id="wd-pazza-lop">
            <ListOfPosts />
          </div>
        </div>
        <div className="col-9">
          <div id="wd-pazza-ps" className="container-fluid p-0 flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="ClassAtGlance" />} />
              <Route
                path={category}
                element={<ClassAtGlance enrolledUsers={users} />}
              />
              <Route
                path="ClassAtGlance"
                element={<ClassAtGlance enrolledUsers={users} />}
              />
              <Route path="Post/:pid" element={<PostScreen users={users} />} />
              <Route path="NewPost" element={<NewPost users={users} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
