import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Navbar() {

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 60)
    })
  }, [])


  return (
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        {/* <div className="navbar-brand">
          <Link exact to="/" className="navbar-item has-text-weight-bold home">Mike Lin</Link>
          <p className="navbar-item has-text-weight-bold home"><FontAwesomeIcon icon={faArrowRight} color="white" size="md"></FontAwesomeIcon></p>
          <p className="has-text-weight-bold dev-title">Frontend Developer</p>
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
            <span aria-hidden="true" />
          </a>
        </div> */}
        <div id="navbarHeader" className="navbar-menu non-mobile">
          <div className={scroll ? "navbar-end has-text-centered scrolled" : "navbar-end has-text-centered"}>
            <NavLink to="/" className="navbar-item is-dark is-inverted work has-text-weight-bold">/</NavLink>
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