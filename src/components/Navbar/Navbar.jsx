import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          {/* <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
          </a> */}
          <Link exact to="/" className="navbar-item has-text-weight-bold home">Mike Lin</Link>
          <p className="navbar-item has-text-weight-bold home"><FontAwesomeIcon icon={faArrowRight} color="white" size="md"></FontAwesomeIcon></p>
          <p className="has-text-weight-bold dev-title">Frontend Developer</p>
          <span
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarHeader"
            onClick={() => {
              var burger = document.querySelector('.burger')
              var nav = document.querySelector('#navbarHeader')
              burger.classList.toggle('is-active')
              nav.classList.toggle('is-active')
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
        </div>
        <div id="navbarHeader" className="navbar-menu">
          <div className="navbar-end has-text-centered">

            {/* <a className="navbar-item is-dark is-inverted frontend-developer" href="/developer">
              Frontend Developer
            </a>
            <a className="navbar-item is-dark is-inverted ux-design" href="/user">
              UX Design
            </a>
            <a className="navbar-item is-dark is-inverted is-rounded about-me" href="/about">
              About Me
            </a>
            <div className="navbar-item contact-me">
              <a className="button is-link is-outlined is-rounded text-say-hello is-hidden-mobile" href="contact"></a>
              <a className="button is-link is-outlined is-rounded is-hidden-desktop" href="contact">
                <span>Say Hello</span>
              </a>
            </div>*/}


            <NavLink to="/work" className="navbar-item is-dark is-inverted work">Work</NavLink>
            <NavLink to="/user" className="navbar-item is-dark is-inverted design">Design</NavLink>
            <NavLink to="/about" className="navbar-item is-dark is-inverted about-me">About Me</NavLink>
            <div className="navbar-item contact-me">
              <NavLink to="/contact" className="button is-link is-outlined is-rounded text-say-hello is-hidden-mobile"></NavLink>
              <NavLink to="/contact" className="button is-link is-outlined is-rounded is-hidden-desktop">
                <span>Say Hello</span>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;