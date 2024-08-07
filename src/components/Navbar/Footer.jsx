import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import madeWithBulma from '../../assets/images/made-with-bulma--white.png';

function Footer() {
  const todayDay = new Date().getFullYear();

  return (
    // <footer className="footer">
    //   <div className="content has-text-centered">
    //     <p>Build with</p> <img src={logo} className="App-logo logo" /> React  +  <a href="https://www.bulma.io" target="_blank" alt="Bulma CSS framework"><img src={bulmaLogo} className="logo" /></a>
    //   </div>
    //   <div className="year">&#174; {todayDay}</div>
    // </footer>

    <footer className="section footer has-text-centered">
      <div className="container is-narrow">
        <div className="columns is-centered mb-6">
          {/* <div className="column is-one-third">
            <p className="is-size-6-touch has-text-weight-bold has-text-center-mobile has-text-left-tablet has-text-left-desktop">Mike Lin</p>
            <p className="is-size-6-touch has-text-weight-normal has-text-center-mobile has-text-left-tablet has-text-left-desktop">Frontend Developer</p>
          </div>
          <div className="column is-one-third">
            <p className="is-size-6-touch has-text-weight-bold text-center-mobile has-text-left-tablet has-text-left-desktop">Contact</p>
            <p className="is-size-6-touch has-text-weight-normal text-center-mobile has-text-left-tablet has-text-left-desktop">mlindesign&#64;gmail&#46;com</p>
          </div> */}
          <div className="column social-icons is-one-quarter is-flex is-justify-content-space-evenly">
            <a className="upwork" href="https://www.upwork.com/freelancers/~01192110ffbde9b4f7?mp_source=share" target="_blank" rel="noreferrer" alt="Upwork Mike Lin Visual Designer" title="Upwork Mike Lin Visual Designer">
              <FontAwesomeIcon icon={['fab', 'upwork']} color="rgba(246, 242, 229, 0.8)" size="2x" />
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/mikelindesign/" target="_blank" rel="noreferrer" alt="Mike Lin LinkedIn" title="Mike Lin LinkedIn">
              <FontAwesomeIcon icon={['fab', 'linkedin']} color="rgba(246, 242, 229, 0.8)" size="2x" />
            </a>
            <a className="github" href="https://github.com/MikeUIDev" target="_blank" rel="noreferrer" alt="Mike Lin GitHub" title="Mike Lin GitHub">
              <FontAwesomeIcon icon={['fab', 'github']} color="rgba(246, 242, 229, 0.8)" size="2x" />
            </a>
            <a className="dribbble" href="https://dribbble.com/mikelindesign" target="_blank" rel="noreferrer" alt="Mike Lin Dribbble" title="Mike Lin Dribbble">
              <FontAwesomeIcon icon="fa-brands fa-dribbble" color="rgba(246, 242, 229, 0.8)" size="2x" />
            </a>
            <a className="youtube" href="https://www.youtube.com/channel/UCmCK0FAXOLkXB3A6w3w9mIA" target="_blank" rel="noreferrer" alt="YouTube Music Channel Urban Lofi Studio" title="YouTube Music Channel Urban Lofi Studio">
              <FontAwesomeIcon icon="fa-brands fa-youtube" color="rgba(246, 242, 229, 0.8)" size="2x" />
            </a>
            <a id="myEmail" className="email" href="mailto:mike&#64;mikelinstudio&#46;com" target="_blank" rel="noreferrer" alt="Mike Lin Email" title="Mike Lin Email">
              <FontAwesomeIcon icon={faEnvelope} color="rgba(246, 242, 229, 0.8)" size="2x"></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="columns is-flex-desktop-only is-justify-content-center is-align-content-center mb-2">
          <div className="column made-by">
            <a href="https://bulma.io" target="_blank" rel="noreferrer" alt="Bulma home"><img src={madeWithBulma} alt="Made with Bulma" width="163" height="31"></img></a>
            +
            <a href="https://react.dev/" target="_blank" rel="noreferrer" alt="React home"><span className="made-by-react"><FontAwesomeIcon icon={['fab', 'react']} color="white" size="2x" /></span></a>
          </div>
        </div>
        <div className="columns has-text-centered">
          <p className="column copyright is-size-6">
            &#169; {todayDay} Mike Lin Studio
          </p>
        </div>
      </div>
    </footer>

  );
}

export default Footer;