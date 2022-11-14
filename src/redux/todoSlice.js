import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: action.payload.id,
        title: action.payload.title,
        issueType: action.payload.issueType,
        priority: action.payload.priority,
        assignee: action.payload.assignee,
        point: action.payload.point,
      };
      state.push(todo);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
