import React from "react";

import foodieCaseStudy from "../../assets/images/foodies-hero.jpg";
import travelBuddyCaseStudy from "../../assets/images/travel-buddy-hero.jpg";
import Paragraph from "../Paragraph";
import {ButtonNeon} from "../Buttons"

import foodiesPersona from "../../assets/images/foodies-persona.jpg"
import foodiesDraft from "../../assets/images/foodies-draft.jpg"
import storyBoard from "../../assets/images/foodies-user-flow.jpg"

import foodiesHifi01 from "../../assets/images/foodies-hi-fi-prototype-01.jpg"
import foodiesHifi02 from "../../assets/images/foodies-hi-fi-prototype-02.jpg"
import foodiesHifi03 from "../../assets/images/foodies-hi-fi-prototype-03.jpg"
import foodiesHifi04 from "../../assets/images/foodies-hi-fi-prototype-04.jpg"
import foodiesHifi05 from "../../assets/images/foodies-hi-fi-prototype-05.jpg"
import foodiesHifi06 from "../../assets/images/foodies-hi-fi-prototype-06.jpg"
import foodiesHifi07 from "../../assets/images/foodies-hi-fi-prototype-07.jpg"
import foodiesHifi08 from "../../assets/images/foodies-hi-fi-prototype-08.jpg"
import foodiesHifi09 from "../../assets/images/foodies-hi-fi-prototype-09.jpg"

import travelBuddyExpedia from "../../assets/images/travel-expedia-logo.svg"
import travelBuddyTripAdvisor from "../../assets/images/travel-trip-advisor-logo.svg"
import travelBuddy01 from "../../assets/images/travel-interview.jpg"
import travelBuddy02 from "../../assets/images/travel-buddy-persona.jpg"
import travelBuddy03 from "../../assets/images/travel-buddy-japan.jpg"
import travelBuddy04 from "../../assets/images/travel-buddy-ecuador.jpg"
import travelBuddy05 from "../../assets/images/travel-buddy-user-flow.jpg"
import travelBuddy06 from "../../assets/images/travel-buddy-wireframe.jpg"
import travelBuddy07 from "../../assets/images/travel-app-experiment.jpg"
import travelBuddy08 from "../../assets/images/travel-app-experiment-02.jpg"

import designSystems from "../../assets/images/Meta_Wiki_Design_System-Mike_Lin.jpg"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import BackToTop from "../Backtotop";

function User() {
  return (
    <section aria-label="User Experience Design section" className="user hero content is-large is-fullheight-with-navbar">
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
                <h2 className="mb-6">Visual Design</h2>
                <p>Meta landing page design systems</p>
                <img className="mb-6" src={designSystems} alt="Meta Design Systems" title="Meta Design Systems" />


              </div>
            </div>

            <div className="columns mb-6">
              <div className="column">
                <h2 className="mb-6">UX Case Studies</h2>
                <p>These were couple case studies I did for the User Experience Design bootcamp I attended at General Assembly.</p>
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
                    <img className="mb-6" src={foodieCaseStudy} alt="Foodie Cases Study" title="Foodie Case Study"></img>
                  </div>
                </div>
                <div className="columns mb-8">
                  <div className="column is-4 is-offset-1 is-flex is-flex-direction-column">
                    <span className="is-size-3 mb-4 has-text-weight-bold">Foodie</span>
                    <span>Role:</span>
                    <span>Product Designer</span>
                  </div>
                  <div className="column is-6">
                    <p>Foodie is the final project I worked on during my UX Design bootcamp at General Assembly. It is a restaurant mobile app that search and reserve a table but in addition of that, it also tell the party how long they will have to wait until they are ready to be seated.</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Problem Statement</h3>
                    <p>Many restaurants are accepting reservations in advance so nobody has to wait. In some other restaurants they adopt the method first come first serve basics. The second methods seems to work well in a less crowded restaurant but it will become a disaster when diners started to flood in.</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <p className="has-text-weight-bold is-size-2 is-size-4-mobile big-quote">"The goal is to improve the waiting experience by giving them a real time estimate."</p>
                  </div>
                </div>
                <Paragraph
                  paragraph="I want to create and solve everyday problem based on personal experiences and dining out is one of my favor activities. So I began to think through how to make my dining activity more enjoyable. Restaurant is a vast industry and it caters million of people's taste buds everyday. No one person likes what others eat or vice visa so there are many varieties to choose from. However, finding common ground about food tasting is not what I am trying to solve."
                />
                <Paragraph
                  paragraph="After strolling around towns a couple days, I have found something that is really common: Waiting in line."
                />
                <Paragraph
                  paragraph="Don't get me wrong. Waiting in line for something you enjoy isn't all that bad... except the feeling of uncertainty from waiting blindly."
                />
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Conceiving</h3>
                    <p>Following the goal of my product comes the creation of concepts. I begin finding myself drawing, sketching, and developing the visual flow of the product. This is the bare bone system of my product that will be developed upon throughout the design process. Also, lets not forget the importance of planning where the content is going to be.</p>
                  </div>
                </div>
                <Paragraph
                  paragraph="Once I have defined what opportunities my product has within the market, it is time to sketch up low-fidelity concepts."
                />
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Persona</h3>
                    <img src={foodiesPersona} alt="Foodies Persona" title="Foodies Persona"></img>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Sketching</h3>
                    <p>Personally, I think this phrase is the most exciting part because I finally get to see what the potential product will be like. There are many ways to sketching out prototypes and I find using this method is the best and fastest way to convey my idea out faster.</p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h5 className="has-text-weight-bold">Paper Prototype</h5>
                    <p>The purpose of sketching is to present the functions and flow of the potential finish product. I will go through many different mockups making sure I have the core functions set in stone and not think of any pretty stuff such as colors and images. Colors will be deal with it later.</p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Prototyping</h3>
                    <p>Once I have created skeletal sketches and potential contents on paper prototype, it is time to validate the ideas of how my product is going to work with my end-users. This stage is indeed a very important to make sure all of the features within my product run smoothly and without problems. Of course, if there are problems (which is a good thing) I can always go back to sketching and develop updated version to eliminate that specific problems.</p>
                    <img className="mb-5" src={foodiesDraft} alt="Prototype" title="Prototype"></img>
                    <p>When I first began this project, I have a vision on what this product will look like and how it will work. However, the world doesn't revolve around me and no one thinks alike.</p>
                    <p>In order to better understand how my product will work with the end-user, I have to conduct an in-person testing.</p>
                    <p>The problem is what demographic of user should I use?</p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h5 className="has-text-weight-bold">In-person User Testing</h5>
                    <p>Choosing my target audience requires knowing how my product will react to it. So choosing a specific demographic field is important. I would think user at any ages will be suffice but looking around towns and restaurants, users at their early 20s and through mid 30s would be the most active group. Why? Because they are the most curious group and out exploring new experiences before settling down for child, family or other life changing events.</p>
                    <p>Before I invite users for testing, I prepare a story and several scenarios for user to follow.</p>
                    <p>This can be conducted in two different ways:</p>
                    <ol>
                      <li>Create a story board or scenarios where I direct the participants to do certain tasks.</li>
                      <li>Let the participants to go through their own pace.</li>
                    </ol>
                    <p>This is the only chance I get to test my product with real user data so jogs down any information is essential to further improve my product.</p>
                    <img className="mb-5" src={storyBoard} alt="Prototype" title="Prototype"></img>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <p className="has-text-weight-bold is-size-2 is-size-4-mobile big-quote">"The new and improved version shaved off a few seconds off the clock because of simplier happy path and that is definitely an improvement."</p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Building High Fidelity Prototype</h3>
                    <p>This build phrase is where I take all the information and feedback gathered from prototyping and user testing and I start to build the product with design layout. I load up Sketch program and begin to experiment with different kind of layouts, colors, buttons, font sizes, and images.</p>
                    <p>Once the final iteration is done, more testing is necessary. The more feedback I get from testing, the finer my product will be. So it is all about testing, testing, testing. It doesn't just end there when a product is released into the wild. There will be more functionalities to add and bugs fixes later.</p>
                  </div>
                </div>
                <div class="columns is-centered has-text-centered mt-6 mb-6">
                  <div class="column">
                    <ButtonNeon
                      buttonLink = "https://mikelinstudio.com/case-study/Foodie-Mike-Lin-UserCase.pdf"
                      buttonName = "Download Case Study"
                      target="_blank"
                    />
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1 is-flex is-flex-wrap-wrap is-justify-content-start is-align-items-start">
                    <img className="mb-5 mr-4" src={foodiesHifi01} alt="High Fidelity" title="High Fidelity" />
                    <img className="mb-5 mr-4" src={foodiesHifi02} alt="High Fidelity" title="High Fidelity" />
                    <img className="mb-5 mr-4" src={foodiesHifi03} alt="High Fidelity" title="High Fidelity" />
                    <img className="mb-5 mr-4" src={foodiesHifi04} alt="High Fidelity" title="High Fidelity" />
                    <img className="mb-5 mr-4" src={foodiesHifi05} alt="High Fidelity" title="High Fidelity" />
                    <img className="mb-5 mr-4" src={foodiesHifi06} alt="High Fidelity" title="High Fidelity" />
                    <img className="mb-5 mr-4" src={foodiesHifi07} alt="High Fidelity" title="High Fidelity" />
                    <img className="mb-5 mr-4" src={foodiesHifi08} alt="High Fidelity" title="High Fidelity" />
                    <img className="mb-5 mr-4" src={foodiesHifi09} alt="High Fidelity" title="High Fidelity" />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="columns">
                  <div className="column is-12">
                      <img className="mb-6" src={travelBuddyCaseStudy} alt="Travel Buddy Cases Study" title="Travel Buddy Case Study"></img>
                    </div>
                  </div>
                  <div className="columns mb-8">
                  <div className="column is-4 is-offset-1 is-flex is-flex-direction-column">
                    <span className="is-size-3 mb-4 has-text-weight-bold">Travel Buddy</span>
                    <span>Role:</span>
                    <span>Product Designer</span>
                  </div>
                    <div className="column is-6">
                      <p>Travel Buddy is an concept mobile app that I created while in the process of making my bootcamp project Foodie. This app is to inform travelers all nearby attractions and how to get to their destinations by using public transportations. It also shows you the travel time and different routes you can take.</p>
                    </div>
                </div>
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Problem Statement</h3>
                    <p>This app hope to inform people all nearby attractions such as restaurants, activities, public transportations and also the schedule of public transportation.</p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">The Challenge</h3>
                    <p>To make their trips easier for travelers to find everything they need in an easy-to-navigate app. Even non-tech savvy can operate it.</p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Competitors</h3>
                  </div>
                </div>
                <div className="columns has-background-light pt-4 pb-4">
                  <div className="column is-5 is-offset-1 mr-6">
                    <img className="" style={{width: '100%'}} src={travelBuddyExpedia} alt="Expedia" title="Expedia"></img>
                  </div>
                  <div className="column is-5">
                    <img className="" src={travelBuddyTripAdvisor} alt="Trip Advisor" title="Trip Advisor"></img>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Ideas</h3>
                    <p>My initial objective was to how to improve the experience of booking a travel from planning and researching, reserving and finding a great deal, and the actual experience of traveling.</p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h5 className="has-text-weight-bold">Hypotheses</h5>
                    <p>Go on a vacation is probably the only thing that no one hates. It is a great way to explore new adventure and the best of all to get rid of stress and negative thoughts about life. However, booking an entire trip takes time and time a lot of people don't have.</p>
                    <img className="mb-5" src={travelBuddy01} alt="Travel Interview" title="Travel Interview"></img>
                    <h5 className="has-text-weight-bold">Methods</h5>
                    <p>I conducted interviews with travelers and survey what kind of people use what kind of services more. For examples, people who are savvy about computer tend to use online reservation for all their needs. On the contrary, older people and maybe family tend to use other methods such as travel agency to help them book vacation. </p>
                    <p>Also, what steps are need it to take in order to bring in more travelers during busy and off season. Summer is the busiest season and prices usually go up.</p>
                    <img className="mb-5" src={travelBuddy02} alt="Persona" title="Persona"></img>
                    <h5 className="has-text-weight-bold">Conduct</h5>
                    <p>During one weekend I went to a Travel & Adventure Trade show down in Santa Clara Convention Center, where many travel agency and tourist attraction companies gathered there to show off deals and information.</p>
                    <p>For interviewees, I asked them questions about what they do, why are they here today, and who are you trying to help. All of them said they were here because they wanted to promote their products to bring more customers to buy their products. Funny thing was the majority of the customers here were middle-aged to seniors. I asked them why and they said online booking takes too much of their time and some of them said they didn't really know how to use the computer.</p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Competitive Analysis</h3>
                    <p>Why does competitor exist? Competition is what driven the whole economy forward. The need to be better than the others, and it is the backbone of every economic and power. However, one thing for sure is that each competitor’s main goal is to solve the problems what customers are having. There is no one competitor better than other. They are focusing on the area where they are the strongest.</p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-5 is-offset-1">
                    <img className="mb-5" src={travelBuddy03} alt="Japan" title="Japan"></img>
                  </div>
                  <div className="column is-5">
                    <img className="mb-5" src={travelBuddy04} alt="Ecuador" title="Ecuador"></img>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <p>Take above two images for examples, Ecuador and Japan. Obviously, both are in the same market as tourist attractions but promoting different countries. They are competitors but for different regions of the world. They are both doing well promoting their own countries by showing customers what the country looks like at first glance. If customers find them interesting, they will go talk to them. They accomplished their goal by being here. More customers equal more money.</p>
                  </div>
                </div>
                <div className="columns mt-4">
                  <div className="column is-10 is-offset-1">
                    <h3 className="has-text-weight-bold">Sitemap and User Flow</h3>
                    <img className="mb-5" src={travelBuddy05} alt="User Flow" title="User Flow"></img>
                    <h3 className="has-text-weight-bold">Low Fidelity Wireframes</h3>
                    <p>As usual, paper prototype is my go to guy to design a low fidelity prototype. Paper prototype is also much easier to fix right away.</p>
                    <img className="mb-5" src={travelBuddy06} alt="Wireframe" title="Wireframe"></img>
                    <h3 className="has-text-weight-bold">High Fidelity Prototypes</h3>
                    <img className="mb-5" src={travelBuddy07} alt="High Fidelity" title="High Fidelity"></img>
                    <img className="mb-5" src={travelBuddy08} alt="High Fidelity 2" title="High Fidelity 2"></img>
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
