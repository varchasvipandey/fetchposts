import React from "react";
import { usePosts } from "../context/PostContext";

function LoadMore() {
  const { page, setPage, isFetching, setIsFetching } = usePosts();

  function handleClick() {
    if (page >= 10) return;

    setIsFetching(true);
    setPage((p) => p + 1);
  }

  function buttonText() {
    if (page < 10) {
      return isFetching ? "Loading..." : "Load More";
    } else {
      return "No more posts";
    }
  }

  return (
    <div className="loadmore-container">
      <button onClick={handleClick}>{buttonText()}</button>
    </div>
  );
}

export default LoadMore;
