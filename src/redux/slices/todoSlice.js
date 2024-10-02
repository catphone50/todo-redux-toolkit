import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoToList(state, action) {
      state.list.push(action.payload);
    },
    removeTodoFromList(state, action) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action) {
      state.list = state.list.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    },
  },
});
export const { addTodoToList, removeTodoFromList, toggleTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
