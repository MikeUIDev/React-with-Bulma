import React from "react";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import emailjs from "emailjs-com"


function Contact() {
  const [form, setForm] = useState({
    yourName: '',
    email: '',
    message: '',
  })

  const SERVICE_ID = "service_29rrq9m";
  const TEMPLATE_ID = "template_t3z6ehf";
  const PUBLIC_KEY = "AP7N6IwTNiaxXTNwV";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
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
                <div className="column">
                  <h1 className="title has-text-weight-bold is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                    GET IN TOUCH
                  </h1>
                </div>
              </div>
              <div className="columns is-centered has-text-centered">
                <div className="column is-4">
                  <div className="field">
                    <label className="label is-medium has-text-left has-text-weight-normal">Name </label>
                    <div className="control has-icons-left">
                      <input className="input is-medium has-text-left" placeholder="Joe Smith" id="from_name" name="from_name" type="text" value={form.yourName} onChange={e => {
                        setForm({
                          ...form,
                          yourName: e.target.value
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
                      <input className="input is-medium" placeholder="hello@domain.com" id="from_email" name="from_email" type="email" value={form.email} onChange={e => {
                        setForm({
                          ...form,
                          email: e.target.value
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
                        <textarea rows="8" cols="50" type="text" placeholder="Type your message here" name="message" className="textarea is-medium has-text-black" value={form.message} onChange={e => {
                          setForm({
                            ...form,
                            message: e.target.value
                            })
                          }}
                          required />
                      </div>
                    </div>
                  </div>
              </div>
              <div className="columns is-centered has-text-centered mt-4">
                <div className="column is-8">
                  <input className="button formButton custom-neon is-outlined is-rounded is-medium has-text-weight-normal is-fullwidth has-icons-right" type="submit" value="Send Message" />
                    {/* Send Message&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faPaperPlane} color="white" size="sm"></FontAwesomeIcon> */}
                    <div class="g-recaptcha" data-sitekey="6Ld5hJQpAAAAAH8Jbi8AlaJDPcXXtGhRHL_cH1TK"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
