import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todosSlice";
import { loadState, saveState } from "../utility/localstorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});

export default store;
