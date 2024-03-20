import React from "react";
import Project from "../Project"

import Link from "../Link"

import Nissan from "../../assets/images/Nissan-Heisman-House-ESPN.jpg"
import DisneyAsia from "../../assets/images/Home-Disney-Asia-Advertising-Sales.jpg"
import CreativeWorks from "../../assets/images/Home-ESPN-CreativeWorks.jpg"
import AllState from "../../assets/images/Allstate-AFCA-Good-Works-Team-ESPN.jpg"

import NissanVideo from "../../assets/videos/Nissan-Heisman-House-ESPN.mp4"
import DisneyAsiaVideo from "../../assets/videos/Home-Disney-Asia-Advertising-Sales.mp4"
import CreativeWorksVideo from "../../assets/videos/Home-ESPN-CreativeWorks.mp4"
import AllStateVideo from "../../assets/videos/Allstate-AFCA-Good-Works-Team-ESPN.mp4"

import BackToTop from "../Backtotop";

function Work() {
  return (
    <section aria-label="Work Experience section" className="work hero content is-large is-fullheight-with-navbar">
      <div className="page-body">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <h1 className="title">Work</h1>
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <Project
                  videoPoster ={CreativeWorks}
                  videoUrl = {CreativeWorksVideo}
                  name={<Link listing="ESPN CreativeWorks" urlLink="https://showcase.espncreativeworks.com/" />}
                  type="Contentful CMS"
                  description="A resource to develop custom co-branded and client-branded creative across all screens and devices specifically targeted to sports fans and ESPN's audience"
                />
              </div>
              <div className="column is-6">
                <Project
                  videoPoster ={DisneyAsia}
                  videoUrl = {DisneyAsiaVideo}
                  name="Disney Asia Advertising Sales"
                  type="Contentful CMS"
                  description="A site that connects Fans with different brands in Asia."
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <Project
                  videoPoster ={Nissan}
                  videoUrl = {NissanVideo}
                  name={<Link listing="Nissan Heisman House" urlLink="https://promo.espn.com/espn/contests/nissan/heisman/2023/index" />}
                  type="Heroku"
                  description="Yearly event from Nissan Heisman House featuring top atheletes to compete for the spot of Heisman Trophy."
                />
              </div>
              <div className="column is-6">
                <Project
                  videoPoster ={AllState}
                  videoUrl = {AllStateVideo}
                  name={<Link listing="Allstate AFCA Good Works Team" urlLink="https://promo.espn.com/espn/contests/allstate/2023/index" />}
                  type="Heroku"
                  description="Allstate promos top athletes for their recognizes of their efforts for community off the field services."
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