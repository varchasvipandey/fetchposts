import React, { useEffect } from "react";
import { usePosts } from "../context/PostContext";
//Component
import PostItem from "./PostItem";

function Posts() {
  const { page, posts, setPosts, setIsFetching } = usePosts();

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`;

    (async () => {
      let response = await fetch(URL);
      let data = await response.json();

      setIsFetching(false);
      setPosts([...posts, ...data]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const renderPosts = posts.map((post) => (
    <PostItem key={post.id} post={post} />
  ));

  return (
    <div role="list" className="posts">
      {renderPosts}
    </div>
  );
}

export default Posts;
