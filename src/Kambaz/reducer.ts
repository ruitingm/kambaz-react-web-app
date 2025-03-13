import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";
import { v4 as uuidv4 } from "uuid";
export type Enrollment = {
  _id?: string;
  user: string;
  course: string;
};
const initialState = {
  enrollments: enrollments as Enrollment[],
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (
      state,
      { payload: enrollment }: { payload: Enrollment }
    ) => {
      const newEnrollment: Enrollment = {
        _id: uuidv4(),
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as Enrollment[];
    },
    deleteEnrollment: (
      state,
      { payload: enrollment }: { payload: Enrollment }
    ) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === enrollment.user && e.course === enrollment.course)
      );
    },
  },
});
export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
