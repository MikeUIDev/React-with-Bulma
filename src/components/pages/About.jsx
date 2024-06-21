import React from "react";
import Job from "../Job";
// import {ButtonNeon} from "../Buttons"
import BackToTop from "../Backtotop";
// import FadeIn from "../FadeIn"

const first = [
  'Responsive Web Development & Design',
  'HTML',
  'CSS',
  'JavaScript',
  'Foundation CSS Framework',
  'UX Design',
  'Adobe Photoshop',
  'npm/node',
  'GitHub/Git',
  'Heroku',
  'Contentful',
  'Salesforce Marketing Cloud Email Studio',
  'Google Analytics'
];

const second = [
  'Responsive Web Development & Design',
  'Figma',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Mailchimp',
  'Design Systems',
  'Wireframe',
  'Prototype',
  'HTML',
  'CSS',
  'JavaScript'
];
const third = [
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap CSS Framework',
  'Photoshop',
  'Grunt',
  'Vagrant',
  'Apache Version Control'
];

const fourth = [
  'HTML',
  'CSS',
  'JavaScript',
  'Shopify',
  'WordPress',
  'Photoshop'
];

// const fourth = [
//   {
//     id: 1,
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'Shopify',
//       'WordPress',
//       'Photoshop'
//     ]
//   }
// ];

function About() {

  const listItemsFirst = first.map(skill =>
    <div class="control"><span class="tag is-neon is-medium">{skill}</span></div>
  )
  const listItemsSecond = second.map(skill =>
    <div class="control"><span class="tag is-neon is-medium">{skill}</span></div>
  )
  const listItemsThird = third.map(skill =>
    <div class="control"><span class="tag is-neon is-medium">{skill}</span></div>
  )
  const listItemsFourth = fourth.map(skill =>
    <div class="control"><span class="tag is-neon is-medium">{skill}</span></div>
  )

  // const listItemsFourth = fourth.map(skill =>{
  //   const test = `${skill.skills}`
  //   return <div class="control"><span class="tag is-neon is-medium">{test}</span></div>
  // })


  return (
    <section aria-label="About me section" class="about hero content is-large is-fullheight-with-navbar">
      <div class="page-body">
        <div class="container">
          {/* <div class="columns">
            <div class="column is-10 is-offset-1">
              <figure class="image">
                <img src="https://ucarecdn.com/83e71ac6-6c75-4e7c-96e9-5aae15a4b3f0/" alt="About Hero"></img>
              </figure>
            </div>
          </div> */}

          <section class="section fade_in">
            <div className="columns">
              <div className="column is-12">
                <h1 className="title">About</h1>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content is-medium">
                  <div class="mb-8">
                    <p className="is-size-4 has-text-weight-bold">A Frontend Developer and Designer with over 10 years of experience. I specialize in crafting website interfaces and aligning business objectives with user needs. I actively continue to seek challenges in a dynamic design environment.</p>
                    <p>My current focus revolves around improving frontend development tech stacks such as but not limited to JavaScript, React, Next.js, RESTful, and APIs Services, testing framework Jest, and learning different types of CSS frameworks Bulma and Tailwind.</p>
                    <p>On the creative side of me, it is important to enhance the visual and functional aspects of product user interfaces and focus on optimizing user experiences between humans and products.</p>
                    <p className="has-text-weight-bold">To be able to code and design well is an unicorn of the digital world. Collaboration between designers and developers is paramount and if a Frontend Developer possesses UX/UI design expertise, inter-team communication becomes seamless.</p>
                    <p>I am a person-oriented individual who is motivated by helping others. Knowing what I do that contributes to others positively derives satisfaction to me. Most importantly, the key to successful communication is empathizing with others and tailoring my message to resonate with their needs and desires.</p>
                  </div>
                  <h2 className="title mb-4">Experience</h2>
                  <section id="experience" class="experience columns is-flex-desktop-only">
                    {/* <aside className="column is-2 is-size-5 has-text-weight-bold left-text">Experience</aside> */}
                    <div className="column is-8 jobs">
                      <div className="job">
                        <Job
                          key="1"
                          title = "Digital Developer"
                          titleLink = "https://www.espn.com"
                          company = "ESPN"
                          date = "2021 - 2024"
                          description = "In charge of creating and updating existing front-facing promotion sites in the ESPN Visual Storytelling team and working closely with external clients to create interactive landing pages."
                        />
                        <div className="skills is-flex is-flex-wrap-wrap">
                          {listItemsFirst}
                        </div>
                      </div>
                      <div className="job">
                        <Job
                          key="2"
                          title = "Frontend Developer"
                          titleLink = "https://about.meta.com/"
                          company = "Meta"
                          date = "2019 - 2021"
                          description = "Led internal web projects that designed and developed user-centered mobile-first single-page applications (SPA) and landing pages."
                        />
                        <div className="skills is-flex is-flex-wrap-wrap">
                          {listItemsSecond}
                        </div>
                      </div>
                      <div className="job">
                        <Job
                          key="3"
                          title = "UI Designer"
                          titleLink = "https://www.nolo.com"
                          company = "Internet Brands (Nolo)"
                          date = "2011 - 2019"
                          description = "Responsible for creating and updating the user interface of high-profile customer-facing SaaS websites, including customer self-service web portal & enterprise application for the Sales team."
                        />
                        <div className="skills is-flex is-flex-wrap-wrap">
                          {listItemsThird}
                        </div>
                      </div>
                    </div>
                    <aside className="column is-3 is-offset-1 is-size-5 has-text-weight-bold right-text">
                      <div className="columns">
                        <div className="column is-12 content is-normal">
                          <p className="is-size-4 has-text-weight-bold">Skills</p>
                          <p className="is-size-5 has-text-weight-bold">Frontend</p>
                          <ul className="skill-listings">
                            <li>Web Development</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>Bootstrap & Bulma CSS Framework</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Git / GitHub</li>
                            <li>WordPress</li>
                            <li>Contentful</li>
                            <li>Email Marketing</li>
                          </ul>
                          <p className="is-size-5 has-text-weight-bold">Design</p>
                          <ul className="skill-listings">
                            <li>Responsive Web Design</li>
                            <li>User Experience Design</li>
                            <li>Figma</li>
                            <li>Design Systems</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>Fidelity</li>
                          </ul>
                        </div>
                      </div>
                    </aside>
                  </section>
                  <h2 className="title mb-4">Project</h2>
                  <section id="experience" class="experience columns is-flex-desktop-only">
                    <div className="column is-9 jobs">
                      <div className="job">
                        <Job
                          key="4"
                          title = "Frontend Developer"
                          titleLink = "https://www.katriscat.com/"
                          company = "Katris"
                          date = "2016 - 2017"
                          description = "Implemented new WordPress e-commerce business store using Shopify from planning with the designer to release and continually maintaining the site with new features."
                        />
                        <div className="skills is-flex is-flex-wrap-wrap">
                          {listItemsFourth}
                        </div>
                      </div>
                    </div>
                  </section>


                  {/* <div class="columns is-centered has-text-centered">
                    <div class="column">
                      <ButtonNeon
                        buttonLink = "https://mikelinstudio.com/mike.pdf"
                        buttonName = "Download Resume"
                      />
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </section>

          {/* <div class="is-divider"></div>

          <div class="container">
          <nav class="pagination is-centered" role="navigation" aria-label="pagination">
             <a class="button bd-fat-button is-info is-light bd-pagination-prev" href="/user" title="UX Design">
              <span class="icon is-left">
                <i class="fa fa-arrow-left"></i>
              </span>
              <span>
                <strong>UX Design</strong>
              </span>
            </a>

            <a class="button bd-fat-button is-info is-light bd-pagination-prev" href="/contact" title="Contact Me">
              <strong>Contact Me</strong>
              <span class="icon is-left">
                <i class="fa fa-arrow-right"></i>
              </span>
              <span>
              </span>
            </a>
            </nav>
          </div> */}

        </div>
      </div>
      {/* Back to Top button */}
      <BackToTop />
    </section>
  );
}

export default About;
