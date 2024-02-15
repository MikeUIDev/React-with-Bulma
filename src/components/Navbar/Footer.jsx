import React from "react"
import logo from '../../assets/images/logo.svg';
import bulmaLogo from '../../assets/images/bulma-logo.svg';

function Footer() {
  const todayDay = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="builds">
        Build with <img src={logo} className="App-logo logo" /> React  + 
        <a href="https://www.bulma.io" target="_blank" alt="Bulma CSS framework"><img src={bulmaLogo} className="logo" /></a>
      </div>
      <div className="year">&#174; {todayDay}</div>
    </footer> 
  );
}

export default Footer;