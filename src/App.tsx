import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { fetchPosts } from "./fetchers/fetchPosts";
import NewPost from "./pages/NewPost";
import Posts from "./pages/Posts";
import { IPosts } from "./types";

function App() {
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Posts posts={posts}/>} />
        <Route path="/new" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
