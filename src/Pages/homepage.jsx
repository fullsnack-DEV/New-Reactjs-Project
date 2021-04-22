import React from "react";
import "./Homepage.css";
import Nabvar from "../Components/nabvar";
import Bloglist from "../Components/Bloglist";

function Homepage() {
  return (
    <div className="container">
      <Nabvar />
      <Bloglist />
    </div>
  );
}

export default Homepage;
