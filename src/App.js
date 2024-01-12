import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Mycontact from "./components/contact/Mycontact";
import Project from "./components/projects/project";
import Education from "./components/education/Education";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Mycontact />} />
      </Routes>
    </Router>
  );
}

export default App;
