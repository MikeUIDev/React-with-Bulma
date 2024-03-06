import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'


function Job(props) {
  return (
    <div className="columns content is-medium mb-6">
      <div className="column is-12">
        {/* Card */}
        <div className="card">
          <div className="card-image">
              <img src={props.img} alt={props.name} title={props.name}></img>
          </div>
          <footer className="card-footer mt-4">
            <div className="card-footer-item mb-0 is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-direction-column">
              <p className="">
                <a href={props.link} alt={props.name} title={props.name} target="_blank">{props.name} &nbsp; <FontAwesomeIcon icon={faExternalLink} color="#ffffff" size="xs"></FontAwesomeIcon> </a>    
              </p>
              <p className="tag is-dark is-medium has-text-white">{props.type}</p>
            </div>
            <div className="card-footer-item has-text-left is-flex is-align-items-flex-start is-justify-content-flex-start">
              <span className="is-small has-text-white">
                {props.description}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Job;