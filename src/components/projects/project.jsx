import React from "react";
import "./Project.css";
const Project = () => {
  return (
    <div className="project-container">
      <h1 className="Heading">Projects</h1>

      <div className="projects">
        <section className="project-section">
          <h2>Infozech Software Pvt Ltd</h2>
          <p className="technologies">
          <strong>Technologies</strong> Mendix, SQL Server
          </p>
          <p className="duration">
            <strong>Duration:</strong> March 2023 to September 2023 - full time
          </p>
          <p className="role">
            <strong>Role:</strong> Full-stack Developer
          </p>
          <p className="overview">
            <strong>Overview</strong>
            This application involved data in million, so optimization is the
            key job here. Optimized the application for maximum speed and
            scalability. Overview: Through the implementation of this endeavor,
            the company seeks to efficiently manage its users, sites, and
            assets.
          </p>
        </section>

        <section className="project-section">
          <h2>Compass Groups</h2>
          <p className="technologies">
          <p><strong>Technologies</strong></p> Mendix, SQL Server
          </p>
          <p className="duration">
            <strong>Duration:</strong> March 2023 to September 2023 - full time
          </p>
          <p className="role">
            <strong>Role:</strong> Full-stack Developer
          </p>
          <p className="overview">
            <strong>Overview</strong>
            This application involved data in million, so optimization is the
            key job here. Optimized the application for maximum speed and
            scalability. Overview: Through the implementation of this endeavor,
            the company seeks to efficiently manage its users, sites, and
            assets.
          </p>
        </section>
        <section className="project-section">
          <h2>Trane Technologies</h2>
          <p className="technologies">
          <p><strong>Technologies</strong></p> Mendix, SQL Server
          </p>
          <p className="duration">
            <strong>Duration:</strong> March 2023 to September 2023 - full time
          </p>
          <p className="role">
            <strong>Role:</strong> Full-stack Developer
          </p>
          <p className="overview">
            <strong>Overview</strong>
            This application involved data in million, so optimization is the
            key job here. Optimized the application for maximum speed and
            scalability. Overview: Through the implementation of this endeavor,
            the company seeks to efficiently manage its users, sites, and
            assets.
          </p>
        </section>
      </div>


      <h1 className="Heading">Personal Projects</h1>
      <div className="personal-projects">

        <section className="project-section">
          <h2>Library Management System</h2>
          <p className="technologies">
            <p><strong>Technologies</strong></p> React, CSS, node.js, MongoDB
          </p>
          <p className="overview">
            <strong>Overview</strong> This Application is deal with the Books,
            transactions, Users and Admins . The Users can check latest books
            arrival, all books and personal transactions. The admin can issue,
            return, add and remove book and check all transactions and specific
            transactions. In this application the dynamic rendering, state
            management , reusable code are implemented.
          </p>
        </section>

        <section className="project-section">
          <h2>Technotes</h2>
          <p className="technologies">
          <strong>Technologies</strong>React, Redux, CSS, node.js, MongoDB
          </p>
          <p className="overview">
            <strong>Overview</strong> The application's design document and
            contributed to Front-end design and Client-side Business logic
            implementation. Overview: This Application is deal with the notes,
            and Users. The Customer can raise a Note. Notifications are sent out
            to respective users for procedural actions. Further, the status of
            the notes where monitored by the Manager
          </p>
        </section>
        <section className="project-section">
          <h2>Quiz application</h2>
          <p className="technologies">
          <strong>Technologies</strong>React, Redux, CSS, node.js, MongoDB
          </p>
          <p className="overview">
            <strong>Overview</strong> The Quiz Application is a comprehensive
            educational tool designed to streamline the quiz creation,
            management, and assessment process within an academic institution.
            Developed using a technology stack that includes React, Node.js,
            MongoDB, Redux, REST API, and CSS, this application facilitates
            seamless communication between administrators, teachers, and
            students.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Project;
