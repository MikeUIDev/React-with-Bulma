import React from "react"

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <a className="block mls-logo" href="/"><span data-hover="MLS">MLS</span></a>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-dark is-inverted" href="/developer">
            Software Developer
          </a>
          <a className="button is-dark is-inverted" href="/user">
            UX Design
          </a>
          <a className="button is-dark is-inverted" href="/about">
            About Me
          </a>
          <a className="button is-dark is-inverted" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </div>
      </div>
    </nav>
  );
}

export default Navbar;