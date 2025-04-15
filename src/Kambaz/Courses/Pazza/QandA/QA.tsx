import { Navigate, Route, Routes, useParams } from "react-router";
import PostScreen from "../Post/NewPost";
import ViewPostScreen from "../ViewPost/PostScreen";
import ClassAtGlance from "../ViewPost/ClassAtGlance";
import FolderFilter from "./FolderFilter";
import ListOfPosts from "./ListOfPosts";
import PostControls from "./PostControls";
import { BiSolidInfoSquare } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../postReducer";
import * as coursesClient from "../../client";

export default function PazzaQandA() {
  const category = "hw1";
  const lops = ["Unread", "Updated", "Unresovled"];
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  const { cid } = useParams();
  const dispatch = useDispatch();
  const fetchPostsForCourse = async () => {
    const posts = await coursesClient.findPostsForCourse(cid as string);
    dispatch(setPosts(posts));
  };
  useEffect(() => {
    fetchPostsForCourse();
  }, [cid]);
  return (
    <div id="wd-pazza-qa" className="wd-pazza-full-screen">
      <FolderFilter />
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
                    <div className="wd-pazza-lopc-tab align-content-center wd-pazza-font-9pt">
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
          <PostControls />
          <div className="bg-white ps-2">
            <span className="wd-pazza-blue wd-pazza-font-10pt">
              Show Actions
            </span>
          </div>
          <ListOfPosts />
        </div>
        <div className="col-9">
          <div id="wd-pazza-ps" className="container-fluid p-0 flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="ClassAtGlance" />} />
              <Route path={category} element={<ClassAtGlance />} />
              <Route path="ClassAtGlance" element={<ClassAtGlance />} />
              <Route path="Post/:pid" element={<ViewPostScreen />} />
              <Route path="NewPost" element={<PostScreen />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
