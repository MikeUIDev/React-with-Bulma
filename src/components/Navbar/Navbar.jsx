import React from "react"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          {/* <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
          </a> */}
          <Link to="/" className="navbar-item" >
            <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"></img>
          </Link>
          <a
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
          </a>
        </div>
        <div id="navbarHeader" className="navbar-menu">
          <div className="navbar-end">

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


            <Link to="/developer" className="navbar-item is-dark is-inverted frontend-developer">Frontend Developer</Link>
            <Link to="/user" className="navbar-item is-dark is-inverted ux-design">UX Design</Link>
            <Link to="/about" className="navbar-item is-dark is-inverted about-me">About Me</Link>
            <div className="navbar-item contact-me">
              <Link to="/contact" className="button is-link is-outlined is-rounded text-say-hello is-hidden-mobile"></Link>
              <Link to="/contact" className="button is-link is-outlined is-rounded is-hidden-desktop">
                <span>Say Hello</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;