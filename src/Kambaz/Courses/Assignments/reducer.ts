import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// export type Assignment = {
//   _id: string;
//   title: string;
//   course: string;
//   due: string;
//   available: string;
//   until: string;
//   editing?: boolean;
//   points: string;
//   description?: string;
// };

const initialState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: uuidv4() as string,
        title: assignment.title as string,
        course: assignment.course as string,
        due: assignment.due as string,
        available: assignment.available as string,
        until: assignment.until as string,
        points: assignment.points as string,
        description: assignment.description as string,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
