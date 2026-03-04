import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import HoverMoveText from "../HoverMoveText";

// Custom hook to detect if the screen is desktop size
function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(`(min-width: ${breakpoint}px)`).matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const onChange = (e) => setIsDesktop(e.matches);

    // modern browsers
    mq.addEventListener("change", onChange);
    // set once in case of hydration / late mount
    setIsDesktop(mq.matches);

    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isDesktop;
}

// Home page component
function Home() {
  const isDesktop = useIsDesktop(1024);

  return (
    <section
      aria-label="Homepage section"
      className="home hero is-medium is-fullheight fade_in"
    >
      <div className="hero-body">
        {/* <div className="text-over-hero">Mike Lin</div> */}
        <div className={`container ${isDesktop && "add-z-index"}`}>
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
              <HoverMoveText
                as="p"
                text="Hi. I'm Mike."
                className="title is-spaced is-size-3-mobile home__text"
                intensity={14}
                radius={120}
                mode="repel"
              />
              <HoverMoveText
                as="p"
                text="Product Designer + Front-End Developer"
                className="subtitle is-spaced is-size-3 is-size-4-mobile home__subtext mb-1 has-text-weight-bold"
                intensity={14}
                radius={120}
                mode="repel"
              />
              <HoverMoveText
                as="p"
                text="Designing and building clear, scalable web experiences"
                className="subtitle is-spaced is-size-4 is-size-5-mobile home__subtext"
                intensity={14}
                radius={120}
                mode="repel"
              />
            </div>
            <div className="column is-6 left"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
