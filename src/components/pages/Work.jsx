import React from "react";
import Project from "../Project";

import Link from "../Link";

import Nissan from "../../assets/images/Nissan-Heisman-House-ESPN.jpg";
import DisneyAsia from "../../assets/images/Home-Disney-Asia-Advertising-Sales.jpg";
import CreativeWorks from "../../assets/images/Home-ESPN-CreativeWorks.jpg";
import AllState from "../../assets/images/Allstate-AFCA-Good-Works-Team-ESPN.jpg";

import NissanVideo from "../../assets/videos/Nissan-Heisman-House-ESPN.mp4";
import DisneyAsiaVideo from "../../assets/videos/Home-Disney-Asia-Advertising-Sales.mp4";
import CreativeWorksVideo from "../../assets/videos/Home-ESPN-CreativeWorks.mp4";
import AllStateVideo from "../../assets/videos/Allstate-AFCA-Good-Works-Team-ESPN.mp4";

import BackToTop from "../Backtotop";

function Work() {
  return (
    <section
      aria-label="Work Experience section"
      className="work hero content is-large is-fullheight-with-navbar fade_in"
    >
      <div className="page-body">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <h1 className="title">Design + Code</h1>
              </div>
            </div>
            <div className="columns mb-6">
              <div className="column">
                <p>
                  A selection of design and front-end projects where I worked
                  across interaction design, UI systems, and production
                  implementation.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <Project
                  videoPoster={CreativeWorks}
                  videoUrl={CreativeWorksVideo}
                  name={
                    <Link
                      listing="ESPN CreativeWorks"
                      urlLink="https://showcase.espncreativeworks.com/"
                    />
                  }
                  type="Contentful CMS"
                  role="UI Design & Front-End Development"
                  stack="Contentful CMS, HTML, CSS, JavaScript"
                  description="Designed and built a scalable, CMS-driven platform that enables ESPN to create custom, co-branded experiences across screens and devices for sports fans."
                />
              </div>
              <div className="column is-6">
                <Project
                  videoPoster={DisneyAsia}
                  videoUrl={DisneyAsiaVideo}
                  name="Disney Asia Advertising Sales"
                  type="Contentful CMS"
                  role="Interface Design & CMS Implementation"
                  stack="Contentful CMS, HTML, CSS, JavaScript"
                  description="Designed and implemented a responsive marketing platform that connects Disney brands with partners across Asia, supporting flexible content management and localization."
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <Project
                  videoPoster={Nissan}
                  videoUrl={NissanVideo}
                  name={
                    <Link
                      listing="2023 Nissan Heisman House"
                      urlLink="https://promo.espn.com/espn/contests/nissan/heisman/2023/index"
                    />
                  }
                  type="Deployed on Heroku"
                  role="Front-End Development & Interaction Design"
                  stack="HTML, CSS, JavaScript, Heroku"
                  description="Built and maintained a high-visibility, interactive event site showcasing top college athletes competing for the Heisman Trophy, optimized for performance and engagement."
                />
              </div>
              <div className="column is-6">
                <Project
                  videoPoster={AllState}
                  videoUrl={AllStateVideo}
                  name={
                    <Link
                      listing="Allstate AFCA Good Works Team"
                      urlLink="https://promo.espn.com/espn/contests/allstate/2023/index"
                    />
                  }
                  type="Deployed on Heroku"
                  role="UI Design & Responsive Front-End"
                  stack="HTML, CSS, JavaScript, Heroku"
                  description="Designed and developed a responsive storytelling site highlighting athletes recognized for their impact on communities, with a focus on clarity, accessibility, and performance."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top button */}
      <BackToTop />
    </section>
  );
}

export default Work;
