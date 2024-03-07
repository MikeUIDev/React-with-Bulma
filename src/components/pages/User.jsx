import React from "react";
import foodieCaseStudy from "../../assets/images/foodies-hero.jpg";
import travelBuddyCaseStudy from "../../assets/images/travel-buddy-hero.jpg";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import BackToTop from "../Backtotop";

function User() {
  return (
    <section className="user hero content is-large is-fullheight-with-navbar">
      {/* <div class="hero-body">
        <p class="title">
          Hero title
        </p>
        <p class="subtitle">
          Hero subtitle
        </p>
      </div> */}

      <div className="page-body">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <h1 className="title has-text-white">Case Studies</h1>
              </div>
            </div>
            <div className="columns mb-6">
              <div className="column">
                <p>
                  These were couple case studies I did for the User Experience Design bootcamp I attended at General Assembly.
                </p>
              </div>
            </div>

            <Tabs>
              <TabList>
                <Tab>Foodies</Tab>
                <Tab>Travel Buddy</Tab>
              </TabList>

              <TabPanel>
                <div className="columns">
                  <div className="column is-12">
                    <img className="mb-6" src={foodieCaseStudy} alt="Foodie Cases Study" title="Foodie Case Study"></img>                    
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-4 is-offset-1">
                    Foodies
                    Role
                    Product Designer:
                  </div>
                  <div className="column is-6">
                    <p>Foodies is the final project I worked on during my UX Design bootcamp at General Assembly. It is a restaurant mobile app that search and reserve a table but in addition of that, it also tell the party how long they will have to wait until they are ready to be seated.</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="columns">
                  <div className="column is-12">
                      <img className="mb-6" src={travelBuddyCaseStudy} alt="Travel Buddy Cases Study" title="Travel Buddy Case Study"></img>                 
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4 is-offset-1">
                      Travel Buddy
                      Role
                      Product Designer:
                    </div>
                    <div className="column is-6">
                      <p>Travel Buddy is an concept mobile app that I created while in the process of making my bootcamp project Foodies. This app is to inform travelers all nearby attractions and how to get to their destinations by using public transportations. It also shows you the travel time and different routes you can take.</p>
                    </div>
                </div>
              </TabPanel>
            </Tabs>


            {/* <div className="tabs is-medium is-fullwidth is-centered main-menu">
              <ul>
                <li id="1" className="is-active" data-target="pane-1">
                  <a className="has-text-white">
                    <span>Foodies</span>
                  </a>
                </li>
                <li id="2" data-target="pane-2">
                  <a className="has-text-white">
                    <span>Travel Buddy</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div id="pane-1" className="tab-pane is-active" style={{display: 'block'}}>
                <div className="columns">
                  <div className="column is-12">
                    <img className="mb-6" src={foodieCaseStudy} alt="Foodie Cases Study" title="Foodie Case Study"></img>                    
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-4 is-offset-1">
                    Foodies
                    Role
                    Product Designer:
                  </div>
                  <div className="column is-6">
                    <p>Foodies is the final project I worked on during my UX Design bootcamp at General Assembly. It is a restaurant mobile app that search and reserve a table but in addition of that, it also tell the party how long they will have to wait until they are ready to be seated.</p>
                  </div>
                </div>
              </div>
              <div id="pane-2" className="tab-pane" style={{display: 'none'}}>
                <div className="columns">
                    <div className="column is-12">
                      <img className="mb-6" src={travelBuddyCaseStudy} alt="Travel Buddy Cases Study" title="Travel Buddy Case Study"></img>                 
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4 is-offset-1">
                      Travel Buddy
                      Role
                      Product Designer:
                    </div>
                    <div className="column is-6">
                      <p>Travel Buddy is an concept mobile app that I created while in the process of making my bootcamp project Foodies. This app is to inform travelers all nearby attractions and how to get to their destinations by using public transportations. It also shows you the travel time and different routes you can take.</p>
                    </div>
                  </div>
              </div>
            </div> */}
          </div>

          {/* Back to Top button */}
          <BackToTop />
        </div>
      </div>
    </section>
  );
}

export default User;
