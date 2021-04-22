import React, { useState } from "react";
import "./Bloglist.css";

function Bloglist() {
  const [blogs, setblogs] = useState([
    { title: "Eat Properly", body: "Lorem epsum...", author: "Mario", id: 1 },
    { title: "Gym Daily", body: "Lorem epsum...", author: "Luis", id: 2 },
    { title: "Sleep early", body: "Lorem epsum...", author: "Price", id: 3 },
  ]);

  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <div className="blogpreview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> Wriiten by:{blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Bloglist;
