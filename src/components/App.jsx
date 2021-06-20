import React from "react";
import { PostProvider } from "../context/PostContext";
//Components
import Header from "../components/Header";
import Posts from "../components/Posts";
import LoadMore from "../components/LoadMore";
function App() {
  return (
    <PostProvider>
      <Header />
      <Posts />
      <LoadMore />
    </PostProvider>
  );
}

export default App;
