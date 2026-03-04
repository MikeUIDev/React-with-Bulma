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

function User() {
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
                <h1 className="title">User Experience</h1>
              </div>
            </div>
            <div className="columns mb-6">
              <div className="column">
                <h2 className="title mb-6">Case Studies</h2>
                <p>
                  These UX case studies explore user-centered design approaches
                  developed during an intensive UX design program, with a focus
                  on research, interaction design, prototyping, and usability
                  testing.
                </p>
              </div>
            </div>
            <Tabs>
              <TabList>
                <Tab>Foodie</Tab>
                <Tab>Travel Buddy</Tab>
              </TabList>

              <TabPanel>
                <div className="columns">
                  <div className="column is-12">
                    <img
                      className="mb-6"
                      src={foodieCaseStudy}
                      alt="Foodie Cases Study"
                      title="Foodie Case Study"
                    ></img>
                  </div>
                </div>
                <div className="columns mb-12">
                  <div className="column is-12 is-offset-1 is-flex is-flex-direction-column">
                    <span className="is-size-2 mb-4 has-text-weight-bold">
                      Foodie
                    </span>
                    <span className="is-size-5">Role: UX Designer</span>
                    <span className="is-size-5">
                      Scope: Research, interaction design, usability testing,
                      prototyping
                    </span>
                    <span className="is-size-5">
                      Platform: Mobile (concept)
                    </span>
                    <span className="is-size-5">
                      Outcome: Reducing uncertainty around restaurant wait times
                      by providing clear, real-time feedback
                    </span>
                  </div>
                </div>
                <div className="columns mb-8">
                  <div className="column is-10 is-offset-1">
                    <p>
                      Foodie is a concept mobile app designed to help users
                      discover nearby restaurants while clearly understanding
                      how long they can expect to wait before being served. This
                      case study focuses on improving the waiting experience by
                      replacing uncertainty with clear, real-time feedback at
                      the moment of decision.
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Problem Statement</h3>
                    <p>
                      Many people enjoy discovering new food spots, but long and
                      unpredictable wait times often lead to frustration and
                      abandoned plans. Users frequently have no reliable way to
                      estimate how long they’ll wait, making it difficult to
                      decide whether a restaurant is worth visiting.
                    </p>
                    <p>
                      The lack of visibility creates anxiety and friction at a
                      key moment in the dining journey.
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <h4 className="has-text-weight-bold">Goal</h4>
                    <p>
                      The goal was to reduce uncertainty during the waiting
                      phase by giving users a clear, understandable estimate of
                      wait time—helping them make informed decisions and feel
                      more in control of their experience.
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <p className="has-text-weight-bold is-size-2 is-size-4-mobile big-quote">
                      "Improve the waiting experience by replacing uncertainty
                      with clear, timely feedback."
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">
                      User Research & Assumptions
                    </h3>
                    <p>
                      Due to time constraints, this project relied on
                      lightweight research methods, including informal
                      interviews and observational insights from frequent
                      diners.
                    </p>
                    <p>Key Insight:</p>
                    <ul>
                      <li>
                        Users are more frustrated by not knowing how long
                        they'll wait than by waiting itself
                      </li>
                      <li>
                        People are willing to wait longer if expectations are
                        clearly set
                      </li>
                      <li>
                        Users want quick answers, not detailed explanations, at
                        decision time
                      </li>
                    </ul>
                    <p>
                      These insights informed the focus on clarity over
                      precision.
                    </p>
                  </div>
                </div>
                {/* <Paragraph paragraph="I want to focus on creating and solving everyday problems based on personal experiences and dining out is one of my favorite activities. So I began to think through how to make my dining activity more enjoyable. The restaurant is a vast industry and it caters millions of people's taste buds every day. No one person likes what others eat or vice versa so there are many varieties to choose from. However, finding common ground about food tasting is not what I am trying to solve." />
                <Paragraph paragraph="After strolling around towns for a couple days, I have found something that is really common: Waiting in line." />
                <Paragraph paragraph="Don't get me wrong. Waiting in line for something you enjoy isn't all that bad... except for the feeling of uncertainty from waiting blindly." />
                <Paragraph paragraph="Once I have defined what opportunities my product has within the market, it is time to sketch up low-fidelity concepts." /> */}
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Persona</h3>
                    <img
                      src={foodiesPersona}
                      alt="Foodies Persona"
                      title="Foodies Persona"
                    ></img>
                    <p className="mt-5">
                      Jenny lives in a busy city and enjoys exploring new food
                      spots in her free time. She works irregular hours and
                      often makes dining plans on short notice. Long,
                      unpredictable wait times are a major pain point and
                      frequently cause her to abandon plans.
                    </p>
                    <p>
                      The persona helped anchor design decisions around time
                      sensitivity and spontaneity, but did not drive every
                      decision.
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">
                      Sketching & Exploration
                    </h3>
                    <p>
                      I began by sketching multiple interaction patterns to
                      explore how wait-time information could be introduced
                      without overwhelming users. The goal was to surface the
                      estimate early and clearly, while keeping the interface
                      lightweight.
                    </p>
                    <p>
                      These sketches helped identify the simplest flow for
                      communicating wait time as part of the restaurant
                      discovery experience.
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h5 className="has-text-weight-bold">Paper Prototyping</h5>
                    <p>
                      Paper prototypes were used to quickly test layout and
                      information hierarchy before moving into high-fidelity
                      design. This stage helped validate:
                    </p>
                    <ul>
                      <li>Where wait-time information should appear</li>
                      <li>How much context users needed</li>
                      <li>
                        Whether visual indicators were easier to understand than
                        text alone
                      </li>
                    </ul>
                    <p>
                      Early feedback showed that users preferred simple visual
                      cues paired with short text explanations.
                    </p>
                    <img
                      className="mb-5"
                      src={foodiesDraft}
                      alt="Prototype"
                      title="Prototype"
                    ></img>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Interaction Flow</h3>
                    <p>
                      I mapped the core user flow to ensure the waiting
                      information fit naturally into the discovery journey. The
                      flow focused on:
                    </p>
                    <ul>
                      <li>Minimizing steps between discovery and decision</li>
                      <li>Reducing cognitive load at key moments</li>
                      <li>Keeping interactions predictable and consistent</li>
                    </ul>
                    <p>
                      This helped identify unnecessary screens and streamline
                      the experience.
                    </p>
                    <img
                      className="mb-5"
                      src={storyBoard}
                      alt="Prototype"
                      title="Prototype"
                    ></img>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h5 className="has-text-weight-bold">Usability Testing</h5>
                    <p>
                      In-person usability testing was conducted to evaluate
                      whether users understood the wait-time indicators and felt
                      confident making decisions based on them.
                    </p>
                    <p>Key findings:</p>
                    <ul>
                      <li>Users immediately noticed visual wait indicators</li>
                      <li>
                        Clear ranges (e.g., “10-15 min”) felt more trustworthy
                        than exact numbers
                      </li>
                      <li>
                        Small changes in wording significantly affected
                        perceived accuracy
                      </li>
                    </ul>
                    <p>
                      These insights led to refinements in labeling and visual
                      hierarchy.
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <p className="has-text-weight-bold is-size-2 is-size-4-mobile big-quote">
                      "The new and improved version shaved off a few seconds off
                      the clock because of a simpler happy path and that is
                      definitely an improvement."
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">
                      High-Fidelity Prototype
                    </h3>
                    <p>
                      Based on testing feedback, I built a high-fidelity
                      prototype that balanced clarity with visual simplicity.
                      The design emphasized:
                    </p>
                    <ul>
                      <li>Prominent wait-time visibility</li>
                      <li>Clear primary actions</li>
                      <li>Consistent spacing and hierarchy</li>
                    </ul>
                    <p>
                      The final prototype focused on helping users quickly
                      answer one question:
                      <span className="has-text-weight-bold">
                        <br />
                        “Is this place worth the wait right now?”
                      </span>
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">
                      Outcome & Reflection
                    </h3>
                    <p>
                      This project demonstrated that even small improvements in
                      feedback timing and clarity can significantly reduce user
                      frustration. By focusing on expectation-setting rather
                      than precision, the experience felt more trustworthy and
                      approachable.
                    </p>
                    <p>If I were to continue this project, I would explore:</p>
                    <ul>
                      <li>Edge cases such as inaccurate estimates</li>
                      <li>Real-time updates and confidence indicators</li>
                      <li>How wait times affect group decision-making</li>
                    </ul>
                  </div>
                </div>
                <div class="columns is-centered has-text-centered mt-6 mb-6">
                  <div class="column">
                    <ButtonNeon
                      buttonLink="https://mikelinstudio.com/case-study/Foodie-Mike-Lin-UserCase.pdf"
                      buttonName="Download Case Study"
                      target="_blank"
                    />
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1 is-flex is-flex-wrap-wrap is-justify-content-start is-align-items-start">
                    <img
                      className="mb-5 mr-4"
                      src={foodiesHifi01}
                      alt="High Fidelity"
                      title="High Fidelity"
                    />
                    <img
                      className="mb-5 mr-4"
                      src={foodiesHifi02}
                      alt="High Fidelity"
                      title="High Fidelity"
                    />
                    <img
                      className="mb-5 mr-4"
                      src={foodiesHifi03}
                      alt="High Fidelity"
                      title="High Fidelity"
                    />
                    <img
                      className="mb-5 mr-4"
                      src={foodiesHifi04}
                      alt="High Fidelity"
                      title="High Fidelity"
                    />
                    <img
                      className="mb-5 mr-4"
                      src={foodiesHifi05}
                      alt="High Fidelity"
                      title="High Fidelity"
                    />
                    <img
                      className="mb-5 mr-4"
                      src={foodiesHifi06}
                      alt="High Fidelity"
                      title="High Fidelity"
                    />
                    <img
                      className="mb-5 mr-4"
                      src={foodiesHifi07}
                      alt="High Fidelity"
                      title="High Fidelity"
                    />
                    <img
                      className="mb-5 mr-4"
                      src={foodiesHifi08}
                      alt="High Fidelity"
                      title="High Fidelity"
                    />
                    <img
                      className="mb-5 mr-4"
                      src={foodiesHifi09}
                      alt="High Fidelity"
                      title="High Fidelity"
                    />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="columns">
                  <div className="column is-12">
                    <img
                      className="mb-6"
                      src={travelBuddyCaseStudy}
                      alt="Travel Buddy Cases Study"
                      title="Travel Buddy Case Study"
                    ></img>
                  </div>
                </div>
                <div className="columns mb-12">
                  <div className="column is-10 is-offset-1 is-flex is-flex-direction-column">
                    <span className="is-size-2 mb-4 has-text-weight-bold">
                      Travel Buddy
                    </span>
                    <span className="is-size-5">
                      Role: Product / UX Designer
                    </span>
                    <span className="is-size-5">
                      Scope: Research synthesis, interaction design, information
                      architecture, prototyping
                    </span>
                    <span className="is-size-5">
                      Platform: Mobile (concept)
                    </span>
                    <span className="is-size-5">
                      Focus: Helping travelers discover nearby attractions and
                      plan routes using public transportation with minimal
                      friction
                    </span>
                  </div>
                </div>
                <div className="columns mb-8">
                  <div className="column is-10 is-offset-1">
                    <p>
                      This project explores how discovery and transit planning
                      can be combined into a single, lightweight experience for
                      travelers on the move.
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Problem Statement</h3>
                    <p>
                      When visiting a new city, travelers often want to explore
                      nearby attractions—but planning a route with public
                      transportation takes time and usually requires switching
                      between multiple apps. The friction adds up, especially
                      when users are deciding in the moment.
                    </p>
                    <p>
                      Travel Buddy addresses this by combining discovery and
                      transit guidance so users can quickly answer:
                      <br />
                      <span className="has-text-weight-bold">
                        “What's worth visiting nearby, and how do I get there
                        right now?”
                      </span>
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">The Challenge</h3>
                    <p>
                      Design a simple experience that supports two different
                      mindsets:
                    </p>
                    <ul>
                      <li>Exploring (browsing attractions nearby)</li>
                      <li>
                        Committing (choosing a destination and navigating via
                        transit)
                      </li>
                    </ul>
                    <p>
                      The main challenge was balancing richness (routes,
                      options, time estimates) with clarity—so the interface
                      stays useful without becoming overwhelming.
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Competitors</h3>
                  </div>
                </div>
                <div className="columns has-background-light pt-4 pb-4 mb-5">
                  <div className="column is-5 is-offset-1 mr-6">
                    <img
                      className=""
                      style={{ width: "100%" }}
                      src={travelBuddyExpedia}
                      alt="Expedia"
                      title="Expedia"
                    ></img>
                  </div>
                  <div className="column is-5">
                    <img
                      className=""
                      src={travelBuddyTripAdvisor}
                      alt="Trip Advisor"
                      title="Trip Advisor"
                    ></img>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <p>
                      I reviewed products like Expedia and Tripadvisor to
                      understand how travelers discover places and plan
                      activities. These tools provide strong discovery and
                      reviews, but transit planning often feels secondary or
                      pushes users into other apps.
                    </p>
                    <p>
                      <span className="has-text-weight-bold">Opportunity:</span>{" "}
                      make transit routing feel like a natural extension of
                      discovery—especially for users relying on public
                      transportation.
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Ideas</h3>
                    <p>
                      Early concepts explored different ways to reduce planning
                      effort:
                    </p>
                    <ul>
                      <li>
                        Showing top nearby attractions with a clear “time to get
                        there” signal
                      </li>
                      <li>
                        Using a simple route comparison (fastest vs fewest
                        transfers)
                      </li>
                      <li>
                        Keeping decisions lightweight with scannable cards
                        instead of long detail pages
                      </li>
                    </ul>
                    <p>
                      The goal was to help users move from “maybe” to “go” with
                      minimal steps.
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h5 className="has-text-weight-bold">Hypotheses</h5>
                    <p>I worked from a few guiding assumptions:</p>
                    <ul>
                      <li>
                        If transit time is visible at the discovery stage, users
                        will feel more confident choosing a destination.
                      </li>
                      <li>
                        Clear route comparisons (rather than full transit
                        complexity) will reduce decision fatigue.
                      </li>
                      <li>
                        Travelers prefer a small set of strong recommendations
                        over an exhaustive list when they're on the go.
                      </li>
                    </ul>
                    <p>
                      These hypotheses shaped what information I prioritized in
                      the UI.
                    </p>
                    <img
                      className="mb-5"
                      src={travelBuddy01}
                      alt="Travel Interview"
                      title="Travel Interview"
                    ></img>
                    <h5 className="has-text-weight-bold">Approach</h5>
                    <p>
                      This project used lightweight research and iterative
                      design:
                    </p>
                    <ul>
                      <li>
                        Competitive review to understand market patterns and
                        gaps
                      </li>
                      <li>
                        Rapid sketching and low-fidelity wireframes to explore
                        structure and flow
                      </li>
                      <li>
                        Quick feedback loops to validate clarity and navigation
                        before high-fidelity prototyping
                      </li>
                    </ul>
                    <p>
                      The focus was on testing comprehension and flow, not
                      visual polish at the early stages.
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Objective</h3>
                    <p>Create a mobile experience that helps travelers:</p>
                    <ul>
                      <li>Discover nearby attractions</li>
                      <li>Compare transit options quickly</li>
                      <li>Choose a route confidently</li>
                      <li>Understand time and steps at a glance</li>
                    </ul>
                    <p>
                      Success meant users could plan a short trip without
                      switching apps or getting lost in transit details.
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h5 className="has-text-weight-bold">Persona</h5>
                    <p>
                      The primary user is a traveler who is new to the city and
                      relies on public transportation. They want to explore
                      efficiently, prefer clear guidance, and often make plans
                      spontaneously based on location and time.
                    </p>
                    <img
                      className="mb-5"
                      src={travelBuddy02}
                      alt="Persona"
                      title="Persona"
                    ></img>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h5 className="has-text-weight-bold">Design Approach</h5>
                    <p>
                      I used early notes and quick sketches to identify what
                      information mattered most at decision time. The biggest
                      emphasis became:
                    </p>
                    <ul>
                      <li>Time to destination</li>
                      <li>Route options</li>
                      <li>Effort to get there (transfers / walking)</li>
                    </ul>
                    <p>
                      That insight directly informed the structure of the
                      attraction cards and routing screens.
                    </p>
                  </div>
                </div>

                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">
                      Competitive Analysis
                    </h3>
                    <p>Key takeaways from competitor products:</p>
                    <ul>
                      <li>
                        Discovery content is strong, but route planning is often
                        buried or disconnected.
                      </li>
                      <li>
                        Many apps overload users with detail before they've
                        committed to a destination.
                      </li>
                      <li>
                        When transit is shown, it's usually not optimized for
                        quick comparison.
                      </li>
                    </ul>
                    <p>
                      <span className="has-text-weight-bold">
                        Design direction:
                      </span>{" "}
                      surface transit time earlier and keep route options
                      simplified until the user asks for more detail.
                    </p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-5 is-offset-1">
                    <img
                      className="mb-5"
                      src={travelBuddy03}
                      alt="Japan"
                      title="Japan"
                    ></img>
                  </div>
                  <div className="column is-5">
                    <img
                      className="mb-5"
                      src={travelBuddy04}
                      alt="Ecuador"
                      title="Ecuador"
                    ></img>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">
                      Sitemap and User Flow
                    </h3>
                    <p>
                      I mapped the sitemap and user flow to keep the journey
                      short and predictable:
                    </p>
                    <ul>
                      <li>
                        Nearby discovery → attraction details → route options →
                        route confirmation
                      </li>
                    </ul>
                    <p>
                      The flow intentionally minimizes backtracking and keeps
                      the primary action clear at each step.
                    </p>
                    <img
                      className="mb-5"
                      src={travelBuddy05}
                      alt="User Flow"
                      title="User Flow"
                    ></img>
                    <h3 className="has-text-weight-bold">
                      Low Fidelity Wireframes
                    </h3>
                    <p>
                      Low-fidelity wireframes explored layout and hierarchy
                      before visual design. This stage helped validate:
                    </p>
                    <ul>
                      <li>Where “time to destination” should live</li>
                      <li>How to compare route options without clutter</li>
                      <li>
                        How quickly users could return to discovery after
                        viewing details
                      </li>
                    </ul>
                    <p>
                      I iterated on these screens to reduce steps and make the
                      navigation feel obvious.
                    </p>
                    <img
                      className="mb-5"
                      src={travelBuddy06}
                      alt="Wireframe"
                      title="Wireframe"
                    ></img>
                    <h3 className="has-text-weight-bold">
                      High Fidelity Prototypes
                    </h3>
                    <p>
                      The high-fidelity prototype focused on clarity and
                      scanability:
                    </p>
                    <ul>
                      <li>
                        Attraction cards emphasize location and time-to-reach
                      </li>
                      <li>Route comparisons are presented as simple choices</li>
                      <li>Details are available, but not forced up front</li>
                    </ul>
                    <p>
                      The intent was to keep the UI light while still supporting
                      real decisions.
                    </p>
                    <img
                      className="mb-5"
                      src={travelBuddy07}
                      alt="High Fidelity"
                      title="High Fidelity"
                    ></img>
                    <img
                      className="mb-5"
                      src={travelBuddy08}
                      alt="High Fidelity 2"
                      title="High Fidelity 2"
                    ></img>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">
                      Outcome & Reflection
                    </h3>
                    <p>
                      This concept reinforced that route planning feels easier
                      when it’s integrated into discovery—especially when users
                      can see time-to-destination early. The most important
                      design choice was keeping route options comparable, not
                      exhaustive.
                    </p>
                    <p>If I continued this project, I'd test:</p>
                    <ul>
                      <li>
                        Edge cases (service interruptions, late-night routes,
                        accessibility needs)
                      </li>
                      <li>
                        Different traveler modes (solo vs group, planning ahead
                        vs spontaneous)
                      </li>
                      <li>
                        Data trust signals (confidence levels or last-updated
                        timing)
                      </li>
                    </ul>
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
