import React from "react";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import emailjs from "emailjs-com"

function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const formValidated = () => {
    return (
      state.name &&
      state.email &&
      state.message.length > 4
    );
  };

  const reset = () => {
    setState({ name: "", email: "", message: "" });
  };

  // const removeBlock = () => {
  //   const buttonMsg = document.getElementById("button-msg");
  //   const sendMsg = document.getElementById("send-msg");
  //   const guestName = document.getElementById("from_name");
  //   const guestEmail = document.getElementById("from_email");
  //   const guestMsg = document.getElementById("guest-msg");
  //   const test = guestName && guestName.value !== "" && guestEmail && guestEmail.value !== "" && guestMsg && guestMsg.value !== "" ? sendMsg.classList.add("is-invisible") : ''

  //   return test;
  // }

  const SERVICE_ID = "service_29rrq9m";
  const TEMPLATE_ID = "template_t3z6ehf";
  const PUBLIC_KEY = "AP7N6IwTNiaxXTNwV";
  const thankYou = document.getElementById("thank-you-message");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        thankYou.innerHTML=`<div class="box thank-you"><p class="sent-msg is-size-4 has-text-weight-bold has-text-grey-darker">Thank you for your message. I will get back to you as soon as I can.</p></div>`

      }, (error) => {
        console.log(error.text);
        thankYou.innerHTML=`<div class="box thank-you"><p class="sent-msg__error is-size-4 has-text-weight-bold has-text-danger">Something went wrong! Your message didn't send. Please scroll down and click on my email. Thank you.</p></div>`
      });
    reset();
  };

  return (
    <section aria-label="Contact me section" className="contact hero content is-medium is-fullheight-with-navbar fade_in">
      <div className="page-body">
        <div className="container">
          <div className="section">
            <form class="formContainer" action="?" method="POST" onSubmit={handleOnSubmit}>
              <fieldset>
                <div className="columns is-centered has-text-centered">
                  <div className="column is-8">
                    <h1 className="title has-text-weight-bold is-spaced is-size-2-desktop is-size-2-tablet is-size-3-mobile">
                      GET IN TOUCH
                    </h1>
                    <h2 className="title has-text-weight-normal">Feel free to reach out regarding to job opportunity, project, or just say hello.</h2>
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
                      <label className="label is-medium has-text-left has-text-weight-normal" htmlFor="from_name">Name </label>
                      <div className="control has-icons-left">
                        <input id="from_name"  className="input is-medium has-text-left" placeholder="Joe Smith" name="from_name" type="text" value={state.name}
                          onChange={(e) => {
                            setState({...state, name: e.target.value})
                          }}
                          required />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faUser} color="#999999" size="1x"></FontAwesomeIcon>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="field">
                      <label className="label is-medium has-text-left has-text-weight-normal" htmlFor="from_email">Email</label>
                      <div className="control has-icons-left">
                        <input id="from_email"  className="input is-medium" placeholder="hello@domain.com" name="from_email" type="email" value={state.email}
                          onChange={(e) => {
                            setState({
                              ...state,
                              email: e.target.value
                            })
                          }}
                          required />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faEnvelope} color="#999999" size="1x"></FontAwesomeIcon>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns is-centered has-text-centered">
                  <div className="column is-8">
                      <div className="field">
                        <label className="label is-medium has-text-left has-text-weight-normal" htmlFor="message">Message </label>
                        <div className="control">
                          <textarea id="guest-msg" rows="8" cols="50" type="text" placeholder="Type your message here" name="message" className="textarea is-medium" value={state.message}
                            onChange={(e) => {
                                setState({
                                ...state,
                                message: e.target.value
                              })
                            }}
                            required />
                        </div>
                      </div>
                    </div>
                </div>
                <div id="send-msg" className="send-container columns is-centered has-text-centered mt-4">
                  <div className="column is-2">
                    <input className="button button-reset formButton custom-neon is-light is-outlined is-rounded is-medium has-text-weight-normal is-fullwidth" type="reset" value="Reset" onClick={reset} />
                  </div>
                  <div className="column is-6">
                    <input id="button-msg" className="button button-submit formButton custom-neon is-outlined is-rounded is-medium has-text-weight-bold is-fullwidth" type="submit" value="Send Message" disabled={!formValidated()} />
                      {/* Send Message&nbsp;&nbsp;
                      <FontAwesomeIcon icon={faPaperPlane} color="white" size="sm"></FontAwesomeIcon> */}
                  </div>
                </div>
                <div className="columns is-centered has-text-centered mt-4">
                  <div class="g-recaptcha" data-sitekey="6Ld5hJQpAAAAAH8Jbi8AlaJDPcXXtGhRHL_cH1TK"></div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;