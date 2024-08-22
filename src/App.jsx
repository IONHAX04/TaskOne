import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NavBar from "./components/00 - NavBar/Navbar";
import Home from "./components/01 - Home/Home";
import Rest from "./components/03 - RestAPI/Rest";
import About from "./components/02 - About/About";
import Services from "./components/04 - Services/Services";
import Careers from "./components/05 - Careers/Careers";
import Contact from "./components/06 - Contact/Contact";
import Footer from "./components/07 - Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restfulAPI" element={<Rest />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </NavBar>
      </Router>
    </div>
  );
}

export default App;
