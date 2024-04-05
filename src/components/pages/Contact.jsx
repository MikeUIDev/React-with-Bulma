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

  function removeBlock(ev) {
    const buttonMsg = document.getElementById("button-msg");
    const sendMsg = document.getElementById("send-msg");
    const guestName = document.getElementById("from_name");
    const guestEmail = document.getElementById("from_email");
    const guestMsg = document.getElementById("guest-msg");
    const test = guestName && guestName.value !== "" && guestEmail && guestEmail.value !== "" && guestMsg && guestMsg.value !== "" ? sendMsg.classList.add("is-invisible") : ''
    // const test2 = input && input.value !== "" && textarea && textarea.value !== "" ? sendMsg.classList.add("is-invisible") : ''
    // const test = guestName && guestName.value !== "" && guestEmail && guestEmail.value !== "" && guestMsg && guestMsg.value !== "" ? buttonMsg.setAttribute("disabled", "") : ''

    return test;
  }

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
    e.target.reset()
  };

  return (
    <section aria-label="Contact me section" className="contact hero content is-medium is-fullheight-with-navbar fade_in">
      <div className="page-body">
        <div className="container">
          <div className="section">
            <form class="formContainer" action="?" method="POST" onSubmit={handleOnSubmit}>
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
                    <label className="label is-medium has-text-left has-text-weight-normal">Name </label>
                    <div className="control has-icons-left">
                      <input id="from_name"  className="input is-medium has-text-left" placeholder="Joe Smith" name="from_name" type="text" value={state.yourName}
                        onChange={ev => {
                          setState({
                            ...state,
                            yourName: ev.target.value
                          })
                        }}
                        required />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faUser} color="white" size="1x"></FontAwesomeIcon>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="field">
                    <label className="label is-medium has-text-left has-text-weight-normal">Email</label>
                    <div className="control has-icons-left">
                      <input id="from_email"  className="input is-medium" placeholder="hello@domain.com" name="from_email" type="email" value={state.email}
                        onChange={ev => {
                          setState({
                            ...state,
                            email: ev.target.value
                          })
                        }}
                        required />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} color="#white" size="1x"></FontAwesomeIcon>
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
                        <textarea id="guest-msg" rows="8" cols="50" type="text" placeholder="Type your message here" name="message" className="textarea is-medium" value={state.message}
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
              <div id="send-msg" className="send-container columns is-centered has-text-centered mt-4">
                <div className="column is-2">
                  <input className="button button-reset formButton custom-neon is-light is-outlined is-rounded is-medium has-text-weight-normal is-fullwidth" type="reset" value="Reset"
                    onClick={reset}
                  />
                </div>
                <div className="column is-6">
                  <input id="button-msg" className="button button-submit formButton custom-neon is-outlined is-rounded is-medium has-text-weight-bold is-fullwidth" type="submit" value="Send Message" onClick={removeBlock} />
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
