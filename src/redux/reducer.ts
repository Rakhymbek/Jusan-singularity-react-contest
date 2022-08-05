import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { posts } from "./postReducer";

export const store = configureStore({
  reducer: combineReducers({
    posts,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
