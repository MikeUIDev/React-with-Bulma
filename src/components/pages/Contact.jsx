import React from "react";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const [form, setForm] = useState({
    yourName: '',
    email: '',
    message: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className="contact hero content is-medium is-fullheight-with-navbar">
      <div className="page-body">
        <div className="container">
          <div className="section">
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
                    <input className="input is-medium has-text-left" placeholder="Joe Smith" type="text" value={form.yourName} onChange={e => {
                      setForm({
                        ...form,
                        yourName: e.target.value
                        })
                      }}
                    />
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
                    <input className="input is-medium" placeholder="hello@domain.com" type="email" value={form.email} onChange={e => {
                      setForm({
                        ...form,
                        email: e.target.value
                        })
                      }}
                    />
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
                      <textarea rows="8" cols="50" type="text" placeholder="Type your message here" className="textarea is-medium has-text-black" value={form.message} onChange={e => {
                        setForm({
                          ...form,
                          message: e.target.value
                          })
                        }}
                      />
                    </div>
                  </div>
                </div>
            </div>
            <div className="columns is-centered has-text-centered mt-4">
              <div className="column is-8">
                <button className="button custom-neon is-outlined is-rounded is-medium has-text-weight-normal is-fullwidth has-icons-right" type="submit" onClick={handleSubmit}>
                  Send Message&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faPaperPlane} color="white" size="sm"></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
