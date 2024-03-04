import React, { useState, useEffect } from "react";
import foodieCaseStudy from "../../assets/images/foodies-hero.jpg";
import travelBuddyCaseStudy from "../../assets/images/travel-buddy-hero.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function User() {


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

  return (
    <section className="user hero content is-medium is-fullheight-with-navbar">
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
              <div className="column is-10 is-offset-1">
                <h1 id="#case" className="title has-text-white">Case Studies</h1>
                <p className="subtitle has-text-white">These were couple case studies I did for the User Experience Design bootcamp I took at General Assembly.</p>
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
                  <div className="column is-10 is-offset-1">
                    <img src={foodieCaseStudy} alt="Foodie Cases Study" title="Foodie Case Study"></img>

                    <p>test</p>
                  </div>
                </div>
              </p>
              <p className="tab-content-container" data-content="2">
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <img src={travelBuddyCaseStudy} alt="Travel Buddy Cases Study" title="Travel Buddy Case Study"></img>
                    <p>test2</p>
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
