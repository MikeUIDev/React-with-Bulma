import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../assets/images/logo.svg';
import bulmaLogo from '../../assets/images/bulma-logo.svg';

function Footer() {
  const todayDay = new Date().getFullYear();

  return (
    // <footer className="footer">
    //   <div className="content has-text-centered">
    //     <p>Build with</p> <img src={logo} className="App-logo logo" /> React  +  <a href="https://www.bulma.io" target="_blank" alt="Bulma CSS framework"><img src={bulmaLogo} className="logo" /></a>
    //   </div>
    //   <div className="year">&#174; {todayDay}</div>
    // </footer> 

    <footer className="section is-primary is-small has-text-centered">
      <div className="container is-narrow"><a className="logo has-text-white" href="/"></a>
        <div className="columns is-centered"> 
          <div className="column is-one-third">
          <p className="is-size-5-touch has-text-weight-bold has-text-center-mobile has-text-left-desktop">Mike Lin</p>
            <p className="is-size-5-touch has-text-weight-normal has-text-center-mobile has-text-left-desktop">Frontend Developer</p>
          </div>
          <div className="column is-one-third">
            <p className="is-size-5-touch has-text-weight-bold text-center-mobile has-text-left-desktop">Contact</p>
            <p className="is-size-5-touch has-text-weight-normal text-center-mobile has-text-left-desktop">mlindesign&#64;gmail&#46;com</p>
          </div>
          <div className="column social-icons is-one-third is-flex is-justify-content-space-evenly">
            <a className="linkedin is-small" href="https://www.linkedin.com/in/mikelindesign/" target="_blank" alt="Mike LinkedIn">
              <FontAwesomeIcon icon={['fab', 'linkedin']} color="black" size="lg" />
            </a>
            <a className="dribbble is-small" href="https://www.linkedin.com/in/mikelindesign/" target="_blank" alt="Mike Dribbble">
              <FontAwesomeIcon icon={['fab', 'dribbble']} color="black" size="lg" />
            </a>
            <a className="dribbble is-small" href="https://github.com/MikeUIDev" target="_blank" alt="Mike GitHub">
              <FontAwesomeIcon icon={['fab', 'github']} color="black" size="lg" />
            </a>
          </div>
        </div>
        <div className="made-by-bulma"><a href="https://bulma.io"><img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31"></img></a></div>
        <p>&#169; {todayDay}</p>
      </div>
    </footer>

  );
}

export default Footer;