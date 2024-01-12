import './Home.css';
import React from "react";
import About from "../about/about";
import Education from "../education/Education";
import Project from "../projects/project";
import Contact from "../contact/Mycontact";
import Nav from "../nav/nav.jsx";
const Home = () => {
  return (
    <div >
      <div>
        <h2>Rupan anbarasan</h2>
      </div>
      <div>
        <About />
        <Project />
        <Education />
        <Contact />
        <Nav/>
      </div>
    </div>
  );
};

export default Home;
