import { Button, Container, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { PostsActionsType } from "../redux/postReducer";
import { IPosts } from "../types";


const NewPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const AddNewPost = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const postData: IPosts = {
        id: Date.now(),
        userId: Date.now(),
        title,
        body,
      };
      console.log(postData);
      dispatch({ type: PostsActionsType.ADD_POST, payload: postData });
      setTitle("");
      setBody("");
    },
    [title, body, dispatch]
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <form>
        <TextField
          type={"text"}
          placeholder="Post Title"
          value={title}
          sx={{ mr: 2 }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          type={"text"}
          placeholder="Post Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={AddNewPost}
          disabled={!title && !body}
          sx={{ display: "block", mt: 2 }}
        >
          Create Post
        </Button>
      </form>
    </Container>
  );
};

export default NewPost;
