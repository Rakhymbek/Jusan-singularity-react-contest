import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { fetchPosts } from "./fetchers/fetchPosts";
import { useTypedSelector } from "./hooks/useTypedSelector";
import NewPost from "./pages/NewPost";
import Posts from "./pages/Posts";
import { PostsActionsType } from "./redux/postReducer";
import { RootState } from "./redux/reducer";

function App() {
  const dispatch = useDispatch();
  const { posts } = useTypedSelector((state: RootState) => state.posts);

  useEffect(() => {
    fetchPosts().then((res) =>
      dispatch({ type: PostsActionsType.GET_POSTS, payload: res })
    );
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts posts={posts} />} />
        <Route path="/new" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
