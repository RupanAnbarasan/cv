import React from "react";
const About = () => {
  return (
    <div>
      <p>
        Strong problem solving and analytical skill specialist with one year and
        nine months of experience. Seeking a software company to apply my skills
        and knowledge.
      </p>
      <div className="professionalExperience">
        <h2>Professional Experience</h2>
        <p><strong>Company : </strong>Indium Software Pvt. Ltd.</p>
        <p> Feb 2022 - Nov 2023</p>
        <p><strong>Role : </strong>Associate Software Engineer</p>
      </div>
      <div className="skills">
            <h2 className="sub-header">Skills</h2>
            <div className="hr"></div>
            <ul className="Skills-ul">
              <li className="Skills-l2">HTML, CSS</li>
              <li className="Skills-l3">React Js, Redux, RestFUL API</li>
              <li className="Skills-l4">Node Js,Express, MongoDB,Git Hub</li>
              <li className="Skills-l1">Mendix</li>
              <li className="Skills-l6">Unit testing and Writing Test Cases</li>
              <li className="Skills-l7">Worked on JIRA.</li>
              <li className="Skills-l8">Creation of Technical documentation.</li>
            </ul>
          </div>
          <div className="Certifications">
            <h2 className="sub-header">Certifications</h2>
            <div className="hr"></div>
            <ul className="Certifications-ul">
              <li className="Certifications-l1">
                Certified as a Mendix Rapid Developer and Mendix Intermediate
                Developer.
              </li>
              <li className="Certifications-l2">
                Java programming from Great Learning Academy.
              </li>
              <li className="Certifications-l3">
                React Js for Beginners from Simplilearn.
              </li>
            </ul>
          </div>

    </div>
  );
};

export default About;