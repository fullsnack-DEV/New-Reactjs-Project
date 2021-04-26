import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Nabvar from "../Components/nabvar";
import Bloglist from "../Components/Bloglist";
import Button from "../Components/Button";
import { useHistory } from "react-router-dom";

function Homepage() {
  const [blogs, setblogs] = useState([
    { title: "Eat Properly", body: "Lorem epsum...", author: "Mario", id: 1 },
    { title: "Gym Daily", body: "Lorem epsum...", author: "Luis", id: 2 },
    { title: "Sleep early", body: "Lorem epsum...", author: "Caspium", id: 3 },
  ]);

  const deleteblog = (id) => {
    const newblogs = blogs.filter((blog) => blog.id !== id);
    setblogs(newblogs);
  };

  const history = useHistory();

  //useeffect Hook Use => It runs a function for evry render of the component

  useEffect(() => {
    console.log("rendering the component!");
  }, []);

  //[] ==> this array is called as a dependencies array

  //dependencies for the useeffect hook
  //  if i only nee dto run the function once then I can makke a use of  a dependencies Array

  return (
    <div className="container">
      <Nabvar />
      <Bloglist blogs={blogs} deleteblog={deleteblog} />
      <Button onClick={() => history.push("/create")} name="Go to create" />
    </div>
  );
}

export default Homepage;
