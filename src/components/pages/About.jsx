import React from "react";
import Job from "../Job";
// import {ButtonNeon} from "../Buttons"
import BackToTop from "../Backtotop";
// import FadeIn from "../FadeIn"

import HoverMoveText from "../HoverMoveText";
import FlipReveal from "../FlipReveal";
import BlendReveal from "../BlendReveal";

const first = [
  "Interaction design",
  "High-fidelity prototyping",
  "Motion design",
  "UI animation",
  "AI-assisted prototyping",
  "Vibe coding",
  "Frontend development",
  "Responsive web design",
  "Cross-functional collaboration",
  "Design-to-development workflows",
];
const second = [
  "Interaction design",
  "Product design execution",
  "Design systems",
  "High-fidelity prototyping",
  "Frontend implementation",
  "Responsive design",
  "Cross-functional collaboration",
  "Usability integration",
  "Scalable interface design",
  "Stakeholder communication",
];
const third = [
  "UI design",
  "Frontend development",
  "Responsive web design",
  "Interaction design support",
  "Performance optimization",
  "SEO-aware frontend development",
  "Conversion optimization",
  "Cross-functional collaboration",
  "Design system consistency",
  "Large-scale website support",
];

const fourth = [
  "HTML",
  "CSS",
  "JavaScript",
  "Shopify",
  "WordPress",
  "Photoshop",
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
  const listItemsFirst = first.map((skill) => (
    <div class="control">
      <span class="tag is-neon is-medium">{skill}</span>
    </div>
  ));
  const listItemsSecond = second.map((skill) => (
    <div class="control">
      <span class="tag is-neon is-medium">{skill}</span>
    </div>
  ));
  const listItemsThird = third.map((skill) => (
    <div class="control">
      <span class="tag is-neon is-medium">{skill}</span>
    </div>
  ));
  const listItemsFourth = fourth.map((skill) => (
    <div class="control">
      <span class="tag is-neon is-medium">{skill}</span>
    </div>
  ));

  // const listItemsFourth = fourth.map(skill =>{
  //   const test = `${skill.skills}`
  //   return <div class="control"><span class="tag is-neon is-medium">{test}</span></div>
  // })

  return (
    <section
      aria-label="About me section"
      class="about hero content is-large is-fullheight-with-navbar"
    >
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
                    {/* <p className="is-size-4 has-text-weight-bold">
                      I'm a Product Designer who bridges the gap between design
                      and development to craft digital experiences that feel
                      seamless and human. With over 10 years of experience, I
                      blend visual storytelling, UX thinking, and front-end
                      expertise to bring ideas to life—from concept to launch.
                    </p>
                    <p>
                      My work focuses on aligning business goals with user needs
                      through clear design systems, responsive interfaces, and
                      scalable front-end architectures. I'm fluent in tools and
                      technologies like JavaScript, React, Vite, RESTful APIs,
                      and Tailwind CSS—allowing me to design with a strong
                      awareness of what's technically possible.
                    </p>
                    <p>
                      I believe the best products come from collaboration. My
                      hybrid background helps teams communicate better,
                      prototype faster, and deliver designs that don't just look
                      good, but work beautifully. Empathy drives everything I
                      do—whether it's understanding users, collaborating with
                      developers, or refining every pixel for clarity and
                      impact.
                    </p> */}

                    {/* <p className="is-size-4 has-text-weight-bold">
                      I'm a designer and front-end developer who enjoys turning
                      complex, ambiguous problems into clear, usable digital
                      experiences. My work sits at the intersection of design,
                      interaction, and implementation, allowing me to think
                      through problems from both a user and a technical
                      perspective.
                    </p> */}
                    <p>
                      I'm a designer and front-end developer who enjoys turning
                      complex, ambiguous problems into clear, usable digital
                      experiences. My work sits at the intersection of design,
                      interaction, and implementation, allowing me to think
                      through problems from both a user and a technical
                      perspective.
                    </p>
                    <p>
                      With over 10 years of experience, I've worked across the
                      full lifecycle of digital products—from early exploration
                      and UX strategy to polished, shipped interfaces. I focus
                      on clarity and usability: intuitive flows, thoughtful
                      visual hierarchy, and patterns that scale across screens
                      and use cases.
                    </p>
                    <p>
                      I design primarily in Figma, working with components and
                      systems to ensure consistency and flexibility as products
                      grow. I care about how things are actually built, so I
                      design with real constraints in mind—spacing, states,
                      responsiveness, and edge cases—so ideas translate smoothly
                      from design into code.
                    </p>
                    <p>
                      I also bring hands-on front-end experience into my process
                      by designing and building responsive interfaces using
                      HTML, CSS, and JavaScript. This helps me prototype
                      realistically, collaborate closely with engineers, and
                      make informed design decisions based on what's possible in
                      production. I'm most comfortable in collaborative
                      environments where design and development work closely
                      together, and where attention to detail makes the
                      experience feel simple, intentional, and reliable.
                    </p>
                  </div>
                  <h2 className="title mb-4">Experience</h2>
                  <section
                    id="experience"
                    class="experience columns is-flex-desktop-only"
                  >
                    {/* <aside className="column is-2 is-size-5 has-text-weight-bold left-text">Experience</aside> */}
                    <div className="column is-8 jobs">
                      <div className="job">
                        <Job
                          key="1"
                          title="Digital Developer"
                          titleLink="https://www.espn.com"
                          company="ESPN"
                          date="2021 - 2024"
                          description="Designed and built interactive, front-facing web experiences for ESPN's Visual Storytelling team, delivering responsive, motion-rich pages that balanced visual storytelling with performance and usability. Collaborated with designers, editors, and developers to translate concepts into production-ready interfaces that scaled cleanly across devices and content types."
                        />
                        <div className="skills is-flex is-flex-wrap-wrap">
                          {listItemsFirst}
                        </div>
                      </div>
                      <div className="job">
                        <Job
                          key="2"
                          title="Frontend Designer & Developer"
                          titleLink="https://about.meta.com/"
                          company="Meta"
                          date="2019 - 2021"
                          description="Designed and developed internal web applications supporting communication and product workflows, with a focus on consistent UI patterns and responsive layouts. Worked closely with engineers and product partners to align design intent with implementation and support efficient iteration cycles."
                        />
                        <div className="skills is-flex is-flex-wrap-wrap">
                          {listItemsSecond}
                        </div>
                      </div>
                      <div className="job">
                        <Job
                          key="3"
                          title="UI Designer"
                          titleLink="https://www.nolo.com"
                          company="Internet Brands (Nolo)"
                          date="2011 - 2019"
                          description="Contributed to the design and front-end execution of large-scale, customer-facing websites and SaaS platforms, creating responsive interfaces for self-service tools and content-driven products. Partnered cross-functionally to modernize legacy interfaces, improve performance, and maintain visual consistency across a broad ecosystem of sites."
                        />
                        <div className="skills is-flex is-flex-wrap-wrap">
                          {listItemsThird}
                        </div>
                      </div>
                    </div>
                    <aside className="column is-3 is-offset-1 is-size-5 has-text-weight-bold right-text">
                      <div className="columns">
                        <div className="column is-12 content is-normal">
                          <p className="is-size-4 has-text-weight-bold">
                            Core Skills
                          </p>
                          <p className="is-size-5 has-text-weight-bold">
                            Design & UX
                          </p>
                          <ul className="skill-listings">
                            <li>UX/UI design</li>
                            <li>Interaction design</li>
                            <li>User flows & information architecture</li>
                            <li>Accessibility principles</li>
                            <li>Visual hierarchy & layout</li>
                          </ul>
                          <p className="is-size-5 has-text-weight-bold">
                            Design Systems & Patterns
                          </p>
                          <ul className="skill-listings">
                            <li>Component-based design</li>
                            <li>Design systems</li>
                            <li>Reusable UI patterns</li>
                            <li>Responsive layouts</li>
                          </ul>
                          <p className="is-size-5 has-text-weight-bold">
                            Front-End Development
                          </p>
                          <ul className="skill-listings">
                            <li>HTML, CSS/SASS, JavaScript, React</li>
                            <li>Responsive web development</li>
                            <li>Component-based UI implementation</li>
                            <li>Performance-aware design</li>
                          </ul>
                          <p className="is-size-5 has-text-weight-bold">
                            Tools
                          </p>
                          <ul className="skill-listings">
                            <li>Figma (components, libraries, prototyping)</li>
                            <li>Sketch (working knowledge)</li>
                            <li>
                              Adobe Photoshop & Illustrator, Affinity Suite
                            </li>
                          </ul>
                          <p className="is-size-5 has-text-weight-bold">
                            Collaboration
                          </p>
                          <ul className="skill-listings">
                            <li>Cross-functional collaboration</li>
                            <li>Design-to-development workflows</li>
                            <li>Stakeholder communication</li>
                            <li>Iterative problem solving</li>
                          </ul>
                        </div>
                      </div>
                    </aside>
                  </section>
                  <h2 className="title mb-4">Project</h2>
                  <section
                    id="experience"
                    class="experience columns is-flex-desktop-only"
                  >
                    <div className="column is-9 jobs">
                      <div className="job">
                        <Job
                          key="4"
                          title="Frontend Developer"
                          titleLink="https://www.katriscat.com/"
                          company="Katris"
                          date="2016 - 2017"
                          description="Designed and built end-to-end websites for nonprofits and small businesses, owning visual design, UI structure, and front-end implementation. Worked directly with clients to translate goals and requirements into clear, usable digital experiences from concept through launch."
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
