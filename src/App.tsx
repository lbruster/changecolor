import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Project01 from "./components/projects/project01";
import Project02 from "./components/projects/project02";
import Project03 from "./components/projects/project03";
import Project04 from "./components/projects/project04";
import Project05 from "./components/projects/project05";
import Project06 from "./components/projects/project06";
import Project07 from "./components/projects/project07";
import Project08 from "./components/projects/project08";
import Project09 from "./components/projects/project09";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/1" element={<Project01 />} />
        <Route path="/projects/2" element={<Project02 />} />
        <Route path="/projects/3" element={<Project03 />} />
        <Route path="/projects/4" element={<Project04 />} />
        <Route path="/projects/5" element={<Project05 />} />
        <Route path="/projects/6" element={<Project06 />} />
        <Route path="/projects/7" element={<Project07 />} />
        <Route path="/projects/8" element={<Project08 />} />
        <Route path="/projects/9" element={<Project09 />} />
      </Routes>
    </div>
  );
}

export default App;
