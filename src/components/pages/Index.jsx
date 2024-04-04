import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <section aria-label="Homepage section" className="home hero is-medium is-fullheight fade_in">
            <div className="hero-body">
                {/* <div className="text-over-hero">Mike Lin</div> */}
                <div className="container">
                    <div className="columns is-desktop is-centered home__content">

                        {/* <div className="column right">
                            <p className="is-size-3-mobile home__content--text">
                                I
                                <NavLink to="/work" className="link-item develop">develop</NavLink>
                                and
                                <NavLink to="/user" className="link-item design">design</NavLink>
                                beautiful things
                            </p>
                        </div> */}
                        <div class="column">
                            <p class="title is-spaced is-size-3-mobile hero-text">Hi. I'm Mike.</p>
                            <p class="subtitle is-spaced is-size-3 is-size-4-mobile has-text-weight-bold">A Frontend Developer and<br /> also love to design beautiful things.</p>
                            </div>
                        <div className="column is-6 left">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }

  export default Home;