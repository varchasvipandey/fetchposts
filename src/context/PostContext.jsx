import React, { useState, createContext, useContext } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);

  const value = { posts, setPosts, page, setPage, isFetching, setIsFetching };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostContext);

  if (context === undefined) {
    throw new Error("usePosts must be used inside PostProvider");
  }
  return context;
}

export { PostProvider, usePosts };
