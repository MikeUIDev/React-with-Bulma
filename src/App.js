import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/pages/Index";
import Work from "./components/pages/Work";
import User from "./components/pages/User";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

// import '../src/assets/css/App.css';

import "./assets/sass/bulma.scss"


library.add(faCoffee, fab)

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
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