import React from "react";
import Project from "../Project"
import Nissan from "../../assets/images/Nissan-Heisman-House-ESPN.jpg"

function Work() {
  return (
    <section className="work hero content is-large is-fullheight-with-navbar"> 
      <div className="page-body">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <h1 className="title has-text-white">Work</h1>
              </div>
            </div>
            <div className="columns mb-6">
              <div className="column">
                <p>
                  This is showcase of my most recent work. The world of IoT is constantly evolving and I am learning new skills every day.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <Project
                  img={Nissan}
                  name="Nissan Heisman House"
                  type="Heroku"
                  link="https://promo.espn.com/espn/contests/nissan/heisman/2023/index"
                  description="A promotion campaign associated with the Heisman Trophy, which fans can vote their favorite college football players in the United States."
                />
              </div>
              <div className="column is-6">
                <Project
                  img={Nissan}
                  name="Disney Asia"
                  type="Contentful CMS"
                  link="https://mikelinstudio.com"
                  description="Showcase Disney campaigns in an Asia territory."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
