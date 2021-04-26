import React from "react";
import "./navbar.css";

function Nabvar() {
  return (
    <nav className="navbar">
      <h1>Hot Blogs</h1>
      <div className="links">
        <a href="/"> Home </a>
        <a href="/create">Create blog</a>
      </div>
    </nav>
  );
}

export default Nabvar;
