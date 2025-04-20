import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentsReducer from "./Enrollment/reducer";
import postsReducer from "./Courses/Pazza/postReducer";
import repliesReducer from "./Courses/Pazza/replyReducer";
import foldersReducer from "./Courses/Pazza/FolderReducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer,
    postsReducer,
    repliesReducer,
    foldersReducer,
  },
});
export default store;
