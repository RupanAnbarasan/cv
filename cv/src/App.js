import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="profile-picture"></div>
        <h1 className="header-name">Rupan Anbarasan</h1>
        <h2 className="header-role">Associate Software Engineer</h2>
      </header>
      <main>
        <div className="site-left">
          <div className="about-me">
            <h2 className="sub-header">About me</h2>
            <div className="hr"></div>
            <p className>
              Strong problem solving and analytical skill specialist with one
              year and nine months of experience. Seeking a software company to
              apply my skills and knowledge.
            </p>
          </div>

          <div className="skills">
            <h2 className="sub-header">Skills</h2>
            <div className="hr"></div>
            <ul className="Skills-ul">
              <li className="Skills-l1">Mendix</li>
              <li className="Skills-l2">HTML, CSS</li>
              <li className="Skills-l3">React Js</li>
              <li className="Skills-l4">RestFUL API</li>
              <li className="Skills-l5">SQL,Git Hub</li>
              <li className="Skills-l6">Unit testing and Writing Test Cases</li>
              <li className="Skills-l7">Worked on JIRA.</li>
              <li className="Skills-l8">
                Creation of Technical documentation.
              </li>
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
          <div className="Education">
            <h2 className="sub-header">Education</h2>
            <div className="hr"></div>
            <h4>Bachelor of Science: Computer Science</h4>
            <p> KSR college of Arts and Science -Namakkal</p>
            <p> 2018-06 - 2021-06</p>
          </div>
          <footer>
            <div className="my-cotact">
              <h2 className="sub-header">My Contact</h2>
              <div className="hr"></div>
              <ul className="My-contact-ul">
                <li className="My-contact-l1">rupananbarasan@gmail.com</li>
                <li className="My-contact-l2">9442955869</li>
                <li className="My-contact-l3">salem,Tamilnadu</li>
                <li className="My-contact-l4">website</li>
              </ul>
            </div>
          </footer>
        </div>
        <div className="site-right">
          <h2 className="sub-header">Professional Experience</h2>
          <div className="hr"></div>
          <h3>Compass group</h3>
          <ul>
            <li>
              <span>Technologies:</span> Mendix, SQL Server
            </li>
            <li>
              <span>Duration:</span> October 2022 to March 2023 (full time)
            </li>
            <li>
              <span>Role:</span> Developer
            </li>
            <li>Customized Dashboards for users to visualize the data.</li>
            <li>
              Implemented user role mechanism for different modules,domain
              models, and Microflows
            </li>
            <li>
              <span>Overview:</span> To optimize food service and food
              preparation, this project has been devised to streamline the
              processes.
            </li>
          </ul>
          <h3>Infozech Software Private Limited:</h3>
          <ul>
            <li>
              <span>Technologies:</span>Mendix, SQL Server
            </li>
            <li>
              <span>Duration:</span>March 2023 to September 2023 (full time)
            </li>
            <li>
              <span>Role:</span>Developer
            </li>
            <li>
              This application involved data in million, so optimization is the
              key job here.
            </li>
            <li>
              Optimized the application for maximum speed and scalability.
            </li>
            <li>
              <span>Overview: </span>Through the implementation of this
              endeavor, the company seeks to efficiently manage its users,
              sites, and assets.
            </li>
          </ul>
          <h2 className="sub-header">Personal Projects</h2>
          <div className="hr"></div>
          <h3>TechNotes</h3>
          <ul>
            <li>
              <span>Technologies:</span>ReactJS, Redux, CSS, NodeJS, MangoDB,
              REST APIs
            </li>
            <li>
              <span>Description:</span>The application's design document and
              contributed to Front-end design and Client-side Business logic
              implementation.
            </li>
            <li>
              <span>Role:</span>Developer
            </li>
            <li>
              <span>Overview: </span>This Application is deal with the notes,
              and Users. The Customer can raise a Note. Notifications are sent
              out to respective users for procedural actions. Further, the
              status of the notes where monitored by the Manager
            </li>
          </ul>
          <h3>Quiz application</h3>
          <ul>
            <li>
              <span>Technologies:</span>ReactJS, Redux, CSS, NodeJS, MangoDB,
              REST APIs
            </li>
            <li>
              <span>Role:</span>Developer
            </li>
            <li>
              <span>Description:</span>The Quiz Application is a comprehensive
              educational tool designed to streamline the quiz creation,
              management, and assessment process within an academic institution.
              Developed using a technology stack that includes React, Node.js,
              MongoDB, Redux, REST API, and CSS, this application facilitates
              seamless communication between administrators, teachers, and
              students
            </li>
            <li>
              <span>Accomplishments: </span>Created Principal/Admin Dashboard ,
              Teacher Dashboard and Student interface
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
