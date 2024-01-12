import './Home.css';
import React from "react";
import About from "../about/About";
import Education from "../education/Education";
import Project from "../projects/project";
import Contact from "../contact/Mycontact";
const Home = () => {
  return (
    <div>
      <div className="intro">
        <h2>Hi, I'm Rupan Anbarasan</h2>
        <h3>Full-stack web developer</h3>
      </div>
      <hr />
      <div>
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
