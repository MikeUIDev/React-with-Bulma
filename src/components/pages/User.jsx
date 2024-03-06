import React, { useState, useEffect } from "react";
import foodieCaseStudy from "../../assets/images/foodies-hero.jpg";
import travelBuddyCaseStudy from "../../assets/images/travel-buddy-hero.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function User() {

  const TABS = [...document.querySelectorAll('#tabs li')];
  const CONTENT = [...document.querySelectorAll('#tab-content .tab-content-container')];
  const ACTIVE_CLASS = 'is-active';
  
  function initTabs() {
      TABS.forEach((tab) => {
        tab.addEventListener('click', (e) => {
          let selected = tab.getAttribute('data-tab');
          updateActiveTab(tab);
          updateActiveContent(selected);
        })
      })
  }
  
  function updateActiveTab(selected) {
    TABS.forEach((tab) => {
      if (tab && tab.classList.contains(ACTIVE_CLASS)) {
        tab.classList.remove(ACTIVE_CLASS);
      }
    });
    selected.classList.add(ACTIVE_CLASS);
  }
  
  function updateActiveContent(selected) {
    CONTENT.forEach((item) => {
      if (item && item.classList.contains(ACTIVE_CLASS)) {
        item.classList.remove(ACTIVE_CLASS);
      }
      let data = item.getAttribute('data-content');
      if (data === selected) {
        item.classList.add(ACTIVE_CLASS);
      }
    });
  }
  
  initTabs();

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 300) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

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

            <div className="tabs is-medium is-fullwidth" id="tabs">
              <ul>
                <li className="is-active" data-tab="1">
                  <a className="has-text-white">
                    <span>Foodies</span>
                  </a>
                </li>
                <li data-tab="2">
                  <a className="has-text-white">
                    <span>Travel Buddy</span>
                  </a>
                </li>
              </ul>
            </div>

            <div id="tab-content">
              <p className="tab-content-container is-active" data-content="1">
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
              </p>
              <p className="tab-content-container" data-content="2">
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
              </p>
            </div>



          </div>
          <div className="top-to-btm">
            {" "}
            {showTopBtn && (
              <p onClick={goToTop}><FontAwesomeIcon icon={faArrowAltCircleUp} color="white" size="2x"></FontAwesomeIcon></p>
            )}{" "}
        </div>
        </div>
      </div>
    </section>
  );
}

export default User;
