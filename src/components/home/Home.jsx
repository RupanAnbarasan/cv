import React from "react";
import About from "../about/About";
import Education from "../education/Education";
import Project from "../projects/project";
import Contact from "../contact/Mycontact";
import Nav from "../nav/nav.jsx";
const Home = () => {
  return (
    <div>
      <div>
        <h2>Rupan anbarasan</h2>
      </div>
      <hr />
      <div>
        <About />
        <Project />
        <Contact />
        <Nav/>
      </div>
    </div>
  );
};

export default Home;
