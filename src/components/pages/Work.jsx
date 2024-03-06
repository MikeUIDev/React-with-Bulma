import React from "react";
import Project from "../Project"
import Video from "../Video"
import Nissan from "../../assets/images/Nissan-Heisman-House-ESPN.jpg"
import DisneyAsia from "../../assets/images/Home-Disney-Asia-Advertising-Sales.jpg"
import CreativeWorks from "../../assets/images/Home-ESPN-CreativeWorks.jpg"
import AllState from "../../assets/images/Allstate-AFCA-Good-Works-Team-ESPN.jpg"

import NissanVideo from "../../assets/videos/Nissan-Heisman-House-ESPN.mp4"
import DisneyAsiaVideo from "../../assets/videos/Home-Disney-Asia-Advertising-Sales.mp4"
import CreativeWorksVideo from "../../assets/videos/Home-ESPN-CreativeWorks.mp4"
import AllStateVideo from "../../assets/videos/Allstate-AFCA-Good-Works-Team-ESPN.mp4"



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
                  videoPoster ={Nissan}
                  videoUrl = {NissanVideo}
                  name="Nissan Heisman House"
                  type="Heroku"
                  link="https://promo.espn.com/espn/contests/nissan/heisman/2023/index"
                  description="A promotion campaign associated with the Heisman Trophy, which fans can vote their favorite college football players in the United States."
                />
              </div>
              <div className="column is-6">
                <Project
                  videoPoster ={AllState}
                  videoUrl = {AllStateVideo}
                  name="Allstate AFCA Good Works Team"
                  type="Heroku"
                  link="https://promo.espn.com/espn/contests/allstate/2023/index"
                  description="A promotion campaign which fans can vote their favorite college football players in the United States."
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <Project
                  videoPoster ={CreativeWorks}
                  videoUrl = {CreativeWorksVideo}
                  name="ESPN CreativeWorks"
                  type="Contentful CMS"
                  link="https://showcase.espncreativeworks.com/"
                  description="A promotion campaign associated with the Heisman Trophy, which fans can vote their favorite college football players in the United States."
                />
              </div>
              <div className="column is-6">
                <Project
                  videoPoster ={DisneyAsia}
                  videoUrl = {DisneyAsiaVideo}
                  name="Disney Asia Advertising Sales"
                  type="Contentful CMS"
                  link="https://mikelinstudio.com/images/Home-Disney-Asia-Advertising-Sales.jpg"
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