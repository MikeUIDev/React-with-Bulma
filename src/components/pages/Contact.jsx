import React from "react";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import emailjs from "emailjs-com"


function Contact() {
  const [state, setState] = useState({
    yourName: "",
    email: "",
    message: ""
  });

  function reset(ev) {
    ev.preventDefault();
    setState({ yourName: "", email: "", message: "" });
  }

  const SERVICE_ID = "service_29rrq9m";
  const TEMPLATE_ID = "template_t3z6ehf";
  const PUBLIC_KEY = "AP7N6IwTNiaxXTNwV";
  const thankYou = document.getElementById("thank-you-message");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        thankYou.innerHTML=`<p class="sent-msg is-size-4 has-text-weight-bold">Thank you for your message. I will get back to you as soon as I can.</p>`
      }, (error) => {
        console.log(error.text);
        thankYou.innerHTML=`<p class="sent-msg__error is-size-4 has-text-weight-bold has-text-danger">Something went wrong! Your message didn't send. Please scroll down and click on my email. Thank you.</p>`
      });
    e.target.reset()
  };

  return (
    <section className="contact hero content is-medium is-fullheight-with-navbar">
      <div className="page-body">
        <div className="container">
          <div className="section">
            <form class="formContainer" action="?" method="POST" onSubmit={handleOnSubmit}>
              <div className="columns is-centered has-text-centered">
                <div className="column is-8">
                  <h1 className="title has-text-weight-bold is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                    GET IN TOUCH
                  </h1>
                  <p className="is-size-4 mt-6">Feel free to reach out regarding to job opportunities, project, or just say hello.</p>
                </div>
              </div>
              <div className="columns is-centered has-text-centered mt-4">
                <div className="column is-8">
                  <div id="thank-you-message"></div>
                </div>
              </div>
              <div className="columns is-centered has-text-centered">
                <div className="column is-4">
                  <div className="field">
                    <label className="label is-medium has-text-left has-text-weight-normal">Name </label>
                    <div className="control has-icons-left">
                      <input className="input is-medium has-text-left" placeholder="Joe Smith" id="from_name" name="from_name" type="text" value={state.yourName}
                        onChange={ev => {
                          setState({
                            ...state,
                            yourName: ev.target.value
                          })
                        }}
                        required />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faUser} color="#06191D" size="1x"></FontAwesomeIcon>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="field">
                    <label className="label is-medium has-text-left has-text-weight-normal">Email</label>
                    <div className="control has-icons-left">
                      <input className="input is-medium" placeholder="hello@domain.com" id="from_email" name="from_email" type="email" value={state.email}
                        onChange={ev => {
                          setState({
                            ...state,
                            email: ev.target.value
                          })
                        }}
                        required />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} color="#06191D" size="1x"></FontAwesomeIcon>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-centered has-text-centered">
                <div className="column is-8">
                    <div className="field">
                      <label className="label is-medium has-text-left has-text-weight-normal">Message </label>
                      <div className="control">
                        <textarea rows="8" cols="50" type="text" placeholder="Type your message here" name="message" className="textarea is-medium has-text-black" value={state.message}
                          onChange={ev => {
                              setState({
                              ...state,
                              message: ev.target.value
                            })
                          }}
                          required />
                      </div>
                    </div>
                  </div>
              </div>
              <div className="columns is-centered has-text-centered mt-4">
                <div className="column is-2">
                  <input className="button formButton custom-neon is-light is-outlined is-rounded is-medium has-text-weight-normal is-fullwidth" type="reset" value="Reset"
                    onClick={reset}
                  />
                </div>
                <div className="column is-6">
                  <input className="button formButton custom-neon is-outlined is-rounded is-medium has-text-weight-normal is-fullwidth" type="submit" value="Send Message" />
                    {/* Send Message&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faPaperPlane} color="white" size="sm"></FontAwesomeIcon> */}
                </div>
              </div>
              <div className="columns is-centered has-text-centered mt-4">
                <div class="g-recaptcha" data-sitekey="6Ld5hJQpAAAAAH8Jbi8AlaJDPcXXtGhRHL_cH1TK"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
