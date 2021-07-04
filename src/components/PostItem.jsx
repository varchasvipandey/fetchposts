import React from "react";

function PostItem({ post }) {
  return (
    <div role="listitem" className="post-item">
      <p className="post-item__number">{post.id}</p>
      <h2 className="post-item__title">{post.title}</h2>
      <p className="post-item__body">{post.body}</p>
    </div>
  );
}

export default React.memo(PostItem);
