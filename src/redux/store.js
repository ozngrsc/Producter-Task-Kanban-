import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

//Store holds state and combines reducers
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
