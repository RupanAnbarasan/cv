import "./Home.css";
import React from "react";
import About from "../MyInformation/Info";
import Project from "../projects/project";
import Contact from "../contact/Mycontact";
const Home = () => {
  return (
    <div>
      <div className="intro">
        <h2>
          <span>H</span>
          <span>i</span>,
          <span> I</span>'
          <span>m </span> 
          <span>R</span><span>u</span><span>p</span><span>a</span><span>n </span>
          <span>A</span><span>n</span><span>b</span><span>a</span><span>r</span>
          <span>a</span><span>s</span><span>a</span><span>n</span>
        </h2>
        <h3>Full-stack web developer</h3>
      </div>
      <hr />
      <div>
        <About />
        <hr />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
