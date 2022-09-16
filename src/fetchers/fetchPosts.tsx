import axios from "axios";
import { IPosts } from "../types";

export const fetchPosts = () => {
  return axios
    .get<IPosts[]>(
      "https://jsonplaceholder.typicode.com/posts"
    )
    .then((res) => res.data);
};
