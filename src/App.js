import React from 'react'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/pages/Index";
import Developer from "./components/pages/Developer";
import User from "./components/pages/User";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

// import '../src/assets/css/App.css';

import "./assets/sass/bulma.scss"

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/developer" element={<Developer />} />
              <Route path="/user" element={<User />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />}
              />
          </Routes>
          <Footer />
      </Router>
  );
}


// function App() {
//   return (
//     <div className="container">
//       <Navbar />
//       <Home />
//       <Footer />
//     </div>
//   );
// }

export default App;