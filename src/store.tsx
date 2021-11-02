import { configureStore, createSlice } from "@reduxjs/toolkit";

interface SliceState {
  content: number;
}

const initialState: SliceState = {
  content: 1,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    inchandler: (state) => {
      state.content += 1;
    },
    dechandler: (state) => {
      if (state.content > 1) {
        state.content -= 1;
      }
    },
  },
});

export const { inchandler, dechandler } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectcontent = (state: RootState) => state.todos.content;

export default store;
