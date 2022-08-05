import { PayloadAction } from "@reduxjs/toolkit";
import { IPosts } from "../types";

export enum PostsActionsType {
  GET_POSTS = "GET_POSTS",
  ADD_POST = "ADD_POST",
}

interface IState {
  posts: IPosts[];
}

const initialState: IState = {
  posts: [],
};

export const posts = (
  state = initialState,
  action: PayloadAction<IPosts[]>
) => {
  const newState = { ...state };
  switch (action.type) {
    case PostsActionsType.GET_POSTS:
      newState.posts = action.payload;
      break;
    case PostsActionsType.ADD_POST:
        newState.posts = [action.payload as unknown as IPosts, ...newState.posts];
    break
    default:
      return newState;
  }
  return newState;
};
