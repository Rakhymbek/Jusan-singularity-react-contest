import { Container } from "@mui/material";
import React from "react";
import Post from "../components/Post";
import { PostsProps } from "../types";

const Posts = ({ posts }: PostsProps) => {
  return (
    <Container sx={{ mt: 2 }} maxWidth={"lg"}>
      <ul>
        {posts.map((item) => (
          <Post key={item.id} post={item} />
        ))}
      </ul>
    </Container>
  );
};

export default Posts;
