import "./App.css";
import { BrowserRouter as Router, Routes, Route} from"react-router-dom";
import Home from "./components/home/Home"
import About from "./components/about/about";
import Mycontact from "./components/contact/Mycontact";
import Project from "./components/projects/project";
import Education from "./components/education/Education";

function App() {  
  return (
    <Router>
      <Routes>
      <Route index path='/' element={<Home/>}/>
        <Route index path='/about' element={<About/>}/>
        <Route index path='/projects' element={<Project/>}/>
        <Route index path='/education' element={<Education/>}/>
        <Route index path='/contact' element={<Mycontact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
