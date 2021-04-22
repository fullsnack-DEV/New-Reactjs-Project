import React from "react";
import "./Bloglist.css";

function Bloglist({ blogs, deleteblog }) {
  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <div className="blogpreview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> Wriiten by: {blog.author}</p>

          <button onClick={() => deleteblog(blog.id)}> Delete blog </button>
        </div>
      ))}
    </div>
  );
}

export default Bloglist;
