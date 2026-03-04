import React, { useState } from "react";

import Link from "../Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import foodieCaseStudy from "../../assets/images/foodies-hero.jpg";
import travelBuddyCaseStudy from "../../assets/images/travel-buddy-hero.jpg";
import Paragraph from "../Paragraph";
import { ButtonNeon } from "../Buttons";

import foodiesPersona from "../../assets/images/foodies-persona.jpg";
import foodiesDraft from "../../assets/images/foodies-draft.jpg";
import storyBoard from "../../assets/images/foodies-user-flow.jpg";

import foodiesHifi01 from "../../assets/images/foodies-hi-fi-prototype-01.jpg";
import foodiesHifi02 from "../../assets/images/foodies-hi-fi-prototype-02.jpg";
import foodiesHifi03 from "../../assets/images/foodies-hi-fi-prototype-03.jpg";
import foodiesHifi04 from "../../assets/images/foodies-hi-fi-prototype-04.jpg";
import foodiesHifi05 from "../../assets/images/foodies-hi-fi-prototype-05.jpg";
import foodiesHifi06 from "../../assets/images/foodies-hi-fi-prototype-06.jpg";
import foodiesHifi07 from "../../assets/images/foodies-hi-fi-prototype-07.jpg";
import foodiesHifi08 from "../../assets/images/foodies-hi-fi-prototype-08.jpg";
import foodiesHifi09 from "../../assets/images/foodies-hi-fi-prototype-09.jpg";

import travelBuddyExpedia from "../../assets/images/travel-expedia-logo.svg";
import travelBuddyTripAdvisor from "../../assets/images/travel-trip-advisor-logo.svg";
import travelBuddy01 from "../../assets/images/travel-interview.jpg";
import travelBuddy02 from "../../assets/images/travel-buddy-persona.jpg";
import travelBuddy03 from "../../assets/images/travel-buddy-japan.jpg";
import travelBuddy04 from "../../assets/images/travel-buddy-ecuador.jpg";
import travelBuddy05 from "../../assets/images/travel-buddy-user-flow.jpg";
import travelBuddy06 from "../../assets/images/travel-buddy-wireframe.jpg";
import travelBuddy07 from "../../assets/images/travel-app-experiment.jpg";
import travelBuddy08 from "../../assets/images/travel-app-experiment-02.jpg";

import designSystems from "../../assets/images/Meta_Wiki_Design_System-Mike_Lin.jpg";
import tekSystemsRedsign from "../../assets/images/Mike_Lin_TEKsystems_page_redesign.png";
import taiwanTravelCo from "../../assets/images/Taiwan_Travel_Co_LandingPage.png";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BackToTop from "../Backtotop";
import Modal from "../Modal";

import "react-tabs/style/react-tabs.css";

function Design() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  return (
    <section
      aria-label="User Experience Design section"
      className="user hero content is-large is-fullheight-with-navbar fade_in"
    >
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
                <h1 className="title">Design</h1>
              </div>
            </div>
            <div className="columns mb-6">
              <div className="column">
                <p>
                  A selection of visual design, interface exploration, and
                  system work focused on clarity, hierarchy, and scalable
                  patterns. This work highlights how I approach layout,
                  typography, and interaction design before moving into
                  production and front-end implementation.
                </p>
              </div>
            </div>
            <div className="columns mb-8">
              <div className="column">
                <h2 className="title mb-6">Landing Page</h2>
                <img
                  className="mb-5"
                  src={taiwanTravelCo}
                  alt="Taiwan Travel Co Landing Page"
                  title="Taiwan Travel Co Landing Page"
                />
                <h5>Taiwan Travel Co Landing Page</h5>
                <p>
                  Designed a visually rich landing page to showcase Taiwan as a
                  travel destination, focusing on strong visual hierarchy,
                  storytelling, and clear calls to action. The layout balances
                  editorial content with imagery to guide users through cultural
                  highlights, attractions, and practical travel information.
                </p>
                <p>Tools used:</p>
                <ul>
                  <li>
                    Figma -{" "}
                    {
                      <Link
                        listing="Prototype"
                        altText="Prototype"
                        urlLink="https://www.figma.com/proto/ryovGRW9QQS49DeTdWur3w/Taiwan-Travel-Co?node-id=0-1&t=sUKIIzkIWODKyDIi-1"
                      />
                    }
                    ,{" "}
                    {
                      <Link
                        listing="Dev Mode"
                        altText="Dev Mode"
                        urlLink="https://www.figma.com/design/ryovGRW9QQS49DeTdWur3w/Taiwan-Travel-Co?node-id=465-2579"
                      />
                    }
                  </li>
                  <li>Affinity Photo</li>
                </ul>

                {/* <div>
                  <button onClick={openModal2}>Open Modal</button>
                  <Modal isOpen={modalOpen2} onClose={closeModal2}>
                    <img className="" src={designSystems} alt="Meta Design Systems" title="Meta Design Systems" />
                  </Modal>
                </div> */}
              </div>
              <div className="column">
                <h2 className="title mb-6">Page Redesign</h2>
                {/* <a href="https://mikelinstudio.com/design/Mike_Lin_TEKsystems_page_redesign.pdf" target="_blank" alt="TEKsystems page redesign" rel="noreferrer">
                  <img className="mb-4" src={tekSystemsRedsign} alt="TEKsystems page redesign" title="TEKsystems page redesign" />
                </a> */}
                <img
                  className="mb-5"
                  src={tekSystemsRedsign}
                  alt="TEKsystems page redesign"
                  title="TEKsystems page redesign"
                />
                <h5>Article Layout Redesign</h5>
                <p>
                  Redesigned a{" "}
                  <a
                    href="https://www.teksystems.com/en/insights/version-next-now/2023/dojo-workforce-development-strategy"
                    alt="TEKsystems Version Next Now"
                    target="_blank"
                    rel="noreferrer"
                  >
                    text-heavy feature article
                  </a>{" "}
                  by modularizing content into scannable sections and
                  rebalancing white space to improve readability and visual
                  flow. The redesign focuses on clearer information hierarchy,
                  improved pacing, and a more comfortable reading experience
                  across screen sizes.
                </p>
                <p>Tools used:</p>
                <ul>
                  <li>
                    Figma -{" "}
                    {
                      <Link
                        listing="Prototype"
                        altText="Prototype"
                        urlLink="https://www.figma.com/proto/M0Mfolj9J6Sk01gkL1EORi/TEKsystems?node-id=0-1&t=VQyzPiOPuauXIwBi-1"
                      />
                    }
                  </li>
                  <li>Affinity Photo</li>
                  <li>Affinity Designer</li>
                </ul>

                {/* <div>
                  <button onClick={openModal}>Open Modal TEK</button>
                  <Modal isOpen={modalOpen} onClose={closeModal}>
                    <img className="" src={tekSystemsRedsign} alt="TEKsystems page redesign" title="TEKsystems page redesign" />
                  </Modal>
                </div> */}
              </div>
            </div>
            <div className="columns mb-8">
              <div className="column">
                <h2 className="title mb-6">Design Systems</h2>
                <img
                  className="mb-5"
                  src={designSystems}
                  alt="Meta Design Systems"
                  title="Meta Design Systems"
                />
                <h5>Internal Design System (Meta)</h5>
                <p>
                  Created a modular design system from a new brand guideline to
                  support consistent UI patterns and faster iteration across
                  teams. The system focused on reusable components, spacing
                  rules, typography scales, and color usage to help both
                  designers and non-designers build interfaces that felt
                  cohesive and production-ready.
                </p>
                <p>
                  The goal was to reduce ambiguity in layout decisions, improve
                  consistency across surfaces, and make handoff to engineering
                  smoother and more predictable.
                </p>
                <p>Tool used:</p>
                <ul>
                  <li>Figma</li>
                </ul>

                {/* <div>
                  <button onClick={openModal2}>Open Modal</button>
                  <Modal isOpen={modalOpen2} onClose={closeModal2}>
                    <img className="" src={designSystems} alt="Meta Design Systems" title="Meta Design Systems" />
                  </Modal>
                </div> */}
              </div>
              <div className="column"></div>
            </div>

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

export default Design;
