import React from "react";
import Job from "../Job";
import Link from "../Link";

const first = [
  'Web Development',
  'Heroku',
  'npm/node',
  'SASS',
  'Git/GitHub',
  'Photoshop',
  'Salesforce Marketing Cloud'
];

const second = [
  'Web Development',
  'Figma',
  'Sketch',
  'Photoshop',
  'Illustrator',
  'Mailchimp',
  'Design Systems',
  'Wireframe',
  'Prototype'
];
const third = [
  'Web Development',
  'Bootstrap Framework (LESS)',
  'Photoshop',
  'Grunt',
  'Vagrant',
  'Apache Version Control'
];

const listItemsFirst = first.map(skill =>
  <div class="control"><span class="tag is-info is-light is-medium">{skill}</span></div>
)
const listItemsSecond = second.map(skill =>
  <div class="control"><span class="tag is-info is-light is-medium">{skill}</span></div>
)
const listItemsThird = third.map(skill =>
  <div class="control"><span class="tag is-info is-light is-medium">{skill}</span></div>
)

function About() {
  return (
    <section class="about content is-medium">
      <div class="page-body">
        <div class="container">
          <div class="columns">
            <div class="column is-10 is-offset-1">
              <figure class="image is-16by9">
                <img src="https://ucarecdn.com/83e71ac6-6c75-4e7c-96e9-5aae15a4b3f0/" alt="About Hero"></img>
              </figure>
            </div>
          </div>
  
          <section class="section">
            <div class="columns">
              <div class="column is-10 is-offset-1">
                <div class="content is-medium">
                  <div class="mb-8">
                    <h2>Frontend Developer</h2>
                    <p className="mb-6">I help company build and optimize websites, and promo specific events via Email Marketing tool. I work across developing interactive elements using frontend languages and apply modern visual design best practices. I believe the end product should give everyone a delightful and an unforgettable experiences.</p>
                    <h2>What am I doing now?</h2>
                    <p>Further improving JavaScript ES6 while learning React/ReactDOM to integrate into website building. Also, staying up-to-date on Visual Design best practices.</p>
                    <p>Currently looking for a FTE (ideally) or Contract (C2H) position that focuses as a hybrid role where I get to develop and design as well.</p>
                  </div>

                  <section id="experience" class="experience columns is-flex">
                    <aside className="column is-2 is-size-5 has-text-weight-bold">Experience</aside>
                    <div className="column is-10 jobs">
                      <div className="job">
                        <Job 
                          title = "Digital Developer"
                          titleLink = "https://www.espn.com"
                          company = "ESPN"
                          date = "11/2021 - 01/2024"
                          description = "In charge of creating and updating existing front-facing promotion sites in the ESPN Visual Storytelling team and working closely with the project manager, developer, and cross-functioning team to transform ideas into interactive responsive websites for external clients."
                        />
                        <div className="skills is-flex is-flex-wrap-wrap">
                          {listItemsFirst}
                        </div>
                      </div>
                      <div className="job">
                        <Job 
                          title = "Frontend Developer"
                          titleLink = "https://about.meta.com/"
                          company = "Meta"
                          date = "11/2019 - 11/2021"
                          description = "Led the web team's internal web system under the Communication Creative Department. Working with the team manager, graphic designers, key stakeholders, and project managers to design and transform content ideas into responsive websites compatible with the internal wiki system and XML and JavaScript on our internal stack for external sites."
                          skill = "HTML"
                        />
                        <div className="skills is-flex is-flex-wrap-wrap">
                          {listItemsSecond}
                        </div>
                      </div>
                      <div className="job">
                        <Job 
                          title = "UI Designer"
                          titleLink = "https://www.nolo.com"
                          company = "Internet Brands (Nolo)"
                          date = "04/2011 - 11/2019"
                          description = "Responsible for the user interface of high-profile customer-facing SaaS websites, including customer self-service web portal & enterprise application for the Sales team. Also, to ensure all web content supports every platform and device, focusing on easy-to-use experiences and aligning with business goals."
                          skill = "HTML"
                        />
                        <div className="skills is-flex is-flex-wrap-wrap">
                          {listItemsThird}
                        </div>
                      </div>
                    </div>
                  </section>

                  <div class="columns is-centered has-text-centered">
                    <div class="column">
                      <a class="button is-info is-outlined is-rounded is-medium has-text-weight-normal" href="https://mikelinstudio.com/mike.pdf"><span>Download Resume</span></a>
                    </div>
                  </div>

                  <ul className="listings">
                    <Link 
                      listing="listing 1"
                    />
                    <Link 
                      listing="listing 2"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </section>
  
          <div class="is-divider"></div>
  
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
           
  </div>
  
        </div>
      </div>
    </section>
  );
}

export default About;
